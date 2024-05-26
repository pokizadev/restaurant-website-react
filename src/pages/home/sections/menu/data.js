import "./Menu.css";

import spaghetti from "../../../../assets/menu-spaghetti.png";
import gnocchi from "../../../../assets/menu-gnocchi.png";
import rovioli from "../../../../assets/menu-rovioli.png";
import penneAllaVodak from "../../../../assets/menu-penne-alla-vodak.png";
import risoto from "../../../../assets/menu-risoto.png";
import splitza from "../../../../assets/menu-splitza.png";

export const meals = [
    {
        name: "Spaghetti",
        img: spaghetti,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    },
    {
        name: "Gnocchi",
        img: gnocchi,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$7.49"
    },
    {
        name: "Rovioli",
        img: rovioli,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$10.99"
    },
    {
        name: "Penna Alla Vodak",
        img: penneAllaVodak,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$8.99"
    },
    {
        name: "Risoto",
        img: risoto,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "$5.99"
    },
    {
        name: "Splitza",
        img: splitza,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    }
];
