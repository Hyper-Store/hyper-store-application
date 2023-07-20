import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { HaveSubscription } from "./components/HaveSubscription";

export default function DashboardMain() {
    return (
        <>
            <BaseDashboard selected={0}>
                {/* <NotHaveSubscription /> */}
                <HaveSubscription />
            </BaseDashboard>
        </>
    )
}