import styled from 'styled-components';

export const LayoutContainer = styled.div`
    .container {
        width: 100%;
        max-width: 70rem;
        margin-right: auto;
        margin-left: auto;

        @media (max-width: 1145px) {
            padding-inline: 1rem;
        }
    }
`;
