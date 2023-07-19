import { styled } from "styled-components";

export const LabelStyled = styled.label`
    font-family: 'Russo One';
    font-size: 0.7rem;
    font-weight: 500;
    color: ${props => props.theme.texts.description};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.3rem;
    margin-bottom: 2px;
`

export const LabelRequiredStyled = styled.label`
    color: ${props => props.theme.colors.red};
`