import { css, styled } from "styled-components";
import { Modal } from 'react-bootstrap';

export const ConfirmDialogStyled = styled(Modal)`
    div.modal-content {
        background: ${props => props.theme.backgrounds.bgSecondary};
        border: 1px solid ${props => props.theme.borders.primary.color};
        border-radius: ${props => props.theme.border_raidus};
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background: ${props => props.theme.colors.red_50};
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    
    svg {
        width: 27px;
        height: 27px;
        color: ${props => props.theme.colors.orange};
    }
`

export const Title = styled.p`
    color: ${props => props.theme.texts.title};
    font-weight: 600;
    margin-bottom: 0;
`

export const Description = styled.p`
    font-size: 0.85rem;
    font-weight: 500;
    color: ${props => props.theme.texts.description};
`

export const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`

export const Button = styled.button<{ typeColor: "primary" | "danger" }>`
    width: 100%;
    padding: 8px 25px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: 600;
    transition: background .3s ease;

    ${props => props.typeColor === "primary" && css`
        color: ${props.theme.buttons.primaryDark.color};
        background: ${props.theme.buttons.primaryDark.background};

        &:hover {
            background: ${props.theme.buttons.primaryDark.hover.background};
        }
    `}

    ${props => props.typeColor === "danger" && css`
        color: ${props.theme.buttons.danger.color};
        background: ${props.theme.buttons.danger.background};

        &:hover {
            background: ${props.theme.buttons.danger.hover.background};
        }
    `}
`