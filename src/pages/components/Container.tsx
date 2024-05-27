import styled from "styled-components";

export const Container = styled.section`
    max-width: 144rem;
    margin: 0 auto;

    padding-left: 80px;
    padding-right: 80px;

    @media (max-width: 800px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`;