'use client';

import Card from "@/components/data-display/Card";
import Loading from "@/components/data-display/Loading";
import Link from "next/link";
import { ListContainer, MaturitiesListStyle } from "./styles";
import { useEffect, useState } from "react";
import Image from "next/image";
import IconCalendar from '@/../public/images/icons/ico-calendar.svg';
import useDashboardDataEndpoints from "@/services/api/client/dashboard-data";

interface INextMaturity {
    dataFormatada: string;
    nomeLicenca: string;
    nomeUnidade: string;
}

export default function NextMaturitiesListBox() {
    const { getNextMaturities } = useDashboardDataEndpoints();

    const [isLoadingData, setLoadingData] = useState(false);
    const [nextMaturities, setNextMaturities] = useState([] as INextMaturity[]);

    useEffect(() => {
        getNextMaturitiesData();
    }, []);

    /**
     * Realiza a requisição para obter dados dos próximos vencimentos.
     */
    async function getNextMaturitiesData() {
        setLoadingData(true);

        const response = await getNextMaturities();
        
        if(response)
            setNextMaturities(response);

        setLoadingData(false);
    }

    /**
     * Renderiza um componente de acordo com algumas condições:
     * - Se a requisição está em andamento, renderiza o componente de loading;
     * - Se a requisição terminou e a lista está preenchida, renderiza a lista de itens;
     * - Se a requisição terminou e a lista está vazia, renderiza um empty space.
     * @returns { ReactComponentElement }
     */
    function renderNextMaturitiesList() {
        if(isLoadingData)
            return (<Loading />);

        return (
            <MaturitiesListStyle>
                {
                    nextMaturities.map((item, index) => (
                        <a key={index} href="#">
                            <li>
                                <Image src={IconCalendar} alt="Calendário" />

                                <div>
                                    <h6>{ item.dataFormatada }</h6>
                                    <p>{ item.nomeLicenca }</p>
                                    <p>{ item.nomeUnidade }</p>
                                </div>
                            </li>
                        </a>
                    ))
                }
            </MaturitiesListStyle>
        );
    }

    return (
        <ListContainer>
            <Card
                title="Próximos vencimentos"
                footer={
                    <Link href="#">Ver todos</Link>
                }
            >
                {renderNextMaturitiesList()}
            </Card>
        </ListContainer>
    );
}