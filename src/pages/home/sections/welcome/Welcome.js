import "./Welcome.css";
import salad from "../../../../assets/salad.png"
import {Button} from "../../../../design-system/button/Button"

const Welcome = () => {
    return (
        <section id="welcome-section">
        <div className="sections-container welcome-section__container">
            <figure className="welcome-section__left">
                <img src={salad} alt="Salad" />
            </figure>
            <div className="welcome-section__right">
                <h2>Welcome to <span>DeliziOso</span></h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis ultricies at eleifend proin. Congue nibh nulla
                    malesuada ultricies nec quam
                </p>
                <Button size="lg" color="orange">See Our Menu</Button>
            </div>
        </div>
    </section>
    )
}

export {Welcome};