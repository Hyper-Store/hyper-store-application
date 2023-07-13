import { styled } from "styled-components";

export const InputButtonGroupStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    input {
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    button {
        width: auto;
        height: 100%;
        border: 2px solid ${props => props.theme.colors.primary};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`