import { SiValorant, SiFivem, SiTraefikproxy, SiHomeadvisor } from "react-icons/si"
import { IoSettingsSharp } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import { Tooltip } from "../../../../../components/Tooltip";
import { useRouter } from "next/router";
import { SignaturesProviderContext } from "../../context/Signatures.contex";
import { v4 as randomUUID } from "uuid";
import { SideBarItemProps, SideBarItem } from "./Item";
import { SideBarListStyled, SideBarProctedBy, SideBarStyled } from "./styles";
import { BsGoogle } from "react-icons/bs";

export type SideBarProps = {
    selected: number
}

export const SideBar = (props: SideBarProps) => {

    const { push } = useRouter();

    const { signatures, loading } = useContext(SignaturesProviderContext);

    const [items, setItems] = useState<SideBarItemProps[]>([
        {
            id: randomUUID(),
            icon: <SiHomeadvisor />,
            title: 'Início',
            selected: false,
            redirectURL: '/dashboard/main',
            disabled: false
        },
        {
            id: randomUUID(),
            icon: <SiFivem />,
            title: 'Rockstar (FIVEM)',
            selected: false,
            redirectURL: '/dashboard/rockstar',
            disabled: false
        },
        {
            id: randomUUID(),
            icon: <SiValorant />,
            title: 'Gerador valorant',
            selected: false,
            redirectURL: '/dashboard/valorant',
            disabled: false
        },
        {
            id: randomUUID(),
            icon: <SiTraefikproxy />,
            title: 'Gerador proxy',
            selected: false,
            redirectURL: '/auth/login',
            disabled: false
        },
        {
            id: randomUUID(),
            icon: <IoSettingsSharp />,
            title: 'Configurações',
            selected: false,
            redirectURL: '/dashboard/settings',
            disabled: false
        }
    ]
    );


    useEffect(() => {
        let changed = items;
        changed[props.selected].selected = true;

        if (signatures.find(s2 => s2.service.name === "Rockstar")) {
            changed[1].id = randomUUID();
            changed[1].disabled = false;
        }
        if (signatures.find(s2 => s2.service.name === "Valorant")) {
            changed[2].id = randomUUID();
            changed[2].disabled = false
        }

        setItems(changed);

        return () => {
            setItems(changed);
        }
    }, [signatures]);

    return (
        <SideBarStyled>
            <SideBarListStyled>
                <Tooltip id="no-have-access" />
                {items.map((item) => (
                    <SideBarItem {...item} key={item.id} />
                ))}
            </SideBarListStyled>
            <SideBarProctedBy><BsGoogle /> Verificado pelo: <span>DISCORD INC</span></SideBarProctedBy>
        </SideBarStyled>
    )
}