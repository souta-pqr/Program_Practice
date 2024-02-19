const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

// Nodemailerの設定
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'boriko0116@gmail.com', // あなたのGmailアドレス
    pass: 'souta0116' // あなたのGmailパスワード
  }
});

app.post('/api/send-otp', (req, res) => {
  const otp = req.body.otp;
  const userEmail = req.body.email; // ユーザーのメールアドレス

  // メールの設定
  let mailOptions = {
    from: 'your-email@gmail.com', // 送信元のメールアドレス
    to: userEmail, // 送信先のメールアドレス
    subject: 'Your OTP',
    text: `Your OTP is ${otp}`
  };

  // メールを送信
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred while sending OTP:', error);
      res.status(500).send({ message: 'Failed to send OTP.' });
    } else {
      console.log('OTP has been sent:', info.response);
      res.status(200).send({ message: 'OTP has been sent.' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
