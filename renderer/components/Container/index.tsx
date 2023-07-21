import { ReactNode } from 'react';
import { Container as ContainerStyled } from 'react-bootstrap';

type ContainerProps = {
    children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerStyled children={children} style={{ maxWidth: '95% !important', width: '100% !important' }} />
    )
}