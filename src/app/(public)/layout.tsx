'use client';

import LoginWrapContent from "@/components/layout/public/LoginWrapContent";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <GlobalStyle />
            <LoginWrapContent>
                { children }
            </LoginWrapContent>
        </>
    );
}