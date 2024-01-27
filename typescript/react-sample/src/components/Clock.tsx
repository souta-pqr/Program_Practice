import React, { useState, useEffect } from 'react';

enum Locale {
    US = 'en-US',
    JP = 'ja-JP'
}

const getLocaleFromString = (localeString: string): Locale => {
    switch (localeString) {
        case Locale.US:
            return Locale.US;
        case Locale.JP:
            return Locale.JP;
        default:
            return Locale.US;
    }
}

const Clock = () => {
    const [locale, setLocale] = useState<Locale>(Locale.US);
    const [timeStamp, setTimeStamp] = useState<Date>(new Date());

    const UPDATE_CYCLE = 1000; // 1秒ごとに更新

    // タイマーのセットをするための副作用
    useEffect(() => {
        // タイマーのセット
        const timer = setInterval(() => {
            setTimeStamp(new Date())
        }, UPDATE_CYCLE)

        // クリーンアップ関数を私，アンマウント時にタイマーの解除をする
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>:{timeStamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value={Locale.US}>アメリカ</option>
                    <option value={Locale.JP}>日本</option>
                </select>
            </p>
        </div>
    )
}

export default Clock;