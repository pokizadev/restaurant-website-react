import "./Footer.css";

import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";
import logoDark from "../../../../assets/logo-dark.svg"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="sections-container footer__container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <img
                            src={logoDark}
                            alt="Logo"
                            className="footer__logo"
                        />
                        <p className="footer__text">
                            Viverra gravida morbi egestas facilisis tortor netus
                            non duis tempor.
                        </p>
                        <div className="footer__social-icons">
                            <img src={twitter} alt="" />
                            <img src={instagram} alt="" />
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                    <div className="footer__pages">
                        <h4 className="footer__heading">Page</h4>
                        <a href="" className="footer__text">
                            Home
                        </a>
                        <a href="" className="footer__text">
                            Menu
                        </a>
                        <a href="" className="footer__text">
                            Order online
                        </a>
                        <a href="" className="footer__text">
                            Catering
                        </a>
                        <a href="" className="footer__text">
                            Reservation
                        </a>
                    </div>
                    <div className="footer__about">
                        <h4 className="footer__heading">Information</h4>
                        <a href="" className="footer__text">
                            About us
                        </a>
                        <a href="" className="footer__text">
                            Testimonial
                        </a>
                        <a href="" className="footer__text">
                            Events
                        </a>
                    </div>
                    <div className="footer__contact">
                        <h4 className="footer__heading">Get in touch</h4>
                        <p className="footer__text">
                            3247 Johnson Ave, <br />
                            Bronx, NY 10463
                        </p>
                        <a
                            href="mailto: delizioso@gmail.com<"
                            className="footer__text"
                        >
                            delizioso@gmail.com
                        </a>
                        <a href="tel:+123 4567 8901" className="footer__text">
                            +123 4567 8901
                        </a>
                    </div>
                </div>
                <p className="footer__text text-center">
                    Copyright &COPY; 2023 Delizioso
                </p>
            </div>
        </footer>
    );
};


export {Footer}