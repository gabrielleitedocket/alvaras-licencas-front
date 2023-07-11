'use client';

import { getAuthData } from "@/services/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IClientSession {
    id: number;
    url: string;
    name: string;
}

interface IUserSession {
    id: number;
    name: string;
    email: string;
    token: string;
}

interface ISessionContext {
    userSessionData: IUserSession;
    clientSessionData: IClientSession;
    loadSessionData: () => object;
}

interface ISessionProvider {
    children?: ReactNode;
}

const SessionContext = createContext((null as unknown) as ISessionContext);

export function getSessionContext() {
    return (SessionContext.Consumer as any)._currentValue;
}

export function useSession() {
    const context = useContext(SessionContext);

    if(!context) throw new Error('useSession must be used inside SessionProvider');

    return context;
}

export function SessionProvider(props: ISessionProvider) {
    const { children } = props;

    const [userSessionData, setUserSessionData] = useState(getAuthData().userData);
    const [clientSessionData, setClientSessionData] = useState(getAuthData().clientData);

    function loadSessionData() {
        const data = getAuthData();
        const { userData, clientData } = data;
        
        setUserSessionData(userData);
        setClientSessionData(clientData);

        return { userData, clientData };
    }

    return (
        <SessionContext.Provider
            value={{
                userSessionData,
                clientSessionData,
                loadSessionData
            }}
        >
            { children }
        </SessionContext.Provider>
    );
}
