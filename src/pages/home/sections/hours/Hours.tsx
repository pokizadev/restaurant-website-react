import { Container, Content } from "../../../components";
import styled from "styled-components";
import hoursBackground from "../../../../assets/business-hours.png";
import { Button } from "../../../../design-system/button/Button";
import { useNavigate } from "react-router-dom";

const HoursContainer = styled(Container)`
    padding-top: var(--space-80);
    padding-bottom: var(--space-80);

    @media (max-width: 50em) {
        padding-top: var(--space-40);
        padding-bottom: var(--space-40);
    }
`;

const HoursContent = styled.div`
    max-width: 115rem;
    height: 75rem;
    margin: 0 auto;
    border-radius: 15rem;
    padding: 0 2rem;

    background-image: url(${hoursBackground});

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 43.75em) {
        border-radius: var(--border-radius-80);
    }

    @media (max-width: 31.25em) {
        height: 60rem;
    }
`;

const HoursWrapper = styled.div``;

const Title = styled.h2`
    color: var(--white);
    margin-bottom: var(--space-16);
`;

const Subtitle = styled.h3`
    color: var(--white);
`;

const TextWrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    margin-bottom: var(--space-50);

    p {
        color: var(--white);
        text-align: right;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: var(--space-16);
    justify-content: center;

    @media (max-width: 25em) {
        flex-direction: column;
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

const Hours = () => {
    const navigate = useNavigate();
    return (
        <HoursContainer id="hours-section">
            <HoursContent>
                <HoursWrapper>
                    <Title className="heading-2">We are open from</Title>
                    <Subtitle className="subtitle-xl">Monday-Sunday</Subtitle>
                    <TextWrapper>
                        <p className="paragraph-lg">
                            Lunch : Mon-Sun : 11:00am-02:00pm
                        </p>
                        <p className="paragraph-lg">
                            Dinner : Sunday : 04:00pm-08:00pm
                        </p>
                        <p className="paragraph-lg">04:00pm-09:00pm</p>
                    </TextWrapper>
                    <ButtonsWrapper>
                        <Button
                            size="lg"
                            color="orange"
                            onClick={() => navigate("menu")}
                        >
                            Order Now
                        </Button>
                        <Button
                            size="lg"
                            color="white"
                            onClick={() => navigate("reservation")}
                        >
                            Reservation
                        </Button>
                    </ButtonsWrapper>
                </HoursWrapper>
            </HoursContent>
        </HoursContainer>
    );
};

export { Hours };
