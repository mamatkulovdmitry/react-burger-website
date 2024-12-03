import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Recipe from "../components/Recipe";
import Popular from "../components/Popular";
import Delivery from "../components/Delivery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

const Home = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Hero />
                <Recipe />
                <Popular />
                <Delivery />
                <Contact />
            </main>
            <Footer />
            <ScrollUp />
        </>
    )
};

export default Home;