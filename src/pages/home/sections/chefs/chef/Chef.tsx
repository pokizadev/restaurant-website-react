import { FC } from "react";
import { ChefProps } from "./types";
import styled from "styled-components";

const ChefItem = styled.div`
    img {
        width: 100%;
        height: auto;
        border-radius: var(--space-50);
        margin-bottom: var(--space-40);
    }
    &:first-child img {
        background-color: #c4c4c4;
    }
    &:nth-child(2) img {
        background-color: #ff8a0033;
    }

    &:nth-child(3) img {
        background-color: #9d654233;
    }

    &:last-child {
        display: none;

        @media (max-width: 56.25em) {
            display: list-item;
            img {
                background-color: #ff8a0033;
            }
        }
    }
`;

const ChefTitle = styled.h4`
    margin-bottom: var(--space-16);
    color: var(--dark-brown);
`;

const ChefPosition = styled.p`
    color: #a08d76;
`
const Chef: FC<ChefProps> = (props) => {
    return (
        <ChefItem>
            <img src={props.img} alt={props.name} />
            <ChefTitle className="subtitle-lg">{props.name}</ChefTitle>
            <ChefPosition className="paragraph-xl">{props.position}</ChefPosition>
        </ChefItem>
    );
};

export { Chef };
