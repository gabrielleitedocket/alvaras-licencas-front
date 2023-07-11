'use client';

import { ReactNode } from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import Sidenav from "@/components/layout/client/Sidenav";
import WrapContent from "@/components/layout/client/WrapContent";
import Header from "@/components/layout/client/Header";
import { SessionProvider } from "@/contexts/SessionContext";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <GlobalStyle />
            <Sidenav />
            <WrapContent>
                <Header />
                { children }
            </WrapContent>
        </SessionProvider>
    );
}