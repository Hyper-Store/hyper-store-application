import { TitleStyled } from "./styles"
import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
    return (
        <TitleStyled children={children} />
    )
}