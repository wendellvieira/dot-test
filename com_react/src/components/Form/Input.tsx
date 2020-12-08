import React, {useEffect, useRef} from 'react'
import {useField} from '@unform/core'
import ReactInputMask, {Props as InputProps} from 'react-input-mask'
import {iFormControl} from 'types'

export function Input({name, label, placeholder}: iFormControl) {
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
        <div className="form-control">
            <label>{label}</label>
            <input
                ref={inputRef}
                defaultValue={defaultValue}
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export type InputMaskProps = iFormControl & InputProps

export function InputMask({name, label, placeholder, ...rest}: InputMaskProps) {
    const inputRef = useRef(null)

    const {fieldName, registerField, defaultValue} = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                ref.setInputValue(value)
            },
            clearValue(ref: any) {
                ref.setInputValue('')
            },
        })
    }, [fieldName, registerField])

    return (
        <div className="form-control">
            <label>{label}</label>
            <ReactInputMask
                ref={inputRef}
                defaultValue={defaultValue}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}
