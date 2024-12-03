import React from "react";
import { assets } from "../assets/assets";
import ScrollRevealWrapper from "./ScrollReveal";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="contact__container container grid">
                <h2 className="section__title">Contact Now</h2>
                <div className="contact__content grid">
                    <ScrollRevealWrapper className="contact__data" options={{ origin: "right" }}>
                        <div className="contact__data grid">
                            <div>
                                <h3 className="contact__title">Write Us</h3>
                                <div className="contact__social">
                                    <a href="https://www.whatsapp.com" target="_blank">
                                        <i className="ri-whatsapp-fill"></i>
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank">
                                        <i className="ri-facebook-circle-fill"></i>
                                    </a>
                                    <a href="https://t.me" target="_blank">
                                        <i className="ri-telegram-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="contact__title">Call Us and Order</h3>
                                <address className="contact__info">
                                    +1-650-123-45-67 <br />
                                    +1-650-123-45-68
                                </address>
                            </div>
                            <div>
                                <h3 className="contact__title">Find us here</h3>
                                <address className="contact__info">
                                    Los Angeles - USA <br />
                                    5905 Wilshire Blvd
                                </address>
                            </div>
                        </div>
                    </ScrollRevealWrapper>
                    <ScrollRevealWrapper className="contact__image" options={{ origin: "left" }}>
                        <img className="contact__img" src={assets.contact_man} alt="Contact Man Image" />
                    </ScrollRevealWrapper>
                </div>
                <img className="contact__sticker-1" src={assets.sticker_burger} alt="Sticker Burger Image" />
                <img className="contact__sticker-2" src={assets.sticker_soda} alt="Sticker Soda Image" />
            </div>
        </section>
    )
};

export default Contact;