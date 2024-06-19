import styled from "styled-components";
import { Container, Content } from "../components";
import { Input } from "../../design-system/input";
import { useState } from "react";
import { Button } from "../../design-system/button/Button";

const ContactContent = styled(Content)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
`;

const Heading = styled.h2`
    color: var(--dark-brown);
    text-align: center;
    margin-bottom: var(--space-36);
`;

const Description = styled.p`
    width: 70%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: var(--space-80);
    color: var(--light-brown);
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: var(--space-100);
`;

const InputsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-32);
    margin-bottom: var(--space-32);

    @media (max-width: 31.25em) {
    grid-template-columns: repeat(1, 1fr);

    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 25rem;
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: var(--border-radius-16);
    padding: var(--space-20) var(--space-30);
    outline-color: var(--orange);
    color: var(--dark-brown);
    font-size: var(--font-size-16);
    margin-bottom: var(--space-100);

    &::placeholder {
        font-size: var(--font-size-14);
        line-height: var(--line-height-28);
        color: var(--light-gray);
    }
`;
const ButtonWrapper = styled.div`
    text-align: center;
`;

const ContactSubmitButton = styled(Button)`
    width: 40rem;
    height: auto;
    border-radius: var(--border-radius-20);
    padding: var(--space-20) var(--space-30);


    @media (max-width: 31.25em) {
    width: 100%;

    }
`;


const Map = styled.iframe`
    width: 100%;
    height: 45rem;
    border: none;
`;

const ContactUs = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");

    const handleFirstNameOnChange = (value: string) => {
        setFirstName(value);
    };
    const handleLastNameOnChange = (value: string) => {
        setLastName(value);
    };
    const handleEmailOnChange = (value: string) => {
        setEmail(value);
    };
    const handleSubjectOnChange = (value: string) => {
        setSubject(value);
    };
    return (
        <ContactContent>
            <Container>
                <Heading className="heading-2">Contact Us</Heading>
                <Description className="paragraph-md">
                    We love hearing from our customers. Feel free to share your
                    experience or ask any questions you may have.
                </Description>
                <Form>
                    <InputsWrapper>
                        <Input
                            value={firstName}
                            type="text"
                            placeholder="First Name"
                            onChange={handleFirstNameOnChange}
                        />

                        <Input
                            value={lastName}
                            type="text"
                            placeholder="Last Name"
                            onChange={handleLastNameOnChange}
                        />
                        <Input
                            value={email}
                            type="email"
                            placeholder="Email address"
                            onChange={handleEmailOnChange}
                        />
                        <Input
                            value={subject}
                            type="text"
                            placeholder="Subject"
                            onChange={handleSubjectOnChange}
                        />
                    </InputsWrapper>
                    <TextArea placeholder="Message" />
                    <ButtonWrapper>
                        <ContactSubmitButton size="sm" color="orange">
                            Submit
                        </ContactSubmitButton>
                    </ButtonWrapper>
                </Form>
            </Container>
                <Map
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6032.806285679432!2d-73.91306732407416!3d40.88497082700856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3bfa4f31ce3%3A0xb8af79c4f028fc28!2s3247%20Johnson%20Ave%2C%20Bronx%2C%20NY%2010463!5e0!3m2!1sen!2sus!4v1718764220053!5m2!1sen!2sus"
                ></Map>
        </ContactContent>
    );
};

export { ContactUs };
