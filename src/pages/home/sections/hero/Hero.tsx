import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import hero from "../../../../assets/hero.png"
import { Button } from "../../../../design-system/button/Button";
import { Container, Content } from "../../../components";

const HeroSectionContent = styled(Content)`
    display: flex;
    align-items: center;
    gap: var(--space-40);

    @media (max-width: 68.75em) {
        flex-direction: column;
        gap: var(--space-100);
    }
`;

const HeroSectionLeft = styled.div`
    width: 50%;

    @media (max-width: 68.75em) {
        width: 100%;
        display: block;
    }
`;

const Span = styled.span`
    display: block;
    width: max-content;
    margin-bottom: 24px;
    background-color: #ffe8cc;
    color: var(--orange);
    border-radius: var(--border-radius-123);
    padding: var(--space-6) var(--space-20);
`;

const Heading = styled.h1`
    margin-bottom: var(--space-24);
    color: var(--dark-brown);
`;

const Description = styled.p`
    margin-bottom: var(--space-50);
    color: var(--light-brown);
    letter-spacing: 0.1rem;
`;
const Actions = styled.div`
    display: flex;
    gap: var(--space-12);
`;

const HeroSectionRight = styled.div`
    width: 50%;
    height: max-content;

    @media (max-width: 68.75em) {
        width: 100%;
        display: block;
    }
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;

const Hero = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <HeroSectionContent>
                <HeroSectionLeft>
                    <Span className="paragraph-md">Restaurant</Span>
                    <Heading className="heading-1">Italian Cuisine</Heading>
                    <Description className="paragraph-xl">
                        Eleganzo is a modern Italian restaurant that seamlessly
                        blends tradition with contemporary flair.
                    </Description>
                    <Actions>
                        <Button size="lg" color="orange" onClick={() => navigate("menu")}>
                            Order Now
                        </Button>
                        <Button size="lg" color="green" onClick={() => navigate("reservation")}>
                            Reservation
                        </Button>
                    </Actions>
                </HeroSectionLeft>

                <HeroSectionRight>
                    <StyledImg
                        src={hero}
                        alt="Spaghetti"
                        className="hero-section__img"
                    />
                </HeroSectionRight>
            </HeroSectionContent>
        </Container>
    );
};

export { Hero };
