import { useContext, useEffect, useState, ReactNode } from "react";
import { EventProviderContext } from "../../../../../context/EventProvider.context";
import { Modal } from "../Modal";
import { Description, Title, Icon } from "./styles";
import { BsCheckCircle } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

export type ModalDialogType = "success" | "error"

export type ModalDialogProps = {
    type: ModalDialogType,
    title: string,
    description: ReactNode
}

export const ModalDialog = () => {
    const [data, setData] = useState<ModalDialogProps>();
    const [show, setShow] = useState<boolean>(false);

    const { events } = useContext(EventProviderContext)

    useEffect(() => {
        events.on('showModalDialog', handleShowDialog);

        return () => {
            events.off('showModalDialog', handleShowDialog);
        };
    }, []);

    const handleShowDialog = (props: ModalDialogProps) => {
        setData(props);
        setShow(true);
    }

    return (
        <Modal show={show} centered={true} onHide={() => { setShow(false) }}>
            {show && (<>
                <Icon type={data.type}>
                    {data.type === "success" && (<BsCheckCircle />)}
                    {data.type === "error" && (<BiErrorCircle />)}
                </Icon>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
            </>)}
        </Modal>
    )
}