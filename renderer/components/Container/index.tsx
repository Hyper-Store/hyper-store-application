import { ContainerStyled } from "./styles"
import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerStyled children={children} style={{ maxWidth: '95% !important', width: '100% !important' }} />
    )
}