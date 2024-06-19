import styled from "styled-components";
import { useState } from "react";

import logo from "../../../../assets/logoe.svg";
import cart from "../../../../assets/cart.svg";
import accountIcon from "../../../../assets/account1.svg";
import mobileNavIcon from "../../../../assets/Home.svg";
import closeIcon from "../../../../assets/close (2).png";

import { MobileNavigation } from "./MobileNavigation";
import { Container } from "../../../components";
import { AccountModal } from "./manageAccountModal";
import { NavLink } from "react-router-dom";

export const links = [
    { text: "Home", link: "/" },
    { text: "Menu", link: "menu" },
    { text: "About Us", link: "about-us" },
    { text: "Reservation", link: "reservation" },
    { text: "Contact Us", link: "contact-us" }
];

const Navigation = styled.nav`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-20);
    position: relative;
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

const Link = styled(NavLink)`
    color: var(--dark-brown);

    &:hover,
    &:focus {
        color: var(--orange);
    }

    &.active {
        color: var(--orange);
    }
`;

const Actions = styled.div`
    display: flex;
    gap: var(--space-24);
`;

const Cart = styled.figure`
    height: 5rem;
    width: 5rem;
    background-color: #ecf0f1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AccountIconWrapper = styled.figure`
    height: 5rem;
    width: 5rem;
    background-color: #ecf0f1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 75em) {
        display: none;
    }
`;
const MobileNavIconWrapper = styled.figure`
    display: none;

    @media (max-width: 75em) {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

const MobileNavIcon = styled.img`
    height: 2.8rem;
    width: 2.8rem;
    z-index: 1;
`;

const TopNavigation = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [showActions, setShowActions] = useState(false);

    const handleMobileNavToggle = () => {
        setShowMobileNav(!showMobileNav);
    };

    const handleAccountOnClick = () => {
        setShowActions(!showActions);
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
                                <Link className="paragraph-sm" to={link.link} end>
                                    {link.text}
                                </Link>
                            </li>
                        );
                    })}
                </NavigationLinks>
                <Actions>
                    <Cart>
                        <img src={cart} alt="Shopping Cart" />
                    </Cart>
                    <AccountIconWrapper>
                        <img
                            src={accountIcon}
                            alt="account Icon"
                            onClick={handleAccountOnClick}
                        />
                    </AccountIconWrapper>
                    <MobileNavIconWrapper onClick={handleMobileNavToggle}>
                        <MobileNavIcon
                            src={showMobileNav ? closeIcon : mobileNavIcon}
                            alt="mobile navigation"
                        />
                    </MobileNavIconWrapper>
                </Actions>
                {showActions && <AccountModal />}
                {showMobileNav && <MobileNavigation />}
            </Navigation>
        </Container>
    );
};

export { TopNavigation };
