import { Spinner } from "react-bootstrap";
import { styled } from "styled-components";

export const ButtonStyled = styled.button`
    width: 100%;
    padding: 10px 25px;
    border: none;
    outline: none;
    border-radius: 8px;
    background: ${props => props.theme.buttons.primary.background};
    color: ${props => props.theme.buttons.primary.color};
    font-family: 'AXIS';
    transition: background 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        background: ${props => props.theme.buttons.primary.hover.background};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const ButtonSpinnerStyled = styled(Spinner)`
    width: 15px;
    height: 15px;
    border-width: 2px;
`