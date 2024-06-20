import { Button } from "../../../../design-system/button/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ModalWrapper = styled.div`
    width: 24rem;
    height: 24rem;
    position: absolute;
    top: 110%;
    right: 0;
    background-color: var(--white);
    border-radius: 3rem;
    box-shadow: var(--box-shadow-1);
    z-index: 1;

    padding: var(--space-50) var(--space-30) var(--space-50) var(--space-30);
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const AccountModal = () => {
    const navigate = useNavigate()
    return (
        <ModalWrapper>
            <Button size="md" color="orange" onClick={() => {navigate("sign-up")}}>
                Sign Up
            </Button>
            <Button size="md" color="green" onClick={() => {navigate("login")}}>
                Sign In
            </Button>
        </ModalWrapper>
    );
};

export { AccountModal };
