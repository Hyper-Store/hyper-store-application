import { ButtonProps } from "../../../../../components/Form/Button"
import { ButtonStyled, Description, HeaderStyled, HeaderTop, Title } from "./styles"

type HeaderProps = {
    title: string,
    description?: string,
    button?: ButtonProps
}

export const Header = ({ title, description, button }: HeaderProps) => {
    return (
        <HeaderStyled>
            <HeaderTop>
                <Title>{title}</Title>
                {button && (<ButtonStyled {...button} />)}
            </HeaderTop>
            <Description>{description}</Description>
        </HeaderStyled>
    )
}