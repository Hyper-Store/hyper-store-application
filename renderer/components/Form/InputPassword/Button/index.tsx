import { InputPasswordButtonStyled } from "./styles"
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const InputPasswordButton = (props: Props) => {

    return (
        <InputPasswordButtonStyled {...props} type="button">{props.children}</InputPasswordButtonStyled>
    )
}