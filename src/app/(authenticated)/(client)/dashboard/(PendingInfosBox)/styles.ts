import { colors } from "@/styles/assets/colors/colors";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

interface IColumProps {
    borderright?: string;
}

export const PendingInfosBoxStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`;

export const Column = styled.div<IColumProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${spacings.spacing4};
    width: 50%;
    border-right: ${props => props.borderright === 'true' ? `1px solid ${colors.black20}` : 'none'};

    span {
        font-size: ${fontSizes.sizeJumbo};
        font-weight: ${fontWeights.weightSemiBold};
    }
`;