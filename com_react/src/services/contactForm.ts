import * as Yup from 'yup'
import {FormData} from 'types'

export const schema = Yup.object().shape({
    name: Yup.string().required('Campo nome obrigatório'),
    email: Yup.string()
        .email('Email inválido')
        .required('Campo Email obrigatório'),
    phone: Yup.string().required('Campo Telefone obrigatório'),
    message: Yup.string().required('Campo Telefone obrigatório'),
})

export function handleSubmit(data: object) {
    console.log('save', data as FormData)
}
