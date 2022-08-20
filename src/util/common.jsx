import { useState } from "react";

export function useInput(init) {
    const [value, setValue] = useState(init)
    const onChange = (event) => {
        setValue(() => event.target.value)
    }
    return { value, setValue, onChange }
}