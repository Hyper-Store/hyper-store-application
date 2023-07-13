import { ReactNode } from "react"
import { SectionStyled } from "./styles"
import { Container } from "../../../../components/Container"

type SectionProps = {
    children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
    return (
        <SectionStyled children={children} />
    )
}