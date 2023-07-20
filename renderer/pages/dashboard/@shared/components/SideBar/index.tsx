import { SiValorant, SiFivem, SiTraefikproxy, SiHomeadvisor } from "react-icons/si"
import { IoSettingsSharp } from 'react-icons/io5';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { SideBarItemStyled, SideBarListStyled, SideBarStyled } from "./styles"
import { Tooltip } from "../../../../../components/Tooltip";
import { useRouter } from "next/router";
import { SocketWSProviderContext } from "../../context/SocketWS.context";
import { SignatureType } from "../../../main/types/Signature.type";
import { WSBinaryConverter } from "../../../../../utils/ws-binary-converter";

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

    const [signatures, setSignatures] = useState<SignatureType[]>([]);
    const { socket } = useContext(SocketWSProviderContext);
    const [items, setItems] = useState<SideBarItems[]>([
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
            disabled: true
        },
        {
            icon: <SiValorant />,
            title: 'Gerador valorant',
            selected: false,
            redirectURL: '/dashboard/valorant',
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
    );

    useEffect(() => {
        if (!socket) return () => { };
        socket.on('activated-signatures', ListenerSignaturesChanges);
        socket.emit('retrieve-activated-signatures')

        return () => {
            socket.off('activated-signatures');
        };
    }, [socket]);

    const ListenerSignaturesChanges = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        setSignatures(data);
        setItems(getAllItems());
    }

    const getAllItems = () => {
        items[props.selected].selected = true
        if (signatures.find(s2 => s2.service.name === "Rockstar")) items[1].disabled = false
        if (signatures.find(s2 => s2.service.name === "Valorant")) items[2].disabled = false

        setItems(items)
        return items;
    }


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