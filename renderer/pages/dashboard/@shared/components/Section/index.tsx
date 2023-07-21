import { ReactNode } from 'react';
import { SectionStyled } from './styles';

type Props = {
    children: ReactNode
}

export const Section = (props: Props) => {
    return (
        <SectionStyled {...props} />
    )
}