import { useContext, useEffect, useState } from "react";
import { BaseDashboard } from "../../@shared/components/BaseDashboard"
import { SignatureType } from "../../main/types/Signature.type";
import { EventProviderContext } from "../../../../context/EventProvider.context";
import { SignaturesProviderContext } from "../../@shared/context/Signatures.contex";
import { ValidateService } from "../../@shared/components/ValidateService";
import { Header } from "../../@shared/components/Header";
import { ConfirmDialog } from "../../@shared/components/ConfirmDialog";
import { GenerateAccount } from "../../@shared/components/GenerateAccount";
import { AccountsHistory } from "../../@shared/components/AccountsHistory";
import { SiFivem } from "react-icons/si";
import { Section } from "../../@shared/components/Section";

export const Layout = () => {
    const [show, setShow] = useState(false);
    const [signature, setSignature] = useState<SignatureType>();
    const { events } = useContext(EventProviderContext)
    const { signatures, loading } = useContext(SignaturesProviderContext)

    useEffect(() => {
        if (signatures) {
            setSignature(signatures.find(s => s.service.name === "Rockstar"))
        }

        return () => { }
    }, [signatures])


    return (
        <>
            <ValidateService service="Rockstar" />
            <ConfirmDialog show={show}
                type="confirm"
                title="Gerar conta rockstar"
                description={<>Você realmente deseja <b>gerar uma nova</b>, isto pode reduzir a quantidade de contas disponíveis para gerar hoje!</>}
                onClose={() => { setShow(false) }}
                onSubmit={() => { events.emit('generateAccount') }}
            />

            {signature && (<GenerateAccount signatureId={signature?.id} service={signature?.service.name} />)}


            <Section>
                <Header title="Gerador de contas rockstar" button={{ children: 'Gerar conta', disabled: loading, onClick: () => { setShow(true) } }} />
            </Section>
            <Section>
                <Header title="Histórico de contas geradas" />
                <AccountsHistory icon={<SiFivem />} accounts={[
                    {
                        value: 'contatodanielsilvaoficial@gmail.com',
                        dateTimeRedeemed: new Date()
                    },
                    {
                        value: 'contatodanielsilvaoficial@gmail.com',
                        dateTimeRedeemed: new Date()
                    },
                    {
                        value: 'contatodanielsilvaoficial@gmail.com',
                        dateTimeRedeemed: new Date()
                    },
                    {
                        value: 'contatodanielsilvaoficial@gmail.com',
                        dateTimeRedeemed: new Date()
                    },
                    {
                        value: 'contatodanielsilvaoficial@gmail.com',
                        dateTimeRedeemed: new Date()
                    }
                ]} />
            </Section>
        </>
    )
}