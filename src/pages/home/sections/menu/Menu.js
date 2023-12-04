import "./Menu.css";
import { meals } from "./data";

import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";

const Menu = () => {
    return (
        <section id="menu-section">
            <div className="sections-container menu-section__container">
                <h2>Our Popular Menu</h2>
                <div className="menu-section__filters">
                    <button className="btn btn-lg btn-black">
                        All Catagories
                    </button>
                    <button className="btn btn-lg btn-gray">Dinner</button>
                    <button className="btn btn-lg btn-gray">Lunch</button>
                    <button className="btn btn-lg btn-gray">Dessert</button>
                    <button className="btn btn-lg btn-gray">Drink</button>
                </div>
                <div className="menu-section__meals">
                    {meals.map((meal, idx) => {
                        return (
                            <div className="card" key={idx}>
                                <img
                                    src={meal.img}
                                    alt={meal.name}
                                    className="card__img"
                                />
                                <h3 className="card__title">{meal.name}</h3>
                                <div className="menu-section__stars">
                                    {meal.rating.map((number, idx) => {
                                        return (
                                            <img
                                                src={
                                                    number
                                                        ? starFilled
                                                        : starEmpty
                                                }
                                                alt={
                                                    number
                                                        ? "Filled Star"
                                                        : "Empty Star"
                                                }
                                            />
                                        );
                                    })}
                                </div>
                                <p className="card__text">{meal.text}</p>
                                <div className="card__footer">
                                    <span className="menu-section__price">
                                        {meal.price}
                                    </span>
                                    <button className="btn btn-md btn-orange">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { Menu };
