import styled from "styled-components";

export const NavBarStyled = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-app-region: drag;
`

export const NavBarLeftStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    `

export const NavBarLogoStyled = styled.p`
    color: ${props => props.theme.colors.primary};
    font-family: 'Russo One';
    font-size: 1rem;
    line-height: 3.5rem;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    span {
        font-weight: 500;
        color: ${props => props.theme.texts.title};
    }
`

export const BadgeStyled = styled.span`
    color: ${props => props.theme.colors.primary} !important;
    padding: 3px;
    border: 1px solid ${props => props.theme.colors.primary};
    font-size: 0.5rem;
    border-radius: ${props => props.theme.border_raidus};
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavBarRightStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
`

export const NavBarButtonStyled = styled.button`
    width: 40px;
    height: 40px;
    border-radius: ${props => props.theme.border_raidus};
    background: ${props => props.theme.backgrounds.bgSecondary};
    color: ${props => props.theme.texts.subtitle};
    border: 1px solid ${props => props.theme.borders.primary.color};
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    -webkit-app-region: no-drag;
    transition: 0.5s ease;

    &:hover {
        background-color: ${props => props.theme.backgrounds.bgDark};
    }
`