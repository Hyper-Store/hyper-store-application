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
    font-family: 'Winter Solstice';
    font-size: 4rem;
    line-height: 3.5rem;
    margin-bottom: 0px;
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