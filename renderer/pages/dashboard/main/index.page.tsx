import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Layout } from "./components/Layout";

export default function DashboardMain() {

    return (
        <>
            <BaseDashboard selected={0}>
                <Layout />
            </BaseDashboard>
        </>
    )
}