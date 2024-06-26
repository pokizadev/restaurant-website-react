import styled from "styled-components";
import { Meal } from "../Meal";
import cacio from "../../../../../assets/dinner/cacio-e-pepe.png";
import chickenpiccata from "../../../../../assets/dinner/chicken-piccata.png";
import eggplantdish from "../../../../../assets/dinner/eggplant.png";
import lasagna from "../../../../../assets/dinner/lasagna.png";
import minestrone from "../../../../../assets/dinner/minestrone.png";
import chili from "../../../../../assets/dinner/turkey-chili.png";

export const dinnerMeals = [
    {
        name: "Cacio e pepe",
        img: cacio,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$12.99"
    },
    {
        name: "Chicken Piccata",
        img: chickenpiccata,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$15.49"
    },
    {
        name: "Eggplant Parm",
        img: eggplantdish,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$6.99"
    },
    {
        name: "Lasagna",
        img: lasagna,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$19.99"
    },
    {
        name: "Minestrone Soup",
        img: minestrone,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "$5.99"
    },
    {
        name: "Turkey Chili",
        img: chili,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$9.99"
    }
];

const CurrentMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: var(--space-30);

    @media (max-width: 68.75em) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const DinnerMenu = () => {
    return (
        <CurrentMenu>
            {dinnerMeals.map((dinnerMeal, idx) => {
                return (
                    <Meal
                        key={idx}
                        name={dinnerMeal.name}
                        img={dinnerMeal.img}
                        description={dinnerMeal.description}
                        rating={dinnerMeal.rating}
                        price={dinnerMeal.price}
                    />
                );
            })}
        </CurrentMenu>
    );
};

export { DinnerMenu };
