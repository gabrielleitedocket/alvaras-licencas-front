'use client';

import Card from "@/components/data-display/Card";
import Loading from "@/components/data-display/Loading";
import Link from "next/link";
import { ListContainer } from "./styles";

export default function NextMaturitiesListBox() {
    return (
        <ListContainer>
            <Card
                title="Próximos vencimentos"
                footer={
                    <Link href="#">Ver todos</Link>
                }
            >
                <Loading />
            </Card>
        </ListContainer>
    );
}