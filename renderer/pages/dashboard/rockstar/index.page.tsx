import { useState } from "react";
import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Layout } from "./layout";
import { SignatureType } from "../main/types/Signature.type";
import { AccountsHistoryProvider } from "../@shared/context/GetAccountsHistory";

export default function DashboardRockstar() {
    const [signature, setSignature] = useState<SignatureType>();

    return (
        <>
            <BaseDashboard selected={1}>
                <AccountsHistoryProvider signatureId={signature?.id}>
                    <Layout signature={signature} setSignature={setSignature} />
                </AccountsHistoryProvider>
            </BaseDashboard>
        </>
    )
}