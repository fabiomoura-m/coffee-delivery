import styled from 'styled-components';

export const CompleteOrderContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 15rem;

    @media (max-width: 1024px) {
        gap: 1rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 426px) {
        margin-bottom: 3rem;
    }
`;

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px;
    padding: 2.5rem;

    @media (max-width: 1024px) {
        padding: 1.5rem;
    }
`;
