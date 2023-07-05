'use client';

import Card from "@/components/data-display/Card";
import Loading from "@/components/data-display/Loading";
import { LicencesBoxContainer } from "./styles";

export default function LicenseStatusChartBox() {
    return (
        <LicencesBoxContainer>
            <Card title="Status das licenças">
                <Loading />
            </Card>
        </LicencesBoxContainer>
    );
}