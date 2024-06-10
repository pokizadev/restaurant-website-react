import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../design-system/button/Button.js";
import { Container } from "../../../components";
import { PopularMenu } from "./Popular";
import { LunchMenu } from "./Lunch";
import { DinnerMenu } from "./Dinner";
import { Pizzas } from "./Pizzas";
import { Desserts } from "./Desserts";
import { Drinks } from "./Drinks";

const MenuSectionContent = styled.div`
    padding-top: var(--space-120);
    padding-bottom: var(--space-120);
`;

const MenuTitle = styled.h2`
    text-align: center;
`;

const MenuFilters = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 60px;
    overflow-x: auto;
    scrollbar-width: none;
`;

const menuTypes = [
    { name: "Popular", component: PopularMenu },
    { name: "Dinner", component: DinnerMenu },
    { name: "Lunch", component: LunchMenu },
    { name: "Pizza", component: Pizzas },
    { name: "Desserts", component: Desserts },
    { name: "Drinks", component: Drinks }
];

const Menu = () => {
    const [currentMenu, setCurrentMenu] = useState(0);

    const CurrentComponent = menuTypes[currentMenu].component;

    return (
        <Container id="menu-section">
            <MenuSectionContent>
                <MenuTitle className="heading-2">Our Popular Menu</MenuTitle>
                <MenuFilters>
                    {menuTypes.map((menu, idx) => {
                        return (
                            <Button
                                key={idx}
                                size="lg"
                                color={idx === currentMenu ? "black" : "gray"}
                                onClick={() => setCurrentMenu(idx)}
                            >
                                {menu.name}
                            </Button>
                        );
                    })}
                </MenuFilters>

                <CurrentComponent />
            </MenuSectionContent>
        </Container>
    );
};

export { Menu };
