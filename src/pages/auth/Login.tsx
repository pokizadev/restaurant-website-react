import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../design-system/input";
import { Button } from "../../design-system/button/Button";
import googleIcon from "../../assets/google.png";
import loginImg from "../../assets/Login.png";

const LoginWrapper = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    gap: var(--space-80);

    @media (max-width: 68.75em) {
        flex-direction: column;
        gap: 0;
    }
`;

const LoginLeft = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: var(--space-60);
    justify-content: center;

    @media (max-width: 68.75em) {
        width: 60%;
        margin: 0 auto;
    }

    @media (max-width: 37.5em) {
        width: 90%;
    }
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: var(--space-16);
    margin-bottom: 10rem;

    @media (max-width: 68.75em) {
        margin-bottom: var(--space-40);
    }
`;

const Header = styled.h1`
    color: var(--dark-brown);
    font-size: var(--font-size-48);
    line-height: var(--line-height-56);
`;

const HintTextWrapper = styled.div`
    display: flex;
    gap: var(--space-8);
    margin-bottom: var(--space-40);

    @media (max-width: 68.75em) {
        margin-bottom: var(--space-20);
    }
`;

const HintText = styled.p`
    color: var(--light-gray);
`;

const HintLink = styled.a`
    font-style: italic;
`;

const InputsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-40);
    margin-bottom: var(--space-40);
`;

const StyledButton = styled(Button)`
    border-radius: var(--border-radius-16);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GoogleIcon = styled.img`
    height: 2.6rem;
    width: 2.6rem;
    margin-right: 2rem;
`;
const CopyRight = styled.p`
    color: var(--light-gray);
    text-align: center;
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);

    @media (max-width: 68.75em) {
        display: none;
    }
`;

const LoginRight = styled.div`
    width: 60%;

    @media (max-width: 68.75em) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailOnChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordOnChange = (value: string) => {
        setPassword(value);
    };

    return (
        <LoginWrapper>
            <LoginLeft>
                <Form>
                    <Header>Login</Header>
                    <HintTextWrapper>
                        <HintText className="paragraph-lg">
                            Don't have an account?
                        </HintText>
                        <HintLink className="paragraph-lg" href="sign-up">
                            Sign up
                        </HintLink>
                    </HintTextWrapper>
                    <InputsWrapper>
                        <Input
                            value={email}
                            type="email"
                            placeholder="Email address"
                            onChange={handleEmailOnChange}
                        />
                        <Input
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={handlePasswordOnChange}
                        />

                    </InputsWrapper>
                    <StyledButton size="md" color="orange">
                        Login
                    </StyledButton>
                    <StyledButton size="md" color="white">
                        <GoogleIcon src={googleIcon} />
                        Login with Google
                    </StyledButton>
                </Form>
                <CopyRight>Copyright © 2023 EleGanzo</CopyRight>
            </LoginLeft>
            <LoginRight>
                <Image src={loginImg} alt="" />
            </LoginRight>
        </LoginWrapper>
    );
};

export { Login };
