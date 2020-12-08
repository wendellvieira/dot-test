import React, {Component} from 'react'
import {Form as UnformForm} from '@unform/web'
import {iForm, iFormControl} from 'types'
import {Input, InputMaskProps, InputMask} from './Input'
import {Textarea} from './Textarea'

export default class Form extends Component<iForm> {
    static Input({mask, ...rest}: Partial<InputMaskProps>) {
        if (mask) {
            const restAttrs = {mask, ...rest} as InputMaskProps
            return <InputMask {...restAttrs} />
        } else {
            const restAttrs = rest as iFormControl
            return <Input {...restAttrs} />
        }
    }

    static Agroup({children}: iForm) {
        return <div className="agroup-line">{children}</div>
    }

    static Textarea = Textarea

    handleSubmit(data: any) {
        console.log(data)
    }

    render() {
        const {children} = this.props
        return (
            <UnformForm onSubmit={(ev) => this.handleSubmit(ev)}>
                <div className="cnt-form">{children}</div>
            </UnformForm>
        )
    }
}
