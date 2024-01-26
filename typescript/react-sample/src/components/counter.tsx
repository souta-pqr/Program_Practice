import { useReducer } from 'react';

type Action = "DECREMNET" | "DOUBLE" | "RESET" | "INCREMENT";

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case "DECREMNET":
            return currentCount - 1;
        case "INCREMENT":
            return currentCount + 1;
        case "DOUBLE":
            return currentCount * 2;
        case "RESET":
            return 0;
        default:
            return currentCount;
    }
}

type CounterProps = {
    initialValue: number;
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* dispatch関数にactionを渡して，状態を更新します． */}
            <button onClick={() => dispatch("DECREMNET")}>-</button>
            <button onClick={() => dispatch("DOUBLE")}>x2</button>
            <button onClick={() => dispatch("RESET")}>Reset</button>
            <button onClick={() => dispatch("INCREMENT")}>+</button>
        </div>
    )
}

export default Counter;