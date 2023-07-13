import { ButtonProps } from "../Button"
import { InputProps } from "../Input"
import { InputButtonGroupStyled } from "./styles"
import { ReactNode } from 'react';

type InputButtonGroupProps = {
    children: ReactNode
}

export const InputButtonGroup = (props: InputButtonGroupProps) => {
    return (
        <InputButtonGroupStyled {...props} />
    )
}