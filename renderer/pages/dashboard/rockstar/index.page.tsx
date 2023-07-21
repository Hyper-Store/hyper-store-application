import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Layout } from "./layout";

export default function DashboardRockstar() {
    return (
        <>
            <BaseDashboard selected={1}>
                <Layout />
            </BaseDashboard>
        </>
    )
}