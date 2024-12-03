import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-scroll";
import ScrollRevealWrapper from "./ScrollReveal";

const Hero = () => {
    return (
        <section className="hero section" id="home">
            <div className="hero__container container grid">
                <ScrollRevealWrapper className="hero__data">
                    <h1 className="hero__title">Love Every <br /> Burger</h1>
                    <p className="hero__description">
                        We serve the best burgers on the planet,
                        paving the way for cooking and preparing
                        hot, delicious burgers.
                    </p>
                    <button className="button">
                        <Link to="popular">Bite Now</Link>
                    </button>
                    <img className="hero__sticker" src={assets.sticker_potatoes} alt="Sticker Potatoes Image" />
                </ScrollRevealWrapper>
                <div className="hero__images">
                    <ScrollRevealWrapper className="hero__burger" options={{ delay: 1200, distance: "100px", duration: 1500 }}>
                        <img src={assets.home_burger} alt="Burger Image" />
                    </ScrollRevealWrapper>
                    <ScrollRevealWrapper className="hero__dish" options={{ delay: 500, distance: "100px", origin: "bottom" }}>
                        <img src={assets.home_dish} alt="Dish Image" />
                    </ScrollRevealWrapper>
                </div>
            </div>
        </section>
    )
};

export default Hero;