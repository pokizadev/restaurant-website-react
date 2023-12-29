import "./TopNavigation.css";

import logoWhite from "../../../../assets/logo-white.svg";
import cart from "../../../../assets/cart.svg";
import { Button } from "../../../../design-system/button/Button";

const links = [
    { text: "Home", link: "https://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "About Us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "" },
    { text: "Branding", link: "./branding.html" }
];

const TopNavigation = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <img src={logoWhite} alt="DeliziOso" className="logo-white" />
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
                    <figure>
                        <img src={cart} alt="Shopping Cart" />
                    </figure>
                    <Button size="sm" color="green">Sign In</Button>
                </div>
            </nav>
        </header>
    );
};

export { TopNavigation };
