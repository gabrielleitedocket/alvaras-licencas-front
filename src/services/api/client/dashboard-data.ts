import { useSession } from "@/contexts/SessionContext";
import { get } from "@/services/api";

export default function useDashboardDataEndpoints() {
    // TODO - Adicionar o clienteUrl nos endpoints
    const { clientSessionData } = useSession();

    return {
        getLicenseStatus: () => get(`/status-licencas`),
        getNextMaturities: () => get(`/proximos-vencimentos`),
        getPendingInfos: () => get(`/infos-pendentes`)
    }
}