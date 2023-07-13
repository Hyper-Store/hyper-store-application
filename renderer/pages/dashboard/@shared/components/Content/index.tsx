import { ContentStyled } from "./styles"
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

export const Content = (props: Props) => {
    return (
        <ContentStyled {...props} />
    )
}