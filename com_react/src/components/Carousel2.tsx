import React, {
    Children,
    cloneElement,
    isValidElement,
    useCallback,
    useMemo,
    useRef,
    useState,
} from 'react'
import {iCarousel2, iCarousel2Item} from 'types'

export default function Carousel2({children}: iCarousel2) {
    const itemsPerTurn = 3
    const cntRef = useRef<HTMLDivElement>(null)
    const width = cntRef.current?.offsetWidth
    const qntSteps = Math.round(Children.count(children) / itemsPerTurn)

    const [stepper, setStepper] = useState(0)

    const marginLeft = useMemo<number>(() => {
        if (!width) return 0
        return width * -stepper
    }, [stepper])

    const nextStepIsValid = useMemo<boolean>(() => {
        return stepper + 1 < qntSteps
    }, [stepper, qntSteps])
    const nextTick = useCallback(() => {
        if (nextStepIsValid) setStepper(stepper + 1)
    }, [nextStepIsValid, stepper])

    const prevStepIsValid = useMemo<boolean>(() => {
        return stepper - 1 >= 0
    }, [stepper])
    const prevTick = useCallback(() => {
        if (prevStepIsValid) setStepper(stepper - 1)
    }, [prevStepIsValid, stepper])

    return (
        <div className="cnt-carrosel-2">
            <div ref={cntRef} className="cnt-slide">
                <div style={{marginLeft}} className="slide-carousel-2">
                    {Children.map(children, (child) => {
                        if (isValidElement(child)) {
                            return cloneElement<iCarousel2Item>(child, {
                                width: width ? width / itemsPerTurn : 0,
                            })
                        }
                    })}
                </div>
            </div>

            <nav className="carrosel-2">
                <span
                    className={prevStepIsValid ? '' : 'btn-carousel-disabled'}
                    onClick={prevTick}>
                    <i className="fas fa-arrow-left animate__animated hover-tada"></i>
                </span>
                <span
                    className={nextStepIsValid ? '' : 'btn-carousel-disabled'}
                    onClick={nextTick}>
                    <i className="fas fa-arrow-right animate__animated hover-tada"></i>
                </span>
            </nav>
        </div>
    )
}

export function Carousel2Item({img, title, desc, width}: iCarousel2Item) {
    return (
        <aside style={{width}} className="item-slide-2">
            <div className="cnt-img">
                <img src={img} />
            </div>
            <div className="cnt-text">
                <div className="title">{title}</div>
                <div className="text">{desc}</div>
            </div>
        </aside>
    )
}
