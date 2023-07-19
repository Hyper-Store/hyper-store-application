import { styled } from "styled-components";

export const ErrorStyled = styled.span`
    color: ${props => props.theme.colors.red};
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1px;
    margin-bottom: 3px;
`