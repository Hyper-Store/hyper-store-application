import { BiSend } from "react-icons/bi"
import { Form } from "../../../../../components/Form";
import { useForm } from "react-hook-form";
import { KeyValidator } from "./validators";
import { useContext, useEffect, useState } from "react";
import { SocketWSProviderContext } from "../../../@shared/context/SocketWS.context";
import { WSBinaryConverter } from "../../../../../utils/ws-binary-converter";
import { RedeemKeyOnSubmit } from "./events/onSubmit.event";
import { RedemeedKey } from "./events/redemeedKey.event";
import { EventProviderContext } from "../../../../../context/EventProvider.context";
import { GetCurrentUserProviderContext } from "../../../@shared/context/GetCurrentUser";

export const RedeemKey = () => {

    const [loading, setLoading] = useState(false);
    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();
    const { socket } = useContext(SocketWSProviderContext);
    const { events } = useContext(EventProviderContext);
    const { accessToken } = useContext(GetCurrentUserProviderContext);

    useEffect(() => {
        if (!socket) return () => { };
        socket.on('key-redeemed-success', ListenerRedeemKey);

        return () => {
            socket.off('key-redeemed-succes');
        };
    }, [socket]);

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true);
        RedeemKeyOnSubmit({ events, data, setLoading, accessToken });
    });

    const ListenerRedeemKey = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        RedemeedKey({ events, data });
        setLoading(false);
    }

    const onClickBuy = () => {
    }

    return (
        <>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.InputButtonGroup>
                        <Form.Input disabled={loading} rules={KeyValidator} type="text" name="key" control={control} placeholder="Insira sua key" />
                        <Form.Button isLoading={loading}><BiSend /></Form.Button>
                    </Form.InputButtonGroup>
                    {errors.key && (<Form.Error>{errors.key.message as string}</Form.Error>)}
                </Form.Control>
            </Form.Root>
            <Form.Button onClick={onClickBuy}>🛒 Comprar agora</Form.Button>
        </>
    )
}