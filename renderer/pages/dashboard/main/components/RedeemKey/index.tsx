import { BiSend } from "react-icons/bi"
import { Form } from "../../../../../components/Form";
import { useForm } from "react-hook-form";
import { KeyValidator } from "./validators";
import { useContext } from "react";
import { EventProviderContext } from "../../../../../context/EventProvider.context";
import { useRouter } from "next/router";
import { RedeemKeyService } from "./services/redeemkey.service";
import { ModalDialogProps } from "../../../@shared/components/ModalDialog";
import toast from "react-hot-toast";

export const RedeemKey = () => {

    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();
    const { events } = useContext(EventProviderContext);
    const { push } = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        try {
            const request = await RedeemKeyService(data);

            if (request.data.error.name === "KeyNotFoundError") {
                events.emit('showModalDialog', {
                    type: 'error',
                    title: 'Key não encontrada',
                    description: <>Esta key não existe ou não está mais disponível para o uso!</>
                } as ModalDialogProps)
            }

            if (request.data.error.name === "KeyNotActivatedError") {
                events.emit('showModalDialog', {
                    type: 'error',
                    title: 'Key desativada',
                    description: <>Esta já foi resgatada por algum outro usuário, ou desativada pela administração!</>
                } as ModalDialogProps)
            }

            if (request.data.error.name === "SignatureAlreadyActiveError") {
                events.emit('showModalDialog', {
                    type: 'error',
                    title: 'Houve um erro ao resgatar',
                    description: <>Ao tentar resgatar key indentificamos que você já possui uma assinatura com o mesmo serviço desta key, por isto não é possível resgatar novamente!</>
                } as ModalDialogProps)
            }
        } catch (error) {
            toast.error(`Houve um erro no sevidor, tente novamente mais tarde! Codigo de erro: ${error.message}`)
        }
    });


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