import { SiValorant, SiFivem, SiTraefikproxy, SiHomeadvisor } from "react-icons/si"
import { IoSettingsSharp } from 'react-icons/io5';
import { ReactNode } from 'react';
import { SideBarItemStyled, SideBarListStyled, SideBarStyled } from "./styles"
import { Tooltip } from "../../../../../components/Tooltip";
import { useRouter } from "next/router";

export type SideBarItems = {
    icon: ReactNode,
    title: string,
    selected: boolean,
    redirectURL: string
    disabled: boolean,
}

export type SideBarProps = {
    selected: number
}

export const SideBar = (props: SideBarProps) => {

    const { push } = useRouter();

    const items: SideBarItems[] = [
        {
            icon: <SiHomeadvisor />,
            title: 'Início',
            selected: false,
            redirectURL: '/dashboard/main',
            disabled: false
        },
        {
            icon: <SiFivem />,
            title: 'Rockstar (FIVEM)',
            selected: false,
            redirectURL: '/dashboard/rockstar',
            disabled: false
        },
        {
            icon: <SiValorant />,
            title: 'Gerador valorant',
            selected: false,
            redirectURL: '/auth/login',
            disabled: true
        },
        {
            icon: <SiTraefikproxy />,
            title: 'Gerador proxy',
            selected: false,
            redirectURL: '/auth/login',
            disabled: true
        },
        {
            icon: <IoSettingsSharp />,
            title: 'Configurações',
            selected: false,
            redirectURL: '/dashboard/settings',
            disabled: false
        }
    ]

    items[props.selected].selected = true;

    return (
        <SideBarStyled>
            <SideBarListStyled>
                <Tooltip id="no-have-access" />
                {items.map((item, index) => (
                    <SideBarItemStyled onClick={() => { !item.disabled && push(item.redirectURL) }} {...item} key={index} {...(item.disabled && { 'data-tooltip-id': 'no-have-access', 'data-tooltip-content': `❌ Sem acesso ao ${item.title}` })}>
                        {item.icon}
                        {item.title}
                    </SideBarItemStyled>
                ))}
            </SideBarListStyled>
        </SideBarStyled>
    )
}