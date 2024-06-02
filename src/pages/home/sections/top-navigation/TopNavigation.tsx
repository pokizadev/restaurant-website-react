import styled from "styled-components";
import { useState } from "react";

import logo from "../../../../assets/logoe.svg";
import cart from "../../../../assets/cart.svg";
import mobileNavIcon from "../../../../assets/Home.svg";
import { Button } from "../../../../design-system/button/Button.js";
import { MobileNavigation } from "./MobileNavigation";
import { Container } from "../../../components";

export const links = [
    { text: "Home", link: "https://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "About Us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "" },
    { text: "Branding", link: "./branding.html" }
];

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-20);
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-6);
`;

const NavigationLinks = styled.ul`
    display: flex;
    gap: var(--space-44);
    align-items: center;

    @media (max-width: 75em) {
        display: none;
    }
`;

const Link = styled.a`
    color: var(--dark-brown);

    &:hover,
    &:focus {
        color: var(--orange);
    }
`;

const Actions = styled.div`
    display: flex;
    gap: var(--space-24);

    button {
        @media (max-width: 75em) {
            display: none;
        }
    }
`;

const Cart = styled.figure`
    height: var(--space-50);
    width: var(--space-50);
    background-color: rgb(236, 240, 241);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MobileNavIcon = styled.figure`
    display: none;

    @media (max-width: 75em) {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

const TopNavigation = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileNavToggle = () => {
        setShowMobileNav((prevState) => !prevState);
    };

    return (
        <Container>
            <Navigation>
                <LogoWrapper>
                    <img src={logo} alt="logo" />
                    <p className="subtitle-md">
                        Ele<span>Ganzo</span>
                    </p>
                </LogoWrapper>

                <NavigationLinks>
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <Link className="paragraph-sm" href={link.link}>
                                    {link.text}
                                </Link>
                            </li>
                        );
                    })}
                </NavigationLinks>
                <Actions>
                    <Cart className="cart">
                        <img src={cart} alt="Shopping Cart" />
                    </Cart>
                    <Button size="sm" color="green">
                        Sign In
                    </Button>
                    <MobileNavIcon onClick={handleMobileNavToggle}>
                        <img src={mobileNavIcon} alt="mobile navigation" />

                        {showMobileNav && <MobileNavigation />}
                    </MobileNavIcon>
                </Actions>
            </Navigation>
        </Container>
    );
};

export { TopNavigation };
