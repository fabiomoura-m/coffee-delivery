import styled from 'styled-components';
import introBackgroundImg from '../../../../assets/intro-background.png';
import { rgba } from 'polished';
import { TitleText } from '../../../../components/Typography';

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    @media (max-width: 768px) {
        gap: 2rem;
        font-size: 2rem;
        > img {
            max-width: 320px;
        }
    }

    @media (max-width: 426px) {
        flex-direction: column;
        gap: 2rem;

        > div section h3 {
            font-size: 1rem;
        }

        > img {
            max-width: 280px;
        }
    }
`;

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 426px) {
        font-size: 1.5rem;
    }
`;

export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 426px) {
        margin-top: 2rem;
        font-size: 0.8rem;
    }
`;
