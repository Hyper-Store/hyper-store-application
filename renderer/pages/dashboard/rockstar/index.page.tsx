import { useContext, useState } from "react";
import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Header } from "../@shared/components/Header";
import { ConfirmDialog } from "../@shared/components/ConfirmDialog";
import { GenerateAccount } from "../@shared/components/GenerateAccount";
import { EventProviderContext } from "../../../context/EventProvider.context";

export default function DashboardRockstar() {

    const [show, setShow] = useState(false);
    const { events } = useContext(EventProviderContext)

    return (
        <>
            <BaseDashboard selected={1}>
                <Header title="Gerador de contas rockstar" button={{ children: 'Gerar conta', onClick: () => { setShow(true) } }} />
                <ConfirmDialog show={show}
                    type="confirm"
                    title="Gerar conta rockstar"
                    description={<>Você realmente deseja <b>gerar uma nova</b>, isto pode reduzir a quantidade de contas disponíveis para gerar hoje!</>}
                    onClose={() => { setShow(false) }}
                    onSubmit={() => { events.emit('generateAccount') }}
                />

                <GenerateAccount service="rockstar" />
            </BaseDashboard>
        </>
    )
}