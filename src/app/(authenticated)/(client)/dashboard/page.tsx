import { PageHeader } from "@/components/layout/client/PageHeader";
import LicenseStatusChartBox from "./(LicenseStatusChartBox)";
import NextMaturitiesListBox from "./(NextMaturitiesListBox)";
import { DashboardContainerStyle, ContainerColumn } from './page.styled';
import PendingInfosBox from "./(PendingInfosBox)";
import UnitMap from "./(UnitMapBox)";

export default function DashboardPage() {

    return (
        // TODO - Trocar select por "dktSelect"
        <>
            <PageHeader
                title="Dashboard"
                component={
                    <select placeholder="Filtros">
                        <option value="">Selecione</option>
                    </select>
                }
            />
            
            <DashboardContainerStyle>
                <ContainerColumn>
                    <LicenseStatusChartBox />
                    <NextMaturitiesListBox />
                </ContainerColumn>
                <ContainerColumn>
                    <PendingInfosBox />
                    <UnitMap />
                </ContainerColumn>
            </DashboardContainerStyle>
        </>
    );
}