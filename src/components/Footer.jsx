import React from "react";
import { Link } from "react-scroll";
import ScrollRevealWrapper from "./ScrollReveal";

const Footer = () => {
    return (
        <ScrollRevealWrapper className="footer">
            <footer>
                <div className="footer__container container grid">
                    <Link className="footer__logo" to="home">Burger</Link>
                    <div className="footer__content grid">
                        <a className="footer__link" href="#">Terms & Agreements</a>
                        <a className="footer__link" href="#">Privacy Policy</a>
                        <div className="footer__social">
                            <a href="https://www.facebook.com" target="_blank">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://x.com" target="_blank">
                                <i className="ri-twitter-x-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <span className="footer__copy">
                    &#169; All Rights Reserved By CloudMind
                </span>
            </footer>
        </ScrollRevealWrapper>
    )
};

export default Footer;