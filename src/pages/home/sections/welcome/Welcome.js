import "./Welcome.css";
import salad from "../../../../assets/salad.png"

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
                <button className="btn btn-lg btn-orange">See Our Menu</button>
            </div>
        </div>
    </section>
    )
}

export {Welcome};