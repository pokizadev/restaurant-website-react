import "./Chefs.css";
import { chefs } from "./data";

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
                <button className="btn btn-lg btn-orange">View All</button>
            </div>
        </section>
    );
};

export { Chefs };
