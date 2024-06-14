import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Content } from "../../../components";
import { Testimonial } from "./testimonial/Testimonial";
import background from "../../../../assets/customers.png";
import { customers } from "./testimonial/data";
import leftIcon from "../../../../assets/arrow-back.png";
import rightIcon from "../../../../assets/forward-arrow.png";

const TestimonialsContainer = styled(Container)`
    background-image: url(${background});
    width: 100%;
    height: auto;
    background-position: top;
    background-color: #fbfafa;
    background-size: contain;


`;

const TestimonialsContent = styled(Content)`
    position: relative;
    text-align: center;
    padding-top: 20rem;
    padding-bottom: 30rem;

    @media (max-width: 62.5em) {
        padding-top: 10rem;
        padding-bottom: 20rem;
    }
`;
const Title = styled.h2`
    margin-bottom: var(--space-100);
`;

const TestimonialsWrapper = styled.div`
    display: flex;
    gap: var(--space-40);
    justify-content: space-between;

    @media (max-width: 62.5em) {
        justify-content: center;
    }
`;

const LeftIcon = styled.img`
    display: none;
    cursor: pointer;

    @media (max-width: 62.5em) {
        display: block;
        width: 5rem;
        height: 5rem;
        position: absolute;
        top: 50%;
        left: 5%;
    }
`;

const RightIcon = styled.img`
    display: none;
    cursor: pointer;

    @media (max-width: 62.5em) {
        display: block;
        width: 5rem;
        height: 5rem;
        position: absolute;
        top: 50%;
        right: 5%;
    }
`;
const ActivePageIdentifiers = styled.div`
    display: flex;
    gap: var(--space-24);
    text-align: center;
    justify-content: center;
    margin-top: var(--space-50);
`;

const ActiveDot = styled.div<{ $active: boolean }>`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) =>
        props.$active ? "var(--orange)" : "var(--light-gray)"};
    border-radius: var(--border-radius-70);
`;


const Testimonials = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIdx((prevIdx) => (prevIdx + 1) % customers.length);
    };

    const handlePrev = () => {
        setCurrentIdx(
            (prevIdx) => (prevIdx - 1 + customers.length) % customers.length
        );
    };
    return (
        <TestimonialsContainer id="testimonials-section">
            <TestimonialsContent>
                <Title className="heading-2">What Customers Say</Title>
                <TestimonialsWrapper>
                    {isMobile ? (
                        <Testimonial
                            key={currentIdx}
                            name={customers[currentIdx].name}
                            img={customers[currentIdx].img}
                            position={customers[currentIdx].position}
                            text={customers[currentIdx].text}
                        />
                    ) : (
                        customers.map((customer, idx) => (
                            <Testimonial
                                key={idx}
                                name={customer.name}
                                img={customer.img}
                                position={customer.position}
                                text={customer.text}
                            />
                        ))
                    )}
                </TestimonialsWrapper>
                {isMobile && (
                    <>
                        <LeftIcon
                            src={leftIcon}
                            alt="previous Icon"
                            onClick={handlePrev}
                        />
                        <RightIcon
                            src={rightIcon}
                            alt="next Icon"
                            onClick={handleNext}
                        />
                        <ActivePageIdentifiers>
                                    {customers.map((_, idx) => (
                                        <ActiveDot
                                            key={idx}
                                            $active={idx === currentIdx}
                                        />
                                    ))}
                                </ActivePageIdentifiers>
                    </>
                    
                )}
            </TestimonialsContent>
        </TestimonialsContainer>
    );
};

export { Testimonials };
