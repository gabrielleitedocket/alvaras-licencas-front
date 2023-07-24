import { useSession } from "@/contexts/SessionContext";
import { del, get, put } from "@/services/api";

export default function useInboxDataEndpoints() {
    // TODO - Adicionar o clienteUrl nos endpoints
    const { clientSessionData } = useSession();

    return {
        getMessages: () => get(`/mensagens`),
        putMarkMessageAsReady: (messageId: number, data: object) => put(`/mensagens/${messageId}`, data),
        deleteMessage: (messageId: number) => del(`/mensagens/${messageId}`)
    }
}