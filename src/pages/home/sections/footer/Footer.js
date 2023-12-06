import "./Footer.css";

import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";
import logoDark from "../../../../assets/logo-dark.svg";

const pageLinks = [
    { text: "Home", link: "abc.com" },
    { text: "Menu", link: "abc.com" },
    { text: "Order Online", link: "abc.com" },
    { text: "Catering", link: "abc.com" },
    { text: "Reservation", link: "abc.com" }
];

const informationLinks = [
    { text: "About Us", link: "abc.com" },
    { text: "Testimonials", link: "abc.com" },
    { text: "Events", link: "abc.com" }
];

const contactLinks = [
    { text: "3247 Johnson Ave, Bronx, NY 10463", link: "abc.com" },
    { text: "delizioso@gmail.com", link: "mailto: delizioso@gmail.com" },
    { text: "+123 4567 8901", link: "tel:+123 4567 8901" }
]

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
                            <img src={twitter} alt="Twitter" />
                            <img src={instagram} alt="Instagram" />
                            <img src={facebook} alt="Facebook" />
                        </div>
                    </div>

                    <div className="footer__pages">
                        <h4 className="footer__heading">Page</h4>
                        {pageLinks.map((link, idx) => {
                            return (
                                <a
                                    key={idx}
                                    href={link.link}
                                    className="footer__text"
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>
                    <div className="footer__about">
                        <h4 className="footer__heading">Information</h4>
                        {informationLinks.map((link, idx) => {
                            return <a key={idx} href={link.link} className="footer__text">
                            {link.text}
                        </a>
                        })}
                    </div>
                    <div className="footer__contact">
                        <h4 className="footer__heading">Get in touch</h4>
                        {contactLinks.map((link, idx) => {
                            return <a key={idx} href={link.link} className="footer__text">
                                {link.text}
                        </a>
                        })}
                    </div>
                </div>
                <p className="footer__text text-center">
                    Copyright &COPY; 2023 Delizioso
                </p>
            </div>
        </footer>
    );
};

export { Footer };
