import { colors } from "@/styles/assets/colors/colors";
import { shadows } from "@/styles/assets/shadows/shadow";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

export const CardStyle = styled.div`
    background-color: ${colors.white};
    border-radius: 4px;
    ${shadows.shadowGroundFloor};
    margin-bottom: ${spacings.spacing4};
    word-wrap: break-word;
`;

export const CardTitleStyle = styled.div`
    border-bottom: 1px solid ${colors.black20};
    padding: ${spacings.spacing4} ${spacings.spacing5};
    font-size: ${fontSizes.sizeSubtitle};
    font-weight: ${fontWeights.weightSemiBold};
`;

export const CardSubtitleStyle = styled.div`
    ${CardTitleStyle} & {
        font-size: ${fontSizes.sizeSmall};
        font-style: italic;
        font-weight: ${fontWeights.weightNormal};
        color: ${colors.black80};
        margin-top: ${spacings.spacing3};
    }
`;

export const CardContentStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${spacings.spacing5};
`;

export const CardFooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${spacings.spacing3};
    border-top: 1px solid ${colors.black20};
`;
