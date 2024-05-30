import styled from "styled-components";

const Container = styled.section`
    max-width: 144rem;
    margin: 0 auto;

    padding-left: var(--space-80);
    padding-right: var(--space-80);

    @media (max-width: 50em) {
        padding-left: var(--space-40);
        padding-right: var(--space-40);
    }

    @media (max-width: 31.25em) {
        padding-left: var(--space-10);
        padding-right: var(--space-10);
    }
`;

export { Container };
