import styled from "styled-components";

import { Meal } from "../Meal";
import spaghetti from "../../../../../assets/popular/menu-spaghetti.png";
import gnocchi from "../../../../../assets/popular/menu-gnocchi.png";
import rovioli from "../../../../../assets/popular/menu-rovioli.png";
import penneAllaVodak from "../../../../../assets/popular/menu-penne-alla-vodak.png";
import risoto from "../../../../../assets/popular/menu-risoto.png";
import splitza from "../../../../../assets/popular/menu-splitza.png";

export const popular = [
    {
        name: "Spaghetti",
        img: spaghetti,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    },
    {
        name: "Gnocchi",
        img: gnocchi,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$7.49"
    },
    {
        name: "Rovioli",
        img: rovioli,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$10.99"
    },
    {
        name: "Penna Alla Vodak",
        img: penneAllaVodak,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$8.99"
    },
    {
        name: "Risoto",
        img: risoto,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "$5.99"
    },
    {
        name: "Splitza",
        img: splitza,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
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

const PopularMenu = () => {
    return (
        <CurrentMenu>
            {popular.map((meal, idx) => {
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
        </CurrentMenu>
    );
};

export { PopularMenu };
