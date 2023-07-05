'use client';

import Card from "@/components/data-display/Card";
import Loading from "@/components/data-display/Loading";
import Link from "next/link";
import {
    PendingInfosBoxStyle,
    Column
} from './styles';

export default function PendingInfosBox() {
    return (
        <Card>
            <PendingInfosBoxStyle>
                <Column borderRight>
                    <h4>CNPJs pendentes</h4>
                    <Loading />
                    <Link href="#">Mostrar</Link>
                </Column>
                <Column>
                    <h4>Acessórios pendentes</h4>
                    <Loading />
                    <Link href="#">Mostrar</Link>
                </Column>
            </PendingInfosBoxStyle>
        </Card>
    );
}