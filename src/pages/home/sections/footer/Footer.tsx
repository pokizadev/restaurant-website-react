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

    @media (max-width: 47em) {
        flex-direction: column;
    }
`;

const BrandColumn = styled.div`
    width: 40%;

    @media (max-width: 47em) {
        width: 100%;
    }
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

    @media (max-width: 47em) {
        width: 6rem;
        height: 6rem;
    }
`;

const OtherColumns = styled.div`
    display: grid;
    gap: var(--space-50);
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 56.25em) {
        gap: var(--space-30);
    }

    @media (max-width: 47em) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
const ColumnHeading = styled.h4`
    color: var(--orange);
    font-size: var(--font-size-24);
    line-height: var(--line-height-32);
    margin-bottom: var(--space-20);
    margin-top: var(--font-size-10);
`;
const ColumnLinks = styled.a`
    color: #e3e2e0;
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
    display: block;
    margin-bottom: var(--space-20);

    @media (max-width: 47em) {
        font-size: var(--font-size-24);
        letter-spacing: 0.15rem;
    }
`;

const CopyRight = styled.p`
    color: #e3e2e0;
    text-align: center;
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);

    @media (max-width: 47em) {
        text-align: start;
        font-size: var(--font-size-20);
        letter-spacing: 0.15rem;
    }
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
                <OtherColumns>
                    <Column>
                        <ColumnHeading>Page</ColumnHeading>
                        {pageLinks.map((link, idx) => {
                            return (
                                <ColumnLinks key={idx} href={link.link}>
                                    {link.text}
                                </ColumnLinks>
                            );
                        })}
                    </Column>

                    <Column>
                        <ColumnHeading>Information</ColumnHeading>
                        {informationLinks.map((link, idx) => {
                            return (
                                <ColumnLinks key={idx} href={link.link}>
                                    {link.text}
                                </ColumnLinks>
                            );
                        })}
                    </Column>

                    <Column>
                        <ColumnHeading>Get in touch</ColumnHeading>
                        {contactLinks.map((link, idx) => {
                            return (
                                <ColumnLinks key={idx} href={link.link}>
                                    {link.text}
                                </ColumnLinks>
                            );
                        })}
                    </Column>
                </OtherColumns>
            </FooterContent>
            <CopyRight>Copyright © 2023 EleGanzo</CopyRight>
        </FooterContainer>
    );
};

export { Footer };
