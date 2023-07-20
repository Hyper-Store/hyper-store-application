import { RedeemKeyService } from "../services/redeemkey.service";
import { ModalDialogProps } from "../../../../@shared/components/ModalDialog";
import toast from "react-hot-toast";
import EventEmitter from "events";

type Props = {
    events: EventEmitter
    data: any
}

export const RedeemKeyOnSubmit = async ({ events, data }: Props) => {
    try {
        const request = await RedeemKeyService(data);

        if (request.status === 201) return;

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

    return (<></>)
}