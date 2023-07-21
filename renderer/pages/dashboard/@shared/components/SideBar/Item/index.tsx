import { ReactNode } from "react"
import { SideBarItemStyled } from "./styles"
import { useRouter } from "next/router"

export type SideBarItemProps = {
    id: string,
    icon: ReactNode,
    title: string,
    selected: boolean,
    redirectURL: string
    disabled: boolean,
}

export const SideBarItem = (props: SideBarItemProps) => {

    const { push } = useRouter();

    return (
        <SideBarItemStyled key={props.id} disabled={props.disabled} selected={props.selected} onClick={() => { !props.disabled && push(props.redirectURL) }} {...(props.disabled && { 'data-tooltip-id': 'no-have-access', 'data-tooltip-content': `❌ Sem acesso ao ${props.title}` })}>
            {props.icon}
            {props.title}
        </SideBarItemStyled>
    )
}