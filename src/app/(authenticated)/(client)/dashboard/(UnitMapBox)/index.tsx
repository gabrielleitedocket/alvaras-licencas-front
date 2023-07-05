'use client';

import Card from "@/components/data-display/Card";
import Image from "next/image";
import {
    MapContainer,
    MapUnitFooter,
    StatusPin
} from './styles';
import RegularPinIcon from '@/../public/images/icons/ico-pin-verde.svg';
import PartiallyRegularPinIcon from '@/../public/images/icons/ico-pin-amarelo.svg';
import IrregularPinIcon from '@/../public/images/icons/ico-pin-vermelho.svg';
import NewPinIcon from '@/../public/images/icons/ico-pin-azul.svg';
import MultipleStatuses from '@/../public/images/icons/ico-pin-roxo.svg';
import Loading from "@/components/data-display/Loading";

export default function UnitMap() {
    return (
        <MapContainer>
            <Card
                title="Mapa de unidades"
                subtitle="Dica: Clique no pin da unidade para ser direcionado ao seu detalhe"
                footer={
                    <MapUnitFooter>
                        <StatusPin>
                            <Image src={RegularPinIcon} alt="Regular" />
                            <span>Regular</span>
                        </StatusPin>
                        <StatusPin>
                            <Image src={PartiallyRegularPinIcon} alt="Parcialmente regular" />
                            <span>Parcialmente regular</span>
                        </StatusPin>
                        <StatusPin>
                            <Image src={IrregularPinIcon} alt="Irregular" />
                            <span>Irregular</span>
                        </StatusPin>
                        <StatusPin>
                            <Image src={NewPinIcon} alt="Nova" />
                            <span>Nova</span>
                        </StatusPin>
                        <StatusPin>
                            <Image src={MultipleStatuses} alt="Múltiplos status" />
                            <span>Múltiplos status</span>
                        </StatusPin>
                    </MapUnitFooter>
                }
            >
                <Loading />
            </Card>
        </MapContainer>
    );
}