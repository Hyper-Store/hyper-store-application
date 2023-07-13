import { HTMLAttributes } from "react"
import { ErrorStyled } from "./styles"

type ErrorProps = HTMLAttributes<HTMLMapElement>

export const Error = (props: ErrorProps) => {
    return (
        <ErrorStyled {...props} />
    )
}