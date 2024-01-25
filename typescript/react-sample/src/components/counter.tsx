import { useState } from 'react';

type CounterProps = {
    initialValue: number
}

// このコンポーネントを使用する際は，以下のように，
// propsのinitialValueに初期値をセットしてください．
// < Counter initialValue={0} />
const Counter = (props: CounterProps) => {
    // カウントを保持する一つの状態をuseState()で宣言します．引数には初期値を指定します．
    // countが現在の状態，setCountが状態を更新する関数です．
    const [count, setCount] = useState(props.initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            {/* ボタンを押した時に，countの状態を更新します． */}
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </div>
    )   
}

export default Counter;