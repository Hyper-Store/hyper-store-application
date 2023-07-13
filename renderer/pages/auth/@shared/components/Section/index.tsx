import { ReactNode } from "react"
import { SectionStyled } from "./styles"

type SectionProps = {
    children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
    return (
        <SectionStyled children={children} />
    )
}