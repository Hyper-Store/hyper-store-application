import { styled } from "styled-components"

type SideBarItemStyledProps = {
    selected: boolean,
    disabled: boolean
}

export const SideBarItemStyled = styled.li<SideBarItemStyledProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 11px 5px; 
    background: ${props => props.theme.backgrounds.bgSecondary};
    border-radius: ${props => props.theme.border_raidus};
    border-left: 2px solid transparent;
    font-family: 'Russo One';
    font-size: 0.8rem;
    color: ${props => props.theme.texts.description};
    cursor: pointer;

    svg {
        font-size: 1rem;
        margin: 0 10px;
    }

    ${props => props.selected && `
        border-color: ${props.theme.colors.primary};

        svg {
            color: ${props.theme.colors.primary};
        }
    `}

    ${props => props.disabled && `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`