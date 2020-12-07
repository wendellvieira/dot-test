import {ReactNode} from 'react'

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
}
