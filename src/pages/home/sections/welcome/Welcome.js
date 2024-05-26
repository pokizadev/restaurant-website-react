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
                <h2>Welcome to <span>EleGanzo</span></h2>
                <p>
                Eleganzo offers an exquisite dining experience with its innovative menu, featuring fresh, locally sourced ingredients and authentic Italian flavors. 
                </p>
                <Button size="lg" color="orange">See Our Menu</Button>
            </div>
        </div>
    </section>
    )
}

export {Welcome};