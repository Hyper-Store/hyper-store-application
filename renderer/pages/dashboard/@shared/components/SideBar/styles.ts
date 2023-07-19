import { styled } from "styled-components";

export const SideBarStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const SideBarListStyled = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
`


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