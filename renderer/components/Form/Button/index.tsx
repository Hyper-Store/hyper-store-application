import { ButtonHTMLAttributes } from "react"
import { ButtonStyled, ButtonSpinnerStyled } from "./styles"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonStyled {...props} disabled={props.isLoading}>
            {props.isLoading && (<ButtonSpinnerStyled />)}
            {props.children}
        </ButtonStyled>
    )
}