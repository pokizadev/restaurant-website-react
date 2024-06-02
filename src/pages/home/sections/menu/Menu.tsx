import { useState } from "react";
import styled from "styled-components";
import { Meal } from "./Meal";
import { Button } from "../../../../design-system/button/Button.js";
import { Container } from "../../../components";
import { PopularMenu } from "./Popular";
import { LunchMenu } from "./Lunch";
import { DinnerMenu } from "./Dinner";
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

const CurrentMenu = styled.div<{ $active: boolean }>`
    display: ${(props) => (props.$active ? "grid" : "none")};
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: var(--space-30);

    @media (max-width: 68.75em) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const menuTypes = [
    { linkText: "Popular", component: "PopularMenu" },
    { linkText: "Dinner", component: "DinnerMenu" },
    { linkText: "Lunch", component: "LunchMenu" },
    { linkText: "Desserts", component: "Desserts" },
    { linkText: "Drinks", component: "Drinks" }
];

const Menu = () => {
    const [currentMenu, setCurrentMenu] = useState(0);
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
                                color={currentMenu ? "black" : "gray"}
                                onClick={() => setCurrentMenu(idx)}
                            >
                                {menu.linkText}
                            </Button>
                        );
                    })}
                </MenuFilters>
                {menuTypes.map((menu, idx) => (
                    <CurrentMenu key={idx} $active={currentMenu === idx}>
                        {menu.component}
                    </CurrentMenu>
                ))}
            </MenuSectionContent>
        </Container>
    );
};

export { Menu };
