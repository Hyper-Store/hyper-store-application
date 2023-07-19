import { ReactNode } from "react"
import { InputProps } from "../Input"
import { InputGroupInputStyled, InputGroupLabelStyled, InputGroupStyled } from "./styles"
import { InputPassword } from "../InputPassword"

type InputGroupProps = InputProps & {
    icon: ReactNode
}

export const InputGroup = (props: InputGroupProps) => {
    return (
        <InputGroupStyled>
            <InputGroupLabelStyled htmlFor={props.id}>{props.icon}</InputGroupLabelStyled>
            {props.type !== "password" && (<InputGroupInputStyled {...props} />)}
            {props.type === "password" && (<InputPassword {...props} />)}
        </InputGroupStyled>
    )
}