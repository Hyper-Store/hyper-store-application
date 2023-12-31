import { useState } from "react";
import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Layout } from "./layout";
import { SignatureType } from "../main/types/Signature.type";
import { AccountsHistoryProvider } from "../@shared/context/GetAccountsHistory";
import { GetTodayAvaibleAccountProvider } from "../@shared/context/GetTodayAvaibleAccount";

export default function DashboardRockstar() {
    const [signature, setSignature] = useState<SignatureType>();

    return (
        <>
            <BaseDashboard selected={1}>
                <AccountsHistoryProvider signatureId={signature?.id}>
                    <GetTodayAvaibleAccountProvider signatureId={signature?.id}>
                        <Layout signature={signature} setSignature={setSignature} />
                    </GetTodayAvaibleAccountProvider>
                </AccountsHistoryProvider>
            </BaseDashboard>
        </>
    )
}