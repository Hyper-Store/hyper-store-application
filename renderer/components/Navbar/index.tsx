import { app } from "electron";
import { NavBarButtonStyled, NavBarLeftStyled, NavBarLogoStyled, NavBarRightStyled, NavBarStyled, BadgeStyled } from "./styles"

export const NavBar = () => {

    const handleMinimize = async () => {

    };

    const handleClose = () => {
        window.close()
    }

    return (
        <NavBarStyled>
            <NavBarLeftStyled>
                <NavBarLogoStyled>H <span>yper store</span> <BadgeStyled>PREMIUM</BadgeStyled></NavBarLogoStyled>
                {/* <NavBarLogoStyled src={logo} width={1080} height={1080} alt="Hyper Store" /> */}
            </NavBarLeftStyled>
            <NavBarRightStyled>
                <NavBarButtonStyled onClick={handleMinimize}>-</NavBarButtonStyled>
                <NavBarButtonStyled onClick={handleClose}>X</NavBarButtonStyled>
            </NavBarRightStyled>
        </NavBarStyled>
    )
}