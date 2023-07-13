import { styled } from "styled-components";
import { Input } from "../Input";

export const InputGroupStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    gap: 0.6rem;
    outline: none;
    font-size: 0.85rem;
    border: 1px solid ${props => props.theme.borders.primary.color};
    border-radius: 8px;
    background: ${props => props.theme.backgrounds.bgPrimary};
    color: ${props => props.theme.texts.subtitle};
    transition: box-shadow 0.35s ease;
    margin-bottom: 8px;
`

export const InputGroupLabelStyled = styled.label``
export const InputGroupInputStyled = styled(Input)`
    border: none !important;
    outline: none;
    margin: 0;
`