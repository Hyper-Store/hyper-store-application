import { styled } from "styled-components";
import { Button } from "../../../../../components/Form/Button";

export const HeaderStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
`

export const Title = styled.p`
    color: ${props => props.theme.texts.title};
    font-weight: 600;
    margin: 0;
`

export const ButtonStyled = styled(Button)`
    width: auto;
    padding: 7px 20px;
`