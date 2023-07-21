import { HTMLAttributes, ReactNode } from 'react';
import { SectionStyled } from './styles';

type Props = HTMLAttributes<HTMLElement> & {
    children: ReactNode
}

export const Section = (props: Props) => {
    return (
        <SectionStyled {...props} />
    )
}