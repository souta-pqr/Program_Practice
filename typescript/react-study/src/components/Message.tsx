//無名関数でコンポーネントを定義し，Textという変数に代入する
const Text = (props: {content: string}) => {
    const { content } = props
    return <p className="text">{content}</p>
}

// 同様に定義したコンポーネントをMessageという変数に代入する
const Message = (props: {}) => {
    const content1 = "This is parent component"
    const content2 = "This is child component"

    return (
        <div>
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message;