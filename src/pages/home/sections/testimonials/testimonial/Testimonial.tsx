import { FC } from "react";
import { TestimonialProps } from "./types";
import styled from "styled-components";

const TestimonialItem = styled.div`
    width: 30%;
    text-align: center;
    margin-bottom: var(--space-16);

    @media (max-width: 62.5em) {
        width: 100%;
    }
`;
const TestimonialImage = styled.img`
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    margin-bottom: var(--space-36);

    @media (max-width: 62.5em) {
        height: 30rem;
        width: 30rem;
    }

    @media (max-width: 31.25em) {
        height: 15rem;
        width: 15rem;
    }
`;

const Name = styled.h4`
    color: var(--dark-brown);
    margin-bottom: var(--space-20);
`;
const Position = styled.h5`
    color: var(--light-brown);
    margin-bottom: var(--space-20);

    @media (max-width: 62.5em) {
        margin-bottom: var(--space-40);
    }
`;
const Text = styled.p`
    color: var(--light-brown);
    line-height: var(--line-height-32);

    @media (max-width: 62.5em) {
        width: 60%;
        margin: 0 auto;
        font-size: var(--font-size-24);
        line-height: var(--line-height-40);
    }
`;

const Testimonial: FC<TestimonialProps> = (props) => {
    return (
        <TestimonialItem>
            <TestimonialImage src={props.img} alt={props.name} />
            <Name className="subtitle-lg">{props.name}</Name>
            <Position className="heading-3">{props.position}</Position>
            <Text className="paragraph-lg">{props.text}</Text>
        </TestimonialItem>
    );
};

export { Testimonial };
