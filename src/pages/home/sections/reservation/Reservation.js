import "./Reservation.css";
import {Button} from "../../../../design-system/button/Button"
import reservation from "../../../../assets/reservation.png"

const Reservation = () => {
    return (
        <section id="reservation-section">
            <div className="sections-container reservation-section__container">
                <figure className="reservation-section__left">
                    <img
                        src={reservation}
                        alt="People gathering for food"
                    />
                </figure>
                <div className="reservation-section__right">
                    <h2>
                        Let's reserve <span>a table</span>
                    </h2>
                    <p>
                    Located in the heart of the city, So guests can enjoy a stylish, inviting ambiance perfect for both casual meals and special occasions.
                    </p>
                    <Button size="lg" color="orange">
                        Reservation
                    </Button>
                </div>
            </div>
        </section>
    );
};


export {Reservation}