import styled from "styled-components";
import { links } from "./TopNavigation";
import { Button } from "../../../../design-system/button/Button";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MobileNavContent = styled.div`
    width: 100%;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fdf8f3;
    box-shadow: var(--box-shadow-1);
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

const MobileNavBottom = styled.div`
    padding: var(--space-50) var(--space-80) 0 var(--space-80);

    @media (max-width: 50em) {
        padding-left: var(--space-40);
    }

    display: flex;
    text-align: center;
    justify-content: center;

    @media (max-width: 25em) {
        text-align: left;
        justify-content: flex-start;
    }
`;
const MobileNavLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);

    &:hover,
    &:focus {
        color: var(--orange);
    }
`;

const Link = styled(NavLink)`
    color: var(--light-brown);
    letter-spacing: 0.11rem;

    &:hover,
    &:focus {
        color: var(--orange);
    }
`;

const StyledButton = styled(Button)`
    width: 20rem;
    margin-top: 1rem;
`;
const MobileNavigation = () => {
    const navigate = useNavigate();

    return (
        <MobileNavContent>
            <MobileNavTop>
                <Title className="subtitle-lg">Welcome</Title>
            </MobileNavTop>
            <MobileNavBottom>
                <MobileNavLinks>
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <Link
                                    className="paragraph-xl"
                                    to={link.link}
                                    end
                                >
                                    {link.text}
                                </Link>
                            </li>
                        );
                    })}
                    <StyledButton
                        size="sm"
                        color="orange"
                        onClick={() => {
                            navigate("sign-up");
                        }}
                    >
                        Sign Up
                    </StyledButton>
                    <StyledButton
                        size="sm"
                        color="green"
                        onClick={() => {
                            navigate("login");
                        }}
                    >
                        Sign In
                    </StyledButton>
                </MobileNavLinks>
            </MobileNavBottom>
        </MobileNavContent>
    );
};

export { MobileNavigation };
