import { ModalDialogProps } from "../../../../@shared/components/ModalDialog";
import EventEmitter from "events";

type Props = {
    events: EventEmitter,
    data: any
}

export const RedemeedKey = ({ events, data }: Props) => {

    const description = () => {
        return (<>
            <div style={{ textAlign: 'left' }}>
                <b>Serviço resgatado:</b> <code>{data.serviceName}</code>
                <br />
                <b>Expira em:</b> <code>{data.daysAdded} dias ({new Date(data.expirationDate).toLocaleString()})</code>
            </div>
        </>)
    }

    events.emit('showModalDialog', {
        type: 'success',
        title: 'Key resgatada com sucesso',
        description: description()
    } as ModalDialogProps)

    return (<></>);
}