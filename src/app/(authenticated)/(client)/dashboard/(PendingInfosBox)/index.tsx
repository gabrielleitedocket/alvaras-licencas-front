'use client';

import Card from "@/components/data-display/Card";
import Loading from "@/components/data-display/Loading";
import Link from "next/link";
import {
    PendingInfosBoxStyle,
    Column
} from './styles';
import { useEffect, useState } from "react";
import { get } from "@/services/api";
import useDashboardDataEndpoints from "@/services/api/client/dashboard-data";


export default function PendingInfosBox() {
    const { getPendingInfos } = useDashboardDataEndpoints();

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [pendingCnpjs, setPendingCnpjs] = useState(0);
    const [pendingAccessories, setPendingAccessories] = useState(0);

    useEffect(() => {
        getPendingInfosData();
    }, []);

    /**
     * Realiza a requisição para obter dados de informações pendentes
     */
    async function getPendingInfosData() {
        setIsLoadingData(true);

        const response = await getPendingInfos();

        if(response) {
            const { cnpjsPendentes, acessoriosPendentes } = response;
            setPendingCnpjs(cnpjsPendentes);
            setPendingAccessories(acessoriosPendentes);
        }

        setIsLoadingData(false);
    }

    /**
     * Renderiza um componente de acordo com algumas condições:
     * - Se a requisição está em andamento, renderiza o componente de loading;
     * - Se a requisição terminou, renderiza a quantidade de CNPJ's pendentes.
     * @returns { ReactComponentElement }
     */
    function renderPendingCnpjs() {
        if(isLoadingData)
            return (<Loading />);

        return (
            <span>{ pendingCnpjs }</span>
        );
    }

    /**
     * Renderiza um componente de acordo com algumas condições:
     * - Se a requisição está em andamento, renderiza o componente de loading;
     * - Se a requisição terminou, renderiza a quantidade de acessórios pendentes.
     * @returns { ReactComponentElement }
     */
    function renderPendingAccessories() {
        if(isLoadingData)
            return (<Loading />);

        return (
            <span>{ pendingAccessories }</span>
        );
    }

    return (
        <Card>
            <PendingInfosBoxStyle>
                <Column borderright="true">
                    <h4>CNPJs pendentes</h4>
                    {renderPendingCnpjs()}
                    <Link href="#">Mostrar</Link>
                </Column>
                <Column>
                    <h4>Acessórios pendentes</h4>
                    {renderPendingAccessories()}
                    <Link href="#">Mostrar</Link>
                </Column>
            </PendingInfosBoxStyle>
        </Card>
    );
}