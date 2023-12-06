import "./Hero.css";
import hero from "../../../../assets/hero.png";
import { Button } from "../../../../design-system/button/Button";

const Hero = () => {
    return (
        <section id="hero-section">
            <div className="sections-container hero-section__container">
                <div className="hero-section__left">
                    <span>Restaurant</span>
                    <h1 className="hero-section__heading">Italian Cuisine</h1>
                    <p className="hero-section__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sodales senectus dictum arcu sit tristique donec eget.
                    </p>
                    <div className="hero-section__cta">
                        <Button size="lg" color="orange">
                            Order Now
                        </Button>
                        <Button size="lg" color="green">
                            Reservation
                        </Button>
                    </div>
                </div>

                <div className="hero-section__right">
                    <img
                        src={hero}
                        alt="Spaghetti"
                        className="hero-section__img"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
