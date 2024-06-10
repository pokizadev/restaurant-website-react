import styled from "styled-components";

import { Meal } from "./Meal";
import lunch1 from "../../../../assets/lunch/Eleganzo-special.png";
import lunch2 from "../../../../assets/lunch/gricia.png";
import lunch3 from "../../../../assets/lunch/meatloaf.png";
import lunch4 from "../../../../assets/lunch/old-fashioned-spagetti.png";
import lunch5 from "../../../../assets/lunch/stromboli.png";
import lunch6 from "../../../../assets/lunch/tetrazzini.png";

export const lunches = [
    {
        name: "Eleganzo Special",
        img: lunch1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$20.99"
    },
    {
        name: "Gricia",
        img: lunch2,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.49"
    },
    {
        name: "Meatloaf",
        img: lunch3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$17.99"
    },
    {
        name: "Old  Fashioned Spaghetti",
        img: lunch4,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    },
    {
        name: "Stromboli",
        img: lunch5,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.75"
    },
    {
        name: "Tetrazzini",
        img: lunch6,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
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

const LunchMenu = () => {
    return (
        <CurrentMenu>
            {lunches.map((lunch, idx) => {
                return (
                    <Meal
                        key={idx}
                        name={lunch.name}
                        img={lunch.img}
                        description={lunch.description}
                        rating={lunch.rating}
                        price={lunch.price}
                    />
                );
            })}
        </CurrentMenu>
    );
};

export { LunchMenu };
