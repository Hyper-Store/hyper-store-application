import { FormHTMLAttributes } from 'react';
import { RootStyled } from './styles';

type RootProps = FormHTMLAttributes<HTMLFormElement>

export const Root = (props: RootProps) => {
    return (
        <RootStyled {...props} />
    )
}