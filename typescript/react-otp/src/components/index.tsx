import * as speakeasy from 'speakeasy';
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';

function OTPTest() {
    const [QRCodeDisplay, setQRCodeDisplay] = useState('');
    const [PassWord, setPassWord] = useState('');
    const [verificationResult, setVerificationResult] = useState('認証実行前');

    const test = async () => {
        console.log('test実行中...');
        const secret = generateSecret();
        try {
            await generateQRCodeASCII(secret);
            console.log('QRコードが正常に生成されました。');
        } catch (error) {
            console.error('QRコード生成中にエラーが発生しました:', error);
        }
    };

    const generateSecret = () => {
        const secret = speakeasy.generateSecret({ length: 20 });
        // DBに登録する必要がある. 以下はテスト用のダミーデータ
        const test_mode = true;
        if(test_mode) {
            return {
                ascii: '!{[L.wsBzx2}f}%?UqZW', // 基本これしか使わない
                hex: '217b5b4c2e7773427a78327d667d253f55715a57',
                base32: 'EF5VWTBOO5ZUE6TYGJ6WM7JFH5KXCWSX',
                otpauth_url: 'otpauth://totp/SecretKey?secret=EF5VWTBOO5ZUE6TYGJ6WM7JFH5KXCWSX'
            };
        }
        return secret;
    };

    const getSecret = (userId:string) => {
        // DBからsecretを取得する
        // 以下はテスト用のダミーデータ
        return {
            ascii: '!{[L.wsBzx2}f}%?UqZW', // 基本これしか使わない
            hex: '217b5b4c2e7773427a78327d667d253f55715a57',
            base32: 'EF5VWTBOO5ZUE6TYGJ6WM7JFH5KXCWSX',
            otpauth_url: 'otpauth://totp/SecretKey?secret=EF5VWTBOO5ZUE6TYGJ6WM7JFH5KXCWSX'
        };
    }

    const generateQRCodeASCII = async (secret: speakeasy.Key) => {
        const otpauthUrl = speakeasy.otpauthURL({
            secret: secret.ascii,
            label: encodeURIComponent('Your App Name:User Email'),
            issuer: 'Your App Name',
            algorithm: 'sha1',
            digits: 6,
            period: 30,
        });

        try {
            const url = await QRCode.toDataURL(otpauthUrl);
            console.log(url);
            setQRCodeDisplay(url); // Update QRCodeDisplay state
            console.log("QRCodeDisplayの表示");
            console.log(QRCodeDisplay);
        } catch (err) {
            console.error('QR Code生成エラー:', err);
        }
    };

    // 二要素認証コードを検証する関数
    const verifyToken = () => {
        // 秘密鍵を取得する（本来はデータベースから取得します）
        const secret = getSecret("dummy"); // この関数は、実際のアプリケーションではユーザーIDに基づいてユーザーの秘密鍵をデータベースから取得する必要があります。

        // speakeasyを使用してトークンの検証を試みる
        const verified = speakeasy.totp.verify({
            secret: secret.ascii,
            encoding: 'ascii',
            token: PassWord,
            window: 1 // ここで指定した範囲内であれば前後のトークンも有効とみなすことができます。
        });

        if (verified) {
            setVerificationResult('認証成功');
        } else {
            setVerificationResult('認証失敗');
        }
    };

    return (
        <div>
            <button onClick={test}>Generate QR Code</button>
            <div>
                {QRCodeDisplay && <img src={QRCodeDisplay} alt="Generated QR Code" style={{ marginTop: '20px' }} />}
            </div>
            <div>
                <input
                    type="text"
                    value={PassWord}
                    onChange={(e) => setPassWord(e.target.value)}
                    placeholder='Enter your 6-digit code here...'
                />
                <button onClick={verifyToken}>Verify Token</button>
            </div>
            <div>{verificationResult}</div>
        </div>
    );
}

export default OTPTest;

