import { BaseDashboard } from "../@shared/components/BaseDashboard";
import { Header } from "../@shared/components/Header";

export default function DashboardRockstar() {
    return (
        <>
            <BaseDashboard selected={1}>
                <Header title="Gerador de contas rockstar" button={{ children: 'Gerar conta' }} />
            </BaseDashboard>
        </>
    )
}