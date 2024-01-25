import React from "react";

type ContainerProps = {
    title: string;
    children: React.ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
    const { title, children } = props;

    return (
        <div style={{ background: "red" }}>
            <span>{title}</span>
            { /* propsのchildrenを埋め込むと，このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
            <div>{children}</div>
        </div>
    );
}

const Parent = (): JSX.Element => {
    return (
        // Containerを使用する際に，ほかの要素を囲って使用する
        <Container title="Hello">
            <p>個々の部分が背景色で囲まれます</p>
        </Container>
    );
}

export default Parent;