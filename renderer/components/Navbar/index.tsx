import { NavBarButtonStyled, NavBarLeftStyled, NavBarLogoStyled, NavBarRightStyled, NavBarStyled } from "./styles"

export const NavBar = () => {

    const handleMinimize = async () => {
        // window.Main.minimize()
    };

    const handleClose = () => {
        // window.Main.close()
    }

    return (
        <NavBarStyled>
            <NavBarLeftStyled>
                <NavBarLogoStyled>H</NavBarLogoStyled>
                {/* <NavBarLogoStyled src={logo} width={1080} height={1080} alt="Hyper Store" /> */}
            </NavBarLeftStyled>
            <NavBarRightStyled>
                <NavBarButtonStyled onClick={handleMinimize}>-</NavBarButtonStyled>
                <NavBarButtonStyled onClick={handleClose}>X</NavBarButtonStyled>
            </NavBarRightStyled>
        </NavBarStyled>
    )
}