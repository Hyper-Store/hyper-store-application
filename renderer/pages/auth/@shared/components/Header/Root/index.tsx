import { ReactNode } from 'react';
import { RootStyled } from './styles';

type RootProps = {
    children: ReactNode
}

export const Root = ({ children }: RootProps) => {
    return (
        <RootStyled children={children} />
    )
}