import { BiSend } from "react-icons/bi"
import { Form } from "../../../../../components/Form";
import { useForm } from "react-hook-form";
import { KeyValidator } from "./validators";
import { useContext } from "react";
import { EventProviderContext } from "../../../../../context/EventProvider.context";
import { ModalDialogProps } from "../../../@shared/components/ModalDialog";
import { useRouter } from "next/router";

export const RedeemKey = () => {

    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();
    const { events } = useContext(EventProviderContext);

    const onSubmit = handleSubmit(async (data) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve('aq')
                events.emit('showModalDialog', {
                    type: 'success',
                    title: 'Key resgatada com sucesso',
                    description: <>
                        Key resgatada com sucesso e a subscrição já foi entregue a sua conta
                        <div style={{ textAlign: 'left' }}>
                            <b >Serviço resgatado:</b> <code>Rockstar</code>
                            <br />
                            <b>Validade do serviço:</b> <code>7 dias (EXPIRA NO DIA: 20/02/2023)</code>
                            <br />
                            <small>O serviço já está disponível e você pode agora mesmo usa-lo em...</small>
                        </div>
                    </>
                } as ModalDialogProps)
            }, 1500);
        })
    });

    const { push } = useRouter();

    const handleClickBuy = () => {
        window.open('https://discord.com/app');
    }

    return (
        <>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.InputButtonGroup>
                        <Form.Input disabled={isSubmitting} rules={KeyValidator} type="text" name="key" control={control} placeholder="Insira sua key" />
                        <Form.Button isLoading={isSubmitting}><BiSend /></Form.Button>
                    </Form.InputButtonGroup>
                    {errors.key && (<Form.Error>{errors.key.message as string}</Form.Error>)}
                </Form.Control>
            </Form.Root>
            <Form.Button>🛒 Comprar agora</Form.Button>
        </>
    )
}