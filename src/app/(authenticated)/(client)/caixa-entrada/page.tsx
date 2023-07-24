'use client';

import { PageHeader } from "@/components/layout/client/PageHeader";
import { InboxContainerStyle } from "./page.styled";
import MessageList from "./(MessageList)";

export default function CaixaEntradaPage() {
    return (
        <>
            <PageHeader title="Entrada" />

            <InboxContainerStyle>
                <MessageList />
            </InboxContainerStyle>
        </>
    );
}