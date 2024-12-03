import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-scroll";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header${isScrolled ? " shadow-header" : ""}`} id="header">
            <nav className="nav container">
                <Link className="nav__logo" to="home">
                    <div>
                        <img src={assets.logo_burger} alt="Logo" />
                    </div>
                    Burger
                </Link>
                <div className={`nav__menu${isMenuOpen ? " show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <li>
                            <Link className="nav__link" to="home" spy={true} activeClass="active-link" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link className="nav__link" to="recipe" spy={true} activeClass="active-link" onClick={closeMenu}>Recipe</Link>
                        </li>
                        <li>
                            <Link className="nav__link" to="popular" spy={true} activeClass="active-link" onClick={closeMenu}>Popular</Link>
                        </li>
                        <li>
                            <Link className="nav__link" to="delivery" spy={true} activeClass="active-link" onClick={closeMenu}>Delivery</Link>
                        </li>
                        <li>
                            <Link className="nav__link" to="contact" spy={true} activeClass="active-link" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={closeMenu}>
                        <i className="ri-close-large-line"></i>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={handleToggleMenu}>
                    <i className="ri-apps-2-fill"></i>
                </div>
            </nav>
        </header>
    )
};

export default Header;