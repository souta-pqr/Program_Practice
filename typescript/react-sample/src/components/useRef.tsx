import React, { useState, useRef } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000

const ImageUploader = () => {
    // 隠されたinput要素にアクセスするためのfef
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    // 選択されたファイルデータを保持するref
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    // 画像をアップロードというテキストがクリックされたときのコールバック
    const onClickText = () => {
        if(inputImageRef.current !== null) {
            // inputのDOMにアクセスして，クリックイベントを発火させる
            inputImageRef.current.click()
        }
    }
    // ファイルが選択された後に呼ばれるコールバック
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files !== null && files.length > 0) {
            // fileRef.currentに値を保存する
            // fileRef.currentが変化しても再描画は発生しない
            fileRef.current = files[0]
        }
    }
    // アップロードボタンがクリックされたときに呼ばれるコールバック
    const onClockUpload = async () => {
        if (fileRef.current !== null) {
            // 通常はここでAPIを呼んで，ファイルをサーバーにアップロードする
            // ここでは類似的に一定時間待つ
            await sleep(UPLOAD_DELAY)
            // アップロードが成功した旨を表示するために，メッセージを書き換える
            setMessage(`${fileRef.current.name} has been successfully uploaded!`)
        }
    }

    return (
        <div>
            <p style={{ textDecoration: "underline" }} onClick={onClickText}>
            画像をアップロード
            </p>
            <input
                ref={inputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                style={{ visibility: "hidden" }}
            />
            <br />
            <button onClick={onClockUpload}>アップロード</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}

export default ImageUploader;