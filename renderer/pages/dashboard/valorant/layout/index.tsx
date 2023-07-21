import { useContext, useEffect, useState } from "react";
import { EventProviderContext } from "../../../../context/EventProvider.context";
import { SignaturesProviderContext } from "../../@shared/context/Signatures.contex";
import { ValidateService } from "../../@shared/components/ValidateService";
import { Header } from "../../@shared/components/Header";
import { ConfirmDialog } from "../../@shared/components/ConfirmDialog";
import { GenerateAccount } from "../../@shared/components/GenerateAccount";
import { SignatureType } from "../../main/types/Signature.type";

export const Layout = () => {

    const [show, setShow] = useState(false);
    const [signature, setSignature] = useState<SignatureType>();
    const { events } = useContext(EventProviderContext)
    const { signatures, loading } = useContext(SignaturesProviderContext)

    useEffect(() => {
        if (signatures) {
            setSignature(signatures.find(s => s.service.name === "Valorant"))
        }

        return () => { }
    }, [signatures])


    return (
        <>
            <ValidateService service="Valorant" />
            <Header title="Gerador de contas valorant" button={{ children: 'Gerar conta', disabled: loading, onClick: () => { setShow(true) } }} />
            <ConfirmDialog show={show}
                type="confirm"
                title="Gerar conta valorant"
                description={<>Você realmente deseja <b>gerar uma nova</b>, isto pode reduzir a quantidade de contas disponíveis para gerar hoje!</>}
                onClose={() => { setShow(false) }}
                onSubmit={() => { events.emit('generateAccount') }}
            />

            {signature && (<GenerateAccount signatureId={signature?.id} service={signature?.service.name} />)}
        </>
    )
}