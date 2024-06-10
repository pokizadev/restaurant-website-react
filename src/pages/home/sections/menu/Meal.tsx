import styled from "styled-components";
import { Button } from "../../../../design-system/button/Button";
import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";
import React from "react";

export type StarProps = {
    number: number;
};
const Star: React.FC<StarProps> = (props) => {
    return (
        <img
            src={props.number ? starFilled : starEmpty}
            alt={props.number ? "Star Filled" : "Star Empty"}
        />
    );
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-24);
    width: auto;
    padding: var(--space-36);
    background-color: #d0ccc733;
    border-radius: var(--border-radius-70);

    @media (max-width: 37.5em) {
        padding: var(--space-16);
        border-radius: var(--border-radius-40);
    }
`;

const MealImg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: var(--space-20);
`;

const MealTitle = styled.h3`
    text-align: center;
    margin-bottom: var(--space-14);
`;

const StarsWrapper = styled.div`
    margin-bottom: var(--space-16);
    margin: 0 auto;
    width: max-content;
`;

const MealDescription = styled.p`
    color: #59442b;
    text-align: center;
    margin-bottom: var(--space-30);
    line-height: var(--space-28);
`;

const MealFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    .btn {
        @media (max-width: 56.25em) {
            height: var(--space-50);
            border-radius: var(--border-radius-133);
            padding-left: var(--space-20);
            padding-right: var(--space-20);
        }

        @media (max-width: 31.25em) {
            height: var(--space-30);
            padding: var(--space-10);
        }
    }

    .btn-sm {
        display: none;
    }

    @media (max-width: 43.75em) {
        .btn-md {
            display: none;
        }

        .btn-sm {
            display: flex;
            align-items: center;
        }
    }
`;

const MealPrice = styled.span`
    color: var(--dark-brown);

    @media (max-width: 31.25em) {
        font-size: var(--font-size-16);
        line-height: var(--line-height-24);
    }
`;

export type MealProps = {
    img: string;
    name: string;
    rating: number[];
    description: string;
    price: string;
};

const Meal: React.FC<MealProps> = (props) => {
    return (
        <Card>
            <MealImg src={props.img} alt={props.name} />
            <MealTitle className="subtitle-xl">{props.name}</MealTitle>
            <StarsWrapper>
                {props.rating.map((number, idx) => {
                    return <Star key={idx} number={number} />;
                })}
            </StarsWrapper>
            <MealDescription className="paragraph-sm">
                {props.description}
            </MealDescription>
            <MealFooter>
                <MealPrice className="subtitle-lg">{props.price}</MealPrice>
                <Button size="md" color="orange">
                    Order Now
                </Button>

                <Button className="plus" size="sm" color="orange">
                    +
                </Button>
            </MealFooter>
        </Card>
    );
};

export { Meal };
