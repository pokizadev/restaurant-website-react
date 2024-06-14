import styled from "styled-components";
import { Chef } from "./chef/Chef";
import { chefs, chefs2 } from "./data";
import { Button } from "../../../../design-system/button/Button";
import { Container, Content } from "../../../components";
import { useState } from "react";

const ChefsContent = styled(Content)`
    text-align: center;
`;

const Title = styled.h2`
    margin-bottom: var(--space-100);
    color: var(--dark-brown);
`;

const ChefsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-40);
    margin-bottom: var(--space-50);

    @media (max-width: 56.25em) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Chefs = () => {
    const [showAll, setShowAll] = useState(false);
    return (
        <Container id="chefs-section">
            <ChefsContent>
                <Title className="heading-2">
                    Our Greatest <span>Chefs</span>
                </Title>
                <ChefsWrapper>
                    {chefs.map((chef, idx) => {
                        return (
                            <Chef
                                key={idx}
                                name={chef.name}
                                img={chef.img}
                                position={chef.position}
                            />
                        );
                    })}
                </ChefsWrapper>
                {showAll && (
                    <ChefsWrapper>
                        {chefs2.map((chef, idx) => {
                            return (
                                <Chef
                                    key={idx}
                                    name={chef.name}
                                    img={chef.img}
                                    position={chef.position}
                                />
                            );
                        })}
                    </ChefsWrapper>
                )}
                <Button
                    size="lg"
                    color="orange"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "View Less" : "View More"}
                </Button>
            </ChefsContent>
        </Container>
    );
};

export { Chefs };
