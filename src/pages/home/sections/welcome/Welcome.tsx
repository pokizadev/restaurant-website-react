import styled from "styled-components";
import salad from "../../../../assets/salad.png";
import { Button } from "../../../../design-system/button/Button";
import { Container } from "../../../components";

const WelcomeSectionContainer = styled(Container)`
    background-color: #3fc66e1a;
    padding-right: 0;
`;

const Content = styled.div`
    padding-top: var(--space-80);
    padding-bottom: var(--space-80);
    display: flex;
    align-items: center;

    @media (max-width: 62.5em) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }

    @media (max-width: 50em) {
        padding-top: var(--space-40);
        padding-bottom: var(--space-40);
    }
`;
const WelcomeLeft = styled.div`
    width: 55%;
    order: 2;

    @media (max-width: 62.5em) {
        width: 100%;
    }
`;
const WelcomeRight = styled.div`
    width: 45%;
    order: 1;

    @media (max-width: 62.5em) {
        width: 100%;
    }
`;

const WelcomeDescription = styled.p`
    margin-bottom: var(--space-120);
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;

const Welcome = () => {
    return (
        <WelcomeSectionContainer id="welcome-section">
            <Content>
                <WelcomeLeft>
                    <StyledImg src={salad} alt="Salad" />
                </WelcomeLeft>
                <WelcomeRight>
                    <h2 className="heading-1">
                        Welcome to <span>EleGanzo</span>
                    </h2>
                    <WelcomeDescription className="paragraph-lg">
                        Eleganzo offers an exquisite dining experience with its
                        innovative menu, featuring fresh, locally sourced
                        ingredients and authentic Italian flavors.
                    </WelcomeDescription>
                    <Button size="lg" color="orange">
                        See Our Menu
                    </Button>
                </WelcomeRight>
            </Content>
        </WelcomeSectionContainer>
    );
};

export { Welcome };
