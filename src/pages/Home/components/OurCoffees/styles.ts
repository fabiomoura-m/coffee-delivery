import styled from 'styled-components';

export const OurCoffeesContainer = styled.section`
    width: 100%;
    margin-top: 2rem;
`;

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;

    @media (max-width: 1024px) {
        column-gap: 1rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
    }
`;
