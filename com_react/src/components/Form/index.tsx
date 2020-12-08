import React, {Component, createRef} from 'react'
import {Form as UnformForm} from '@unform/web'
import {iForm, iFormControl, FormData} from 'types'
import {Input, InputMaskProps, InputMask} from './Input'
import {Textarea} from './Textarea'
import {ValidationError} from 'yup'
import {FormHandles} from '@unform/core'

export default class Form extends Component<iForm> {
    formRef = createRef<FormHandles>()

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

    async handleSubmit(data: object) {
        try {
            this.formRef.current?.setErrors({})

            await this.props.schemaValidate?.validate(data, {
                abortEarly: false,
            })

            if (this.props.onSubmit) this.props.onSubmit(data)
        } catch (err) {
            const validationErrors: Partial<FormData> = {}
            if (err instanceof ValidationError) {
                err.inner.forEach((error) => {
                    const path = error.path as keyof FormData
                    validationErrors[path] = error.message
                })
                this.formRef.current?.setErrors(validationErrors)
            }
        }
    }

    render() {
        const {children} = this.props
        return (
            <UnformForm
                ref={this.formRef}
                onSubmit={(ev) => this.handleSubmit(ev)}>
                <div className="cnt-form">{children}</div>
            </UnformForm>
        )
    }
}
