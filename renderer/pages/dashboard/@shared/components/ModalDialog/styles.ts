import { styled, css } from "styled-components"
import { ModalDialogType } from "."

export const Icon = styled.div < { type: ModalDialogType } > `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    svg {
        width: 35px;
        height: 35px;
        animation: fade-in .3s ease;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: scale(50%);
        }
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