import "./Menu.css";
import { meals } from "./data";

import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";

import { Button } from "../../../../design-system/button/Button";

const Star = (props) => {
    return (
        <img
            src={props.number ? starFilled : starEmpty}
            alt={props.nimber ? "Star Filled" : "Star Empty"}
        />
    );
};

const Meal = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.name} className="card__img" />
            <h3 className="card__title">{props.name}</h3>
            <div className="menu-section__stars">
                {props.rating.map((number, idx) => {
                    return <Star key={idx} number={number} />;
                })}
            </div>
            <p className="card__text">{props.description}</p>
            <div className="card__footer">
                <span className="menu-section__price">{props.price}</span>
                <Button size="md" color="orange">
                    Order Now
                </Button>
            </div>
        </div>
    );
};

const Menu = () => {
    return (
        <section id="menu-section">
            <div className="sections-container menu-section__container">
                <h2>Our Popular Menu</h2>
                <div className="menu-section__filters">
                    <Button size="lg" color="black">
                        All Catagories
                    </Button>
                    <Button size="lg" color="gray">
                        Dinner
                    </Button>
                    <Button size="lg" color="gray">
                        Lunch
                    </Button>
                    <Button size="lg" color="gray">
                        Dessert
                    </Button>
                    <Button size="lg" color="gray">
                        Drink
                    </Button>
                </div>
                <div className="menu-section__meals">
                    {meals.map((meal, idx) => {
                        return (
                            <Meal
                                key={idx}
                                name={meal.name}
                                img={meal.img}
                                description={meal.description}
                                rating={meal.rating}
                                price={meal.price}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { Menu };
