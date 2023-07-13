import { ReactNode } from "react"
import { InputProps } from "../Input"
import { InputGroupInputStyled, InputGroupLabelStyled, InputGroupStyled } from "./styles"

type InputGroupProps = InputProps & {
    icon: ReactNode
}

export const InputGroup = (props: InputGroupProps) => {
    return (
        <InputGroupStyled>
            <InputGroupLabelStyled htmlFor={props.id}>{props.icon}</InputGroupLabelStyled>
            <InputGroupInputStyled {...props} />
        </InputGroupStyled>
    )
}