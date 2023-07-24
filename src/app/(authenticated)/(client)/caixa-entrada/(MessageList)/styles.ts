import { colors } from "@/styles/assets/colors/colors";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

export const ListHeader = styled.div`
    padding: ${spacings.spacing2} ${spacings.spacing4};
    background-color: ${colors.black10};
    border: 1px solid ${colors.black20};
    border-radius: 4px;
    width: 100%;
    color: ${colors.black80};
    font-size: ${fontSizes.sizeBody};
    font-weight: ${fontWeights.weightBold};
    margin-bottom: ${spacings.spacing2};
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacings.spacing4};
`;