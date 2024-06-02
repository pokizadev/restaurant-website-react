import styled from "styled-components";
import { links } from "./TopNavigation";
import closeIcon from "../../../../assets/close (2).png";

const MobileNavContent = styled.div`
    width: 60vh;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--white);
    box-shadow: var(--box-shadow-1);


    @media (max-width: 50em) {
        width: 50vh;
    }
    @media (max-width: 32em) {
        width: 100%;
    }
`;

const MobileNavTop = styled.div`
    height: var(--space-80);
    border-bottom: 0.1rem solid gray;
    display: flex;
    justify-content: space-between;
    padding: var(--space-30) var(--space-80) var(--space-20) var(--space-80);
    

    @media (max-width: 50em) {
        padding-left: var(--space-40);
        padding-right: var(--space-40);
    }
`;

const Title = styled.p`
    color: var(--orange);
    letter-spacing: 0.14rem;
`;

const CloseIcon = styled.img`
    height: 2.8rem;
    width: 2.8rem;
    margin-top: var(--space-4);
`;
const MobileNavBottom = styled.div`
    padding: var(--space-50) var(--space-80) 0 var(--space-80);

    @media (max-width: 50em) {
        padding-left: var(--space-40);
    }
`;
const MobileNavLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
`;

const NavLink = styled.a`
    color: var(--light-brown);
    letter-spacing: 0.11rem;

    &:hover,
    &:focus {
        color: var(--orange);
    }
`;
const MobileNavigation = () => {
    return (
        <MobileNavContent>
            <MobileNavTop>
                <Title className="subtitle-lg">Welcome</Title>
                <CloseIcon src={closeIcon} alt="close icon" />
            </MobileNavTop>
            <MobileNavBottom>
                <MobileNavLinks>
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <NavLink className="paragraph-xl" href={link.link}>
                                    {link.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </MobileNavLinks>
            </MobileNavBottom>
        </MobileNavContent>
    );
};

export { MobileNavigation };
