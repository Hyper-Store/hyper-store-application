import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Layout } from "./layout";

export default function DashboardValorant() {
    return (
        <>
            <BaseDashboard selected={2}>
                <Layout />
            </BaseDashboard>
        </>
    )
}