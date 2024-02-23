import React, { useState, useMemo } from "react"
import { isTemplateSpan } from "typescript"

export const UseMemoSample = () => {
    const [text, setText] = useState("")

    const [items, setItem] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItem((prevItem) => {
            return [...prevItem, text]
        })
        setText("")
    }

    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
    const numberofCharacters2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1: {numberOfCharacters1}</p>
                <p>Total Number of Characters 2: {numberofCharacters2}</p>
            </div>
        </div>
    )
}

export default UseMemoSample