import styled from "styled-components";
import { links } from "./TopNavigation";
import "./MobileNavigation.css";
import closeIcon from "../../../../assets/close (2).png";

const MobileNavContent = styled.div`
    width: 50vh;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    display: block;

    @media (max-width: 1100px) {
        width: 40vh;
    }

    @media (max-width: 700px) {
        width: 30vh;
    }
    @media (max-width: 500px) {
        width: 25vh;
    }
`;

const MobileNavTop = styled.div`
    height: 80px;
    border-bottom: 1px solid gray;
    padding: 30px 80px 20px 80px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`;

const Title = styled.p`
    color: var(--orange);
    letter-spacing: 0.14rem;
`;

const CloseIcon = styled.img`
    height: 28px;
    width: 28px;
    margin-top: 4px;
`;
const MobileNavBottom = styled.div`
    padding: 50px 80px 0 80px;

    @media (max-width: 800px) {
        padding-left: 40px;
    }
`;
const MobileNavLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Link = styled.li`
    color: var(--light-brown);
    letter-spacing: 0.11rem;
`
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
                                <Link className="paragraph-xl" href={link.link}>{link.text}</Link>
                            </li>
                        );
                    })}
                </MobileNavLinks>
            </MobileNavBottom>
        </MobileNavContent>
    );
};

export { MobileNavigation };
