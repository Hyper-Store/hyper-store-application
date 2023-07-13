import { Col, Row } from "react-bootstrap";
import { SideBar } from "../@shared/components/SideBar";
import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { NotHaveSubscription } from "./components/NotHaveSubscription";

export default function DashboardMain() {
    return (
        <>

            <BaseDashboard selected={0}>
                <NotHaveSubscription />
            </BaseDashboard>
        </>
    )
}