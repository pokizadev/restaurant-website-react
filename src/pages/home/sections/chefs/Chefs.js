import "./Chefs.css";
import { chefs } from "./data";
import {Button} from "../../../../design-system/button/Button"

const Chef = (props) => {
    return (
        <div className="chefs-section__chef" key={idx}>
        <img src={props.img} 
        alt={props.name} />
        <h4>{props.name}</h4>
        <p>{props.position}</p>
    </div>
    )
}

const Chefs = () => {
    return (
        <section id="chefs-section">
            <div className="sections-container chefs-section__container">
                <h2>
                    Our Greatest <span>Chefs</span>
                </h2>
                <div className="chefs-section__chefs">
                    {chefs.map((chef, idx) => {
                        return (
                           <Chef
                            key={idx}
                            name={chef.name}
                            img={chef.img}
                            position={chef.position}
                           />
                        );
                    })}
                </div>
                <Button size="lg" color="orange">View All</Button>
            </div>
        </section>
    );
};

export { Chefs };
