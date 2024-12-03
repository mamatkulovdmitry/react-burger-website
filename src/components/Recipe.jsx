import React from "react";
import { assets } from "../assets/assets";
import ScrollRevealWrapper from "./ScrollReveal";

const Recipe = () => {
    return (
        <section className="recipe section" id="recipe">
            <h2 className="section__title">Our Secret Recipe</h2>
            <div className="recipe__container container grid">
                <div className="recipe__image">
                    <ScrollRevealWrapper className="recipe__img" options={{ origin: "left" }}>
                        <img src={assets.recipe_burger} alt="Recipe Burger Image" />
                    </ScrollRevealWrapper>
                </div>
                <ScrollRevealWrapper className="recipe__data" options={{ origin: "right" }}>
                    <div className="recipe__card">
                        <div className="recipe__box">
                            <img src={assets.recipe_bread} alt="Recipe Bread Image" />
                        </div>
                        <div>
                            <h3 className="recipe__title">Bread</h3>
                            <p className="recipe__description">
                                Fresh bread, baked to perfection.
                            </p>
                        </div>
                    </div>
                    <div className="recipe__card">
                        <div className="recipe__box">
                            <img src={assets.recipe_cheese} alt="Recipe Cheese Image" />
                        </div>
                        <div>
                            <h3 className="recipe__title">Cheese</h3>
                            <p className="recipe__description">
                                Cheese for a fantastic and healthy future.
                            </p>
                        </div>
                    </div>
                    <div className="recipe__card">
                        <div className="recipe__box">
                            <img src={assets.recipe_meat} alt="Recipe Meat Image" />
                        </div>
                        <div>
                            <h3 className="recipe__title">Meat</h3>
                            <p className="recipe__description">
                                100% pure beef, big and meaty.
                            </p>
                        </div>
                    </div>
                    <div className="recipe__card">
                        <div className="recipe__box">
                            <img src={assets.recipe_vegetable} alt="Recipe Vegetable Image" />
                        </div>
                        <div>
                            <h3 className="recipe__title">Vegetables</h3>
                            <p className="recipe__description">
                                Vegetables full of the essence of nature and organic.
                            </p>
                        </div>
                    </div>
                    <div className="recipe__card">
                        <div className="recipe__box">
                            <img src={assets.recipe_sauces} alt="Recipe Sauce Image" />
                        </div>
                        <div>
                            <h3 className="recipe__title">Sauces</h3>
                            <p className="recipe__description">
                                Fresh sauces, delicious for the palate.
                            </p>
                        </div>
                    </div>
                </ScrollRevealWrapper>
            </div>
        </section>
    )
};

export default Recipe;