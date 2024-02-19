import { useState } from "react";

type CounterProps = {
    initialValue: number;
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props

    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter