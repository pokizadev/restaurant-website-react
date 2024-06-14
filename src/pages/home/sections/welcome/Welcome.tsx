import styled from "styled-components";
import salad from "../../../../assets/salad.png";
import { Button } from "../../../../design-system/button/Button";
import { Container, Content } from "../../../components";

const WelcomeSectionContainer = styled(Container)`
    background-color: #3fc66e1a;

    @media (max-width: 75em) {
        padding-right: 0;
    }

    @media (max-width: 62.5em) {
        padding-right: var(--space-80);

    }

`;

const WelcomeContent = styled(Content)`
    display: flex;
    align-items: center;

    @media (max-width: 62.5em) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
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

const WelcomeTitle = styled.h2`
    color: var(--dark-brown);
    margin-bottom: var(--space-50);

    @media (max-width: 68.75em) {
        margin-bottom: var(--space-30);
    }
`;

const WelcomeDescription = styled.p`
    margin-bottom: var(--space-120);

    @media (max-width: 75em) {
        margin-bottom: var(--space-60);
    }
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;

const Welcome = () => {
    return (
        <WelcomeSectionContainer id="welcome-section">
            <WelcomeContent>
                <WelcomeLeft>
                    <StyledImg src={salad} alt="Salad" />
                </WelcomeLeft>
                <WelcomeRight>
                    <WelcomeTitle className="heading-1">
                        Welcome to <span>EleGanzo</span>
                    </WelcomeTitle>
                    <WelcomeDescription className="paragraph-lg">
                        Eleganzo offers an exquisite dining experience with its
                        innovative menu, featuring fresh, locally sourced
                        ingredients and authentic Italian flavors.
                    </WelcomeDescription>
                    <Button size="lg" color="orange">
                        See Our Menu
                    </Button>
                </WelcomeRight>
            </WelcomeContent>
        </WelcomeSectionContainer>
    );
};

export { Welcome };
