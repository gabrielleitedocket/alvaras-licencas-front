'use client';

import Card from "@/components/data-display/Card";
import Loading from "@/components/data-display/Loading";
import { LicencesBoxContainer } from "./styles";
import { Chart } from 'react-google-charts';
import { useEffect, useState } from "react";
import useDashboardDataEndpoints from "@/services/api/client/dashboard-data";

interface ILicenseStatus {
    statusNome: string;
    statusQuantidade: number;
    statusCor: string;
}

export default function LicenseStatusChartBox() {
    const { getLicenseStatus } = useDashboardDataEndpoints();

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [chartData, setChartData] = useState([] as any[]);

    useEffect(() => {
        getLicenseData();
    }, []);

    /**
     * Define a lista de status de licenças que será renderizada.
     */
    function defineChartData(licenseStatus: ILicenseStatus[]) {
        const data = [
            ["", "", { role: "style" }],
        ] as any[];

        licenseStatus.forEach((status) => {
            if(status.statusQuantidade > 0) {
                data.push([
                    status.statusNome,
                    status.statusQuantidade,
                    status.statusCor
                ]);
            }
        });

        setChartData(data);
    }

    /**
     * Realiza a requisição para obter dados dos status das licenças.
     */
    async function getLicenseData() {
        setIsLoadingData(true);

        const response = await getLicenseStatus();

        if(response)
            defineChartData(response);

        setIsLoadingData(false);
    }

    /**
     * Renderiza um componente de acordo com algumas condições:
     * - Se a requisição está em andamento, renderiza o componente de loading;
     * - Se a requisição terminou, renderiza o gráfico de status das licenças.
     * @returns { ReactComponentElement }
     */
    function renderStatusChart() {
        if(isLoadingData)
            return (<Loading />);

        return(
            <Chart
                chartType="BarChart"
                width="100%"
                height="350px"
                data={chartData}
                options={{
                    legend: { position: 'none' }
                }}
            />
        );
    }

    return (
        <LicencesBoxContainer>
            <Card title="Status das licenças">
                {renderStatusChart()}
            </Card>
        </LicencesBoxContainer>
    );
}