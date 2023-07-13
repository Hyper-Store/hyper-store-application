import { DescriptionStyled } from "./styles"
import { ReactNode } from 'react';

type DescriptionProps = {
    children: ReactNode
}

export const Description = ({ children }: DescriptionProps) => {
    return (
        <DescriptionStyled children={children} />
    )
}