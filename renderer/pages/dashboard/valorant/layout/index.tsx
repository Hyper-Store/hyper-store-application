import { useContext, useEffect, useState } from "react";
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
import { AccountsHistoryProviderContext } from "../../@shared/context/GetAccountsHistory";
import { GetTodayAvaibleAccountProviderContext } from "../../@shared/context/GetTodayAvaibleAccount";

type Props = {
    signature: SignatureType,
    setSignature: (signature: SignatureType) => void
}

export const Layout = ({ signature, setSignature }: Props) => {
    const [show, setShow] = useState(false);
    const { events } = useContext(EventProviderContext)
    const { signatures } = useContext(SignaturesProviderContext)
    const { accounts } = useContext(AccountsHistoryProviderContext);
    const { accountsAvaible, loading } = useContext(GetTodayAvaibleAccountProviderContext)

    useEffect(() => {
        if (signatures) {
            setSignature(signatures.find(s => s.service.name === "Valorant"))
        }

        return () => { }
    }, [signatures])

    return (
        <>
            <ValidateService service="Valorant" />
            <ConfirmDialog show={show}
                type="confirm"
                title="Gerar conta valorant"
                description={<>Você realmente deseja <b>gerar uma nova</b>, isto pode reduzir a quantidade de contas disponíveis para gerar hoje!</>}
                onClose={() => { setShow(false) }}
                onSubmit={() => { events.emit('generateAccount') }}
            />

            {signature && (<GenerateAccount signatureId={signature?.id} service={signature?.service.name} />)}
            <Section>
                <Header title="Gerador de contas valorant" description={loading ? "Carregando..." : `Você tem apenas ${accountsAvaible} contas disponível para gerar hoje!`} button={{ children: 'Gerar conta', onClick: () => { setShow(true) } }} />
            </Section>
            <Section>
                <Header title="Histórico de contas geradas" />
                <AccountsHistory icon={<SiFivem />} accounts={accounts} />
            </Section>
        </>
    )
}