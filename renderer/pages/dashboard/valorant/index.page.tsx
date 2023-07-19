import { useContext, useState } from "react";
import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Header } from "../@shared/components/Header";
import { ConfirmDialog } from "../@shared/components/ConfirmDialog";
import { GenerateAccount } from "../@shared/components/GenerateAccount";
import { EventProviderContext } from "../../../context/EventProvider.context";

export default function DashboardValorant() {

    const [show, setShow] = useState(false);
    const { events } = useContext(EventProviderContext)

    return (
        <>
            <BaseDashboard selected={2}>
                <Header title="Gerador de contas valorant" button={{ children: 'Gerar conta', onClick: () => { setShow(true) } }} />
                <ConfirmDialog show={show}
                    type="confirm"
                    title="Gerar conta valorant"
                    description={<>Você realmente deseja <b>gerar uma nova</b>, isto pode reduzir a quantidade de contas disponíveis para gerar hoje!</>}
                    onClose={() => { setShow(false) }}
                    onSubmit={() => { events.emit('generateAccount') }}
                />

                <GenerateAccount service="valorant" />
            </BaseDashboard>
        </>
    )
}