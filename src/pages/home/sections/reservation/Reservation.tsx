import styled from "styled-components";
import { Button } from "../../../../design-system/button/Button";
import reservation from "../../../../assets/reservation.png";
import { Container, Content } from "../../../components";

const ReservationContainer = styled(Container)`
    background-color: #fff4e766;
`;
const ReservationContent = styled(Content)`
    display: flex;
    align-items: center;
    gap: var(--space-40);

    @media (max-width: 68.75em) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`;

const ReservationLeft = styled.figure`
    width: 55%;

    img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 68.75em) {
        width: 100%;
        padding-top: 0;
        order: 2;
        padding-bottom: var(--space-20);
    }
`;

const ReservationRight = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: var(--space-120);

    @media (max-width: 81.25em) {
        gap: var(--space-60);
    }

    @media (max-width: 68.75em) {
        width: 100%;
        padding-top: var(--space-20);
        padding-bottom: var(--space-40);
        order: 1;
        gap: var(--space-40);
    }
`;

const Title = styled.h2`
    color: var(--dark-brown);
    margin-bottom: var(--space-20);
    width: 80%;

    @media (max-width: 97.5em) {
        width: 100%;
    }

`;

const Description = styled.p`
    color: var(--light-brown);
    letter-spacing: 0.05rem;

    @media (max-width: 25em) {
        letter-spacing: 0;
    }
`;

const Reservation = () => {
    return (
        <ReservationContainer id="reservation-section">
            <ReservationContent>
                <ReservationLeft>
                    <img src={reservation} alt="People gathering for food" />
                </ReservationLeft>
                <ReservationRight>
                    <Title className="heading-1">
                        Let's reserve <span>a table</span>
                    </Title>
                    <Description className="paragraph-xl">
                        Located in the heart of the city, So guests can enjoy a
                        stylish, inviting ambiance perfect for both casual meals
                        and special occasions.
                    </Description>
                    <div>
                        <Button size="lg" color="orange">
                            Reservation
                        </Button>
                    </div>
                </ReservationRight>
            </ReservationContent>
        </ReservationContainer>
    );
};

export { Reservation };
