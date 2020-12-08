import Axios from 'axios'
import Accordion from 'components/Accordion'
import Carousel2, {Carousel2Item} from 'components/Carousel2'
import Slider from 'components/Slider'
import React, {useEffect, useState} from 'react'
import {iFakeServe} from 'types'

export default function Home() {
    const [app, setDataApp] = useState<iFakeServe>({
        carousel2: [],
        accordion: [],
        slideImages: [],
    })

    useEffect(() => {
        Axios.get<iFakeServe>('/fake-backend.json').then((resp) => {
            const slideImages = resp.data.carousel2.map(
                (item) => item.img,
            ) as string[]

            setDataApp({...resp.data, slideImages})
        })
    }, [])

    return (
        <>
            <header className="home-header">
                <Slider images={app.slideImages}>
                    <div className="texts">
                        <h1>LOREM IPSUM</h1>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                        </h3>
                        <span className="next-stage animate__animated hover-tada">
                            <i className="fas fa-arrow-down"></i>
                        </span>
                    </div>
                </Slider>
            </header>

            <section className="carrosel">
                <div className="container">
                    <Carousel2>
                        {app.carousel2.map((item, index) => (
                            <Carousel2Item
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                img={item.img}
                            />
                        ))}
                    </Carousel2>
                </div>
            </section>

            <section className="about-us">
                <div className="container">
                    <div className="cnt-about-us">
                        <div
                            className="image animate__animated hover-tada"
                            style={{backgroundImage: 'url(bg.png)'}}></div>
                        <div className="cnt-text">
                            <h3>LOREM IPSUM</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel
                                facilisis.
                            </p>
                            <p>
                                <b>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis.
                                </b>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel
                                facilisis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel
                                facilisis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="frequent-quests">
                <div className="container">
                    <div className="cnt-frequent-quests">
                        <Accordion>
                            {app.accordion.map((item, key) => (
                                <Accordion.Item key={key} title={item.title}>
                                    {item.text}
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <section className="contact-form">
                <form action="" className="container">
                    <div className="cnt-form">
                        <div className="form-control">
                            <label htmlFor="">*Nome:</label>
                            <input type="text" placeholder="Informe seu nome" />
                        </div>

                        <div className="agrup-line">
                            <div className="form-control">
                                <label htmlFor="">*E-mail:</label>
                                <input
                                    type="text"
                                    placeholder="Informe seu e-mail"
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="">*Telefone:</label>
                                <input
                                    type="text"
                                    placeholder="(__) _____-____"
                                />
                            </div>
                        </div>
                        <div className="form-control textarea">
                            <label htmlFor="">*Mensagem:</label>
                            <textarea
                                placeholder="Escreva aqui"
                                rows={8}></textarea>
                        </div>
                    </div>
                    <button className="btn-send">ENVIAR</button>
                </form>
            </section>

            <footer className="page-footer">
                <span>LOREM IPSUM</span>
            </footer>
        </>
    )
}
