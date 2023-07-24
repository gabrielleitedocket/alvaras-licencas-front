import { colors } from "@/styles/assets/colors/colors";
import { shadows } from "@/styles/assets/shadows/shadow";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownMenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${colors.white};
    ${shadows.shadowGroundFloor};
    padding: 0;
    margin: ${spacings.spacing1} 0;
`;

export const DropdownMenuItem = styled.li`
    font-size: ${fontSizes.sizeBody};
    font-weight: ${fontWeights.weightNormal};
    padding: ${spacings.spacing4};
    width: 170px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.black10};
    }
`;