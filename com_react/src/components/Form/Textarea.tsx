import React, {useEffect, useRef} from 'react'
import {useField} from '@unform/core'
import {iFormControl} from 'types'

export function Textarea({name, label, placeholder}: iFormControl) {
    const inputRef = useRef(null)

    const {fieldName, defaultValue, registerField} = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    return (
        <div className="form-control textarea">
            <label>{label}</label>
            <textarea
                placeholder={placeholder}
                ref={inputRef}
                defaultValue={defaultValue}
                rows={8}></textarea>
        </div>
    )
}
