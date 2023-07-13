import { LinkStyled } from "./styles"
import { LinkProps as LinkPropsNext } from "next/link"
import { ReactNode } from 'react';

type LinkProps = LinkPropsNext & {
    children: ReactNode
}

export const Link = (props: LinkProps) => {
    return (
        <LinkStyled {...props} />
    )
}