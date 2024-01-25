// 無名関数でコンポーネントを定義して，Textという変数に代入する
// Textコンポーネントは親から`content`というデータを受け取る
const Text = (Props: { content: string }) => {
    // Propsの中からcontentを取り出す
    const { content } = Props
    // contentを表示する
    return <p className="text">{content}</p>
}

// 同様に定義したコンポーネントをMwssageという変数に代入する
const Message = (props: {}) => {
    const content1 = "This is parent component"
    const content2 = "Message uses Text component"

    return (
        <div>
            {/* contentというキーでコンポーネントにデータを渡す */}
            <Text content={content1} />
            {/* 違うデータを渡すと，違う内容が表示される */}
            <Text content={content2} />
        </div>
    )
}

// Messageコンポーネントをエクスポートする
export default Message