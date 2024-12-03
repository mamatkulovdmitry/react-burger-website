import React from "react";
import { assets } from "../assets/assets";
import ScrollRevealWrapper from "./ScrollReveal";

const Popular = () => {
    return (
        <section className="popular section" id="popular">
            <h2 className="section__title">Most Devoured <br /> Burgers</h2>
            <ScrollRevealWrapper className="popular__container-main" options={{ interval: 100 }}>
                <div className="popular__container container grid">
                    <article className="popular__card">
                        <img className="popular__img" src={assets.popular_burger_chicken} alt="Burger Chicken Image" />
                        <h2 className="popular__title">Chicken <br /> Burger</h2>
                        <span className="popular__price">$6</span>
                        <button className="popular__button">
                            <i className="ri-shopping-bag-3-fill"></i>
                        </button>
                    </article>
                    <article className="popular__card">
                        <img className="popular__img" src={assets.popular_burger_meat} alt="Burger Meat Image" />
                        <h2 className="popular__title">Meat <br /> Burger</h2>
                        <span className="popular__price">$10</span>
                        <button className="popular__button">
                            <i className="ri-shopping-bag-3-fill"></i>
                        </button>
                    </article>
                    <article className="popular__card">
                        <img className="popular__img" src={assets.popular_burger_grill} alt="Burger Grill Image" />
                        <h2 className="popular__title">Grill <br /> Burger</h2>
                        <span className="popular__price">$12</span>
                        <button className="popular__button">
                            <i className="ri-shopping-bag-3-fill"></i>
                        </button>
                    </article>
                    <article className="popular__card">
                        <img className="popular__img" src={assets.popular_burger_classic} alt="Burger Classic Image" />
                        <h2 className="popular__title">Classic <br /> Burger</h2>
                        <span className="popular__price">$8</span>
                        <button className="popular__button">
                            <i className="ri-shopping-bag-3-fill"></i>
                        </button>
                    </article>
                    <article className="popular__card">
                        <img className="popular__img" src={assets.popular_burger_big} alt="Burger Big Image" />
                        <h2 className="popular__title">Big <br /> Burger</h2>
                        <span className="popular__price">$15</span>
                        <button className="popular__button">
                            <i className="ri-shopping-bag-3-fill"></i>
                        </button>
                    </article>
                </div>
            </ScrollRevealWrapper>
        </section>
    )
};

export default Popular;