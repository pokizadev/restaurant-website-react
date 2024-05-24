import "./TopNavigation.css";

import logo from "../../../../assets/logoe.svg"
import cart from "../../../../assets/cart.svg";
import mobileNavIcon from "../../../../assets/Home.png";
import { Button } from "../../../../design-system/button/Button";
import { useState } from "react";
import { MobileNavigation } from "./MobileNavigation";


export const links = [
    { text: "Home", link: "https://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "About Us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "" },
    { text: "Branding", link: "./branding.html" }
];

const TopNavigation = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileNavToggle = () => {
        setShowMobileNav((prevState) => !prevState);
    };

    return (
        <header className="header">
            <nav className="navigation">
                <div className="logo-wrapper">
                        <img className="logo-img" src={logo} />
                    <p className="logo-text">Ele<span>Ganzo</span></p>
                </div>

                <ul className="navigation__links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="navigation__actions">
                    <figure className="cart">
                        <img src={cart} alt="Shopping Cart" />
                    </figure>
                    <Button size="sm" color="green">
                        Sign In
                    </Button>
                    <figure
                        className="mobile-nav__icon"
                        onClick={handleMobileNavToggle}
                    >
                        <img src={mobileNavIcon} alt="mobile navigation" />

                        {showMobileNav && <MobileNavigation />}
                    </figure>
                </div>
            </nav>
        </header>
    );
};

export { TopNavigation };
