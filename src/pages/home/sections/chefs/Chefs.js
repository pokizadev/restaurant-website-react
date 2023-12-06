import "./Chefs.css";
import { chefs } from "./data";
import {Button} from "../../../../design-system/button/Button"

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
                            <div className="chefs-section__chef" key={idx}>
                                <img src={chef.img} alt={chef.name} />
                                <h4>{chef.name}</h4>
                                <p>{chef.position}</p>
                            </div>
                        );
                    })}
                </div>
                <Button size="lg" color="orange">View All</Button>
            </div>
        </section>
    );
};

export { Chefs };
