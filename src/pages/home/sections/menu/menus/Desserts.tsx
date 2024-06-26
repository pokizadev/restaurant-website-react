import styled from "styled-components";
import { Meal } from "../Meal";
import dessert1 from "../../../../../assets/desserts/tiramisu.png";
import dessert2 from "../../../../../assets/desserts/pistachio-Stracciatella-Gelato.png";
import dessert3 from "../../../../../assets/desserts/zabaglione.png";
import dessert4 from "../../../../../assets/desserts/Affogato.png";
import dessert5 from "../../../../../assets/desserts/cheese-cake.png";
import dessert6 from "../../../../../assets/desserts/assorti.png";

export const desserts = [
    {
        name: "Tiramisu",
        img: dessert1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$9.99"
    },
    {
        name: "Pistachio Stracciatella Gelato",
        img: dessert2,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$13.49"
    },
    {
        name: "Zabaglione Raspberry",
        img: dessert3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$9.99"
    },
    {
        name: "Affogato",
        img: dessert4,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$8.99"
    },
    {
        name: "Cheese Cake",
        img: dessert5,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$6.75"
    },
    {
        name: "Assorti",
        img: dessert6,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$8.75"
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

const Desserts = () => {
    return (
        <CurrentMenu>
            {desserts.map((dessert, idx) => {
                return (
                    <Meal
                        key={idx}
                        name={dessert.name}
                        img={dessert.img}
                        description={dessert.description}
                        rating={dessert.rating}
                        price={dessert.price}
                    />
                );
            })}
        </CurrentMenu>
    );
};

export { Desserts };
