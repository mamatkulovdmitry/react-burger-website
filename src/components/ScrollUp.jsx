import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        setShowScroll(window.scrollY >= 350);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Link className={`scrollup${showScroll ? " show-scroll" : ""}`} to="home">
            <i className="ri-arrow-up-line"></i>
        </Link>
    )
};

export default ScrollUp;