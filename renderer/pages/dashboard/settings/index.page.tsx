import { BaseDashboard } from "../@shared/components/BaseDashboard"
import { Header } from "../@shared/components/Header"

export default function DashboardSettings() {
    return (
        <BaseDashboard selected={4}>
            <Header title="Configurações" />
            Sem configurações importantes para fazer neste momento...
        </BaseDashboard>
    )
}