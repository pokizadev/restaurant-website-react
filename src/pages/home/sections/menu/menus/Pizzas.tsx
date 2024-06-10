import { Meal } from "../Meal";
import pizza1 from "../../../../../assets/pizzas/regular.png";
import pizza2 from "../../../../../assets/pizzas/pepperoni.png";
import pizza3 from "../../../../../assets/pizzas/veggie.png";
import pizza4 from "../../../../../assets/pizzas/mushroom.png";
import pizza5 from "../../../../../assets/pizzas/chicken-pizza.png";
import pizza6 from "../../../../../assets/pizzas/fish-pizza.png";
import styled from "styled-components";

export const pizzas = [
    {
        name: "Regular Pizza",
        img: pizza1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$14.99"
    },
    {
        name: "Pepperoni Pizza",
        img: pizza2,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$16.49"
    },
    {
        name: "Veggie Pizza",
        img: pizza3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$15.99"
    },
    {
        name: "Mushroom Pizza",
        img: pizza4,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$15.99"
    },
    {
        name: "Chicken Pizza",
        img: pizza5,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$18.75"
    },
    {
        name: "Fish Pizza",
        img: pizza6,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$19.99"
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

const Pizzas = () => {
    return (
        <CurrentMenu>
            {pizzas.map((pizza, idx) => {
                return (
                    <Meal
                        key={idx}
                        name={pizza.name}
                        img={pizza.img}
                        description={pizza.description}
                        rating={pizza.rating}
                        price={pizza.price}
                    />
                );
            })}
        </CurrentMenu>
    );
};

export { Pizzas };
