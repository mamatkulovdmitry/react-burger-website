import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-scroll";
import ScrollRevealWrapper from "./ScrollReveal";

const Delivery = () => {
    return (
        <section className="delivery section" id="delivery">
            <div className="delivery__container container grid">
                <ScrollRevealWrapper className="delivery__data" options={{ origin: "right" }}>
                    <h2 className="section__title">Fast Delivery</h2>
                    <p className="delivery__description">
                        Place your order for your favorite burger
                        and we will deliver it to your door in minutes,
                        get in touch and don't leave hungry.
                    </p>
                    <button className="button">
                        <Link to="contact">Contact Now</Link>
                    </button>
                    <img className="delivery__sticker" src={assets.sticker_glass} alt="Sticker Glass Image" />
                </ScrollRevealWrapper>
                <ScrollRevealWrapper className="delivery__img" options={{ origin: "left" }}>
                    <img src={assets.delivery_burger} alt="Delivery Burger Image" />
                </ScrollRevealWrapper>
            </div>
        </section>
    )
};

export default Delivery;