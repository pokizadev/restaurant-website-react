import styled from "styled-components";
import { Button } from "../../../../design-system/button/Button";
import reservation from "../../../../assets/reservation.png";
import { Container } from "../../../components";

const ReservationContainer = styled(Container)`
    background-color: #fff4e766;
`;
const ReservationContent = styled.div`
  padding-top: var(--space-80);
    padding-bottom: var(--space-64);
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
    }
`;

const ReservationRight = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: var(--space-50);

    @media (max-width: 68.75em) {
        width: 100%;
        padding-top: var(--space-80);
        padding-bottom: var(--space-80);
        order: 1;
    }

    h2 {
        color: var(--dark-brown);
    }

    p {
        margin-bottom: var(--space-80);
        color: var(--light-brown);
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
                    <h2 className="heading-1">
                        Let's reserve <span>a table</span>
                    </h2>
                    <p className="paragraph-lg">
                        Located in the heart of the city, So guests can enjoy a
                        stylish, inviting ambiance perfect for both casual meals
                        and special occasions.
                    </p>
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
