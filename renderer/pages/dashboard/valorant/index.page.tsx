import { useContext, useEffect, useState } from "react";
import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Header } from "../@shared/components/Header";
import { ConfirmDialog } from "../@shared/components/ConfirmDialog";
import { GenerateAccount } from "../@shared/components/GenerateAccount";
import { EventProviderContext } from "../../../context/EventProvider.context";
import { ValidateService } from "../@shared/components/ValidateService";
import { SignaturesProviderContext } from "../@shared/context/Signatures.contex";
import { SignatureType } from "../main/types/Signature.type";

export default function DashboardValorant() {

    const [show, setShow] = useState(false);
    const { events } = useContext(EventProviderContext)
    const { signatures, loading } = useContext(SignaturesProviderContext)
    let signature: SignatureType

    useEffect(() => {
        if (signatures) {
            signature = signatures.find(s => s.service.name === "Valorant");
        }

        return () => { }
    }, [signatures])

    return (
        <>
            <BaseDashboard selected={2}>
                <ValidateService service="Valorant" />
                <Header title="Gerador de contas valorant" button={{ children: 'Gerar conta', disabled: loading, onClick: () => { setShow(true) } }} />
                <ConfirmDialog show={show}
                    type="confirm"
                    title="Gerar conta valorant"
                    description={<>Você realmente deseja <b>gerar uma nova</b>, isto pode reduzir a quantidade de contas disponíveis para gerar hoje!</>}
                    onClose={() => { setShow(false) }}
                    onSubmit={() => { events.emit('generateAccount') }}
                />

                {!loading && (<GenerateAccount signatureId={signature?.id} service={signature?.service.name} />)}
            </BaseDashboard>
        </>
    )
}