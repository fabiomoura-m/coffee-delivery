import styled from 'styled-components';

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1 {
        color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 768px) {
            > img {
                max-width: 380px;
            }
        }

        @media (max-width: 426px) {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            > img {
                max-width: 320px;
            }
        }
    }

    @media (max-width: 426px) {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
`;

export const OrderDetailsContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${({ theme }) => theme.colors['base-background']};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: -1px;
        z-index: -1;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }

    @media (max-width: 768px) {
        min-width: 22rem;
    }

    @media (max-width: 426px) {
        min-width: 17rem;
    }
`;
