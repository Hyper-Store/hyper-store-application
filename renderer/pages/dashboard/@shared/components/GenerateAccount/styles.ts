import { css, styled } from "styled-components";
import { Spinner } from "react-bootstrap"

export const SpinnerStyled = styled(Spinner)`
    width: 30px;
    height: 30px;
    border-width: 2.5px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 10px;
`

export const Icon = styled.div < { type: "success" | "error" } > `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    svg {
        width: 35px;
        height: 35px;
    }

    ${props => props.type === "success" && css`
        color: ${props => props.theme.colors.green};
    `}

    ${props => props.type === "error" && css`
        color: ${props => props.theme.colors.red};
    `}
`

export const Title = styled.p`
    font-family: 'Kanit';
    font-weight: 500;
    color: ${props => props.theme.texts.title};
    margin-bottom: 0;
`

export const Description = styled.p`
    font-size: 0.85rem;
    font-family: 'Kanit';
    color: ${props => props.theme.texts.description};
`