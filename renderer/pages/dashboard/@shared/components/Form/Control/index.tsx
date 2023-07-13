import { FormHTMLAttributes, ReactNode } from "react"
import { ControlStyled } from "./styles"

type ControlProps = {
    children: ReactNode
}

export const Control = (props: ControlProps) => {
    return (
        <ControlStyled {...props} />
    )
}