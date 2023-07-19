import { styled } from "styled-components";

interface InputPasswordStyledProps {
    focus?: boolean
}

export const InputPasswordStyled = styled.div<InputPasswordStyledProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    transition: box-shadow 0.35s ease;
`