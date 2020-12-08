import {ReactNode} from 'react'
import {ObjectSchema} from 'yup'

export type iAccordionProps = {
    children: ReactNode
}

export type iAccordionState = {
    selectedItem: string | null
}

export type iAccordionItem = {
    children: ReactNode
    title: string
}

export type iAccordionContext = {
    selectedItem: string | null
    selectItem(selectedItem: string | null): void
}

export type iSlider = {
    children: ReactNode
    images: string[]
}

export type iCarousel2 = {
    children: ReactNode
}

export type iCarousel2Item = {
    title?: string
    desc?: string
    img?: string
    width?: number
}

export type iFakeServe = {
    carousel2: iCarousel2Item[]
    accordion: {title: string; text: string}[]
    slideImages: string[]
}

export type iForm = {
    children: ReactNode
    onSubmit?: (data: object) => void
    schemaValidate?: ObjectSchema<any>
}
export type iFormControl = {
    name: string
    label?: string
    placeholder?: string
    mask?: string
}

export type FormData = {
    name: string
    email: string
    phone: string
    message: string
}
