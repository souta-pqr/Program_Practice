import React from "react";

// Titleを渡すためのContextを作成します
const TitleContext = React.createContext("");

// Titleコンポーネントの中でContextの値を参照します．
const Title = () => {
    // consumerを使って，Contextの値を参照します．
    return (        
        <TitleContext.Consumer>
            {/* Consumer直下に関数を置いて，Contextの値を参照します． */}
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/* HeaderからTitleねは何もデータは渡しません． */}
            <Title />
        </div>
    )
}

// Pageコンポーネントの中でContextに値を渡します．
const Page = () => {
    const title = "React Book";

    // Providerを使って，Contextに値を渡します.
    // Provider以下のコンポーネントから値を参照できます．
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page;