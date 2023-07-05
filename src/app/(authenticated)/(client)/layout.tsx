'use client';

import { ReactNode } from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import Sidenav from "@/components/layout/client/Sidenav";
import WrapContent from "@/components/layout/client/WrapContent";
import Header from "@/components/layout/client/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <GlobalStyle />
            <Sidenav />
            <WrapContent>
                <Header />
                { children }
            </WrapContent>
        </>
    );
}