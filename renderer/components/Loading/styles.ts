import styled from "styled-components";

export const LoadingStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: calc( 100vh - 130px);
    font-family: 'Russo One';
    font-size: 1.1rem;
    font-weight: 500;
`

export const SpinnerStyled = styled.span`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.primary};
    border-top-color: #555;
    animation: spin 1s infinite linear;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`