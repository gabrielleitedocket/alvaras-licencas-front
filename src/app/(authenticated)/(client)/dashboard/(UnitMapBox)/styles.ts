import { colors } from "@/styles/assets/colors/colors";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

export const MapContainer = styled.div`
    & .card-content {
        min-height: 440px;
    }
`;

export const MapUnitFooter = styled.div`
    display: flex;
    gap: ${spacings.spacing3};
`;

export const StatusPin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: ${fontSizes.sizeBody};
    }
`;