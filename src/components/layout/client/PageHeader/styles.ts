import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import styled from "styled-components";

export const PageHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${spacings.spacing5} 0;

    h3 {
        font-size: ${fontSizes.sizeMaintitle};
        font-weight: ${fontWeights.weightBold};
    }
`;