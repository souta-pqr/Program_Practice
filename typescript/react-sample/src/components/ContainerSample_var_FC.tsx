import React from "react";

// // React17以前ではFCを指定した場合，
// // Childerenがpropsに暗黙的に含まれています．
// type ContainerProps = {
//     title: string;
// }

// React18からのコンポーネントへの型指定方法
// VFCが非推奨になり，FCでの暗黙的なchildrenの指定が廃止されました．
type ContainerProps = {
    title: string;
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {
    const { title, children } = props;


    return (
        <div style={{ background: "red" }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    );
}

// // React17以前ではchildrenを使用しない場合，VFCを指定します．
// const Parent: React.VFC = () => {
//     return (
//         <Container>
//             <p>個々の部分が背景色で囲まれます</p>
//         </Container>
//     );
// }