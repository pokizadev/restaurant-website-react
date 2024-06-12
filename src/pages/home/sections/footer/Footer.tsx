import "./Footer.css";

import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";
import logo from "../../../../assets/logoe.svg";
import { Container } from "../../../components";
import styled from "styled-components";

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
    { text: "eleganzo@gmail.com", link: "mailto: delizioso@gmail.com" },
    { text: "+123 4567 8901", link: "tel:+123 4567 8901" }
];

const FooterContainer = styled(Container)`
    background-color: var(--dark-brown);
    padding-top: var(--space-80);
    padding-bottom: var(--space-80);

    @media (max-widht: 50em) {
        padding-top: var(--space-40);
        padding-bottom: var(--space-40);
    }
`;

const FooterContent = styled.div`
    display: flex;
    gap: var(--space-50);

    margin-bottom: var(--space-80);
    justify-content: space-between;
    color: #e3e2e0;

    @media (max-width: 56.25em) {
        margin-bottom: var(--space-40);
    }

    @media (max-width: 43.75em) {
        flex-direction: column;
    }
`;

const BrandColumn = styled.div`
    width: 60%;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--space-40);
    gap: var(--space-10);

    p {
        color: var(--white);
    }
`;
const Description = styled.p`
    letter-spacing: 0.12rem;
`;
const SocialIconsWrapper = styled.div`
    display: flex;
    gap: var(--space-20);
    margin-top: var(--space-40);
`;
const SocialIcon = styled.img`
    @media (max-width: 62.5em) {
        height: 3rem;
        width: 3rem;
    }

    @media (max-width: 43.75em) {
        width: 6rem;
        height: 6rem;
    }
`;

const OtherColums = styled.div`
    display: grid;
    gap: var(--space-50);
    grid-template-columns: repeat(3, 1fr);
`;

const Footer = () => {
    return (
        <FooterContainer id="footer">
            <FooterContent>
                <BrandColumn>
                    <LogoWrapper>
                        <img src={logo} alt="Logo" className="footer__logo" />
                        <p className="subtitle-lg">
                            Ele<span>Ganzo</span>
                        </p>
                    </LogoWrapper>
                    <Description className="paragraph-md">
                        Taste the Difference, Explore Our Menu and Stay
                        Connected. Follow Us on Social Media for Updates,
                        Specials, and More!
                    </Description>
                    <SocialIconsWrapper>
                        <SocialIcon src={twitter} alt="Twitter" />
                        <SocialIcon src={instagram} alt="Instagram" />
                        <SocialIcon src={facebook} alt="Facebook" />
                    </SocialIconsWrapper>
                </BrandColumn>
                <OtherColums>
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

                    <div className="footer__contact">
                        <h4 className="footer__heading">Get in touch</h4>
                        {contactLinks.map((link, idx) => {
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
                </OtherColums>
            </FooterContent>
            <p className="footer__text text-end">Copyright © 2023 EleGanzo</p>
        </FooterContainer>
    );
};

export { Footer };
