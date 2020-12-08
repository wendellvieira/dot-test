import Axios from 'axios'
import Accordion from 'components/Accordion'
import Carousel2, {Carousel2Item} from 'components/Carousel2'
import Form from 'components/Form'
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
                <div className="container">
                    <Form>
                        <Form.Input
                            name="name"
                            label="*Nome:"
                            placeholder="Informe seu nome"
                        />

                        <Form.Agroup>
                            <Form.Input
                                name="email"
                                label="*E-mail:"
                                placeholder="Informe seu e-mail"
                            />
                            <Form.Input
                                mask="(99) 99999-9999"
                                name="phone"
                                label="*Telefone:"
                                placeholder="(__) _____-____"
                            />
                        </Form.Agroup>

                        <Form.Textarea
                            name="message"
                            label="*Mensagem:"
                            placeholder="Escreva aqui sua mensagem"
                        />
                        <button className="btn-send">ENVIAR</button>
                    </Form>
                </div>
            </section>

            <footer className="page-footer">
                <span>LOREM IPSUM</span>
            </footer>
        </>
    )
}
