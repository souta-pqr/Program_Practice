import { on } from "events"
import React, { useState, useRef, useCallback, useDebugValue } from "react"

const useInput = () => {
    const [state, setValue] = useState("")

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [])

    useDebugValue(state)

    return [state, onChange] as const
}

export const Input = () => {
    const [name, setName] = useInput()

    return <input value={name} onChange={setName} />
}