import React, { useState } from 'react';
import axios from 'axios';

// OTP生成関数
const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000); // 6桁のランダムな数字を生成
  return otp;
};

const OTPComponent: React.FC = () => {
  const [otp, setOtp] = useState<number | null>(null);

  const handleGenerateOTP = async () => { // 非同期関数として宣言
    const newOTP = generateOTP();
    setOtp(newOTP);
  
    // ユーザーにOTPを送信するAPIを呼び出す
    try {
      const response = await axios.post('/api/send-otp', { otp: newOTP });
      if (response.status === 200) {
        console.log('OTPが正常に送信されました');
      } else {
        console.log('OTPの送信に失敗しました');
      }
    } catch (error) {
      console.error('OTPの送信中にエラーが発生しました:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateOTP}>OTPを生成</button>
      {otp && <p>あなたのOTPは {otp} です。</p>}
    </div>
  );
};

export default OTPComponent;
