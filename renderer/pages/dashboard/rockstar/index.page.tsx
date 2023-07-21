import { useContext, useEffect, useState } from "react";
import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Header } from "../@shared/components/Header";
import { ConfirmDialog } from "../@shared/components/ConfirmDialog";
import { GenerateAccount } from "../@shared/components/GenerateAccount";
import { EventProviderContext } from "../../../context/EventProvider.context";
import { SignaturesProviderContext } from "../@shared/context/Signatures.contex";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { ValidateService } from "../@shared/components/ValidateService";

export default function DashboardRockstar() {

    const [show, setShow] = useState(false);
    const { events } = useContext(EventProviderContext)
    const { push } = useRouter();
    const { signatures, loading } = useContext(SignaturesProviderContext)

    useEffect(() => {
        if (!loading && signatures && !signatures.find(s => s.service.name === "Rockstar")) {
            push('/dashboard/main');
            toast.error('Você não possui acesso a este serviço!')
        }
    }, [signatures])

    return (
        <>
            <BaseDashboard selected={1}>
                <ValidateService service="Rockstar" />
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