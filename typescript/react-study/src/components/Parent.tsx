import React, { memo, useState } from "react";

type FizzProps = {
    isFizz: boolean;
}

//ただの関数コンポーネント
const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizzが再描画されました．isFizz${isFizz}`)
    return <span>{isFizz ? "Fizz": ""}</span>
}

type Buzzprops = {
    isBuzz: boolean;
    onClick: () => void;
}

// Buzzはメモ化した関数コンポーネント
const Buzz = memo<Buzzprops>((props) => {
    const { isBuzz, onClick } = props
    console.log(`Buzzが再描画されました．isBuzz${isBuzz}`)
    return (
        <span onClick={onClick}>
            {isBuzz ? "Buzz": ""}
        </span>
    )
})

export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    // Parentの再描画のたびに作成される
    const onBuzzClick = () => {
        console.log("onBuzzClick")
    }
    console.log(`Parentが再描画されました．count=${count}`)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <p>{`現在のカウント：${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
            </p>
        </div>
    )
}