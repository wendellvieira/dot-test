import React, {useState} from 'react'
import {iSlider} from 'types'

export default function Slider({children, images}: iSlider) {
    const [currentSlide, setSlide] = useState(0)
    return (
        <div className="slider">
            {images.map((src, key) => (
                <div
                    className="slide-item"
                    key={key}
                    style={{
                        backgroundImage: `url(${src})`,
                        opacity: currentSlide === key ? 1 : 0,
                    }}></div>
            ))}

            {children}

            <nav className="navigate">
                {images.map((_, key) => (
                    <ul
                        key={key}
                        onClick={() => setSlide(key)}
                        className={currentSlide === key ? 'active' : ''}></ul>
                ))}
            </nav>
        </div>
    )
}
