'use client';

import { spacings } from "@/styles/assets/spacings/spacings";
import { styled } from "styled-components";

export const DashboardContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: ${spacings.spacing4};
`;

export const ContainerColumn = styled.div`
    width: 50%;
`;