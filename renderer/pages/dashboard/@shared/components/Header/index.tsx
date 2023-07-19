import { ButtonProps } from "../../../../../components/Form/Button"
import { ButtonStyled, HeaderStyled, Title } from "./styles"

type HeaderProps = {
    title: string,
    button?: ButtonProps
}

export const Header = ({ title, button }: HeaderProps) => {
    return (
        <HeaderStyled>
            <Title>{title}</Title>
            {button && (<ButtonStyled {...button} />)}
        </HeaderStyled>
    )
}