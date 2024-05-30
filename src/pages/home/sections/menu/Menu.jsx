import { useState } from "react";
import styled from "styled-components";
import { Meal } from "./Meal.jsx";
import { meals } from "./Popular.jsx";
import { Button } from "../../../../design-system/button/Button";
import { Container } from "../../../components";

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
`
const CurrentMenu = styled.div`
     display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: var(--space-30);

    @media (max-width: 68.75em) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Menu = () => {
    const [currentMenu, setCurrentMenu] = useState(0)
    return (
        <Container id="menu-section">
            <MenuSectionContent>
                <MenuTitle className="heading-2">Our Popular Menu</MenuTitle>
                <MenuFilters>
                    <Button size="lg" color="gray">
                        Popular
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
                </MenuFilters>
                <CurrentMenu>
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
                </CurrentMenu>
            </MenuSectionContent>
        </Container>
    );
};

export { Menu };
