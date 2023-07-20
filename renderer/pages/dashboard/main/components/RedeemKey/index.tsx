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

export const RedeemKey = () => {

    const [loading, setLoading] = useState(false);
    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();
    const { socket } = useContext(SocketWSProviderContext);
    const { events } = useContext(EventProviderContext);

    useEffect(() => {
        socket.on('key-redeemed-success', ListenerRedeemKey);

        return () => {
            socket.off('key-redeemed-succes');
        };
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true);
        RedeemKeyOnSubmit({ events, data, setLoading });
    });

    const ListenerRedeemKey = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        RedemeedKey({ events, data });
        setLoading(false);
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
            <Form.Button>🛒 Comprar agora</Form.Button>
        </>
    )
}