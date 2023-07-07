import { colors } from "@/styles/assets/colors/colors";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

export const ListContainer = styled.div`
    & .card-content {
        padding: 0;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

export const MaturitiesListStyle = styled.ul`
    width: 100%;

    li {
        width: 100%;
        display: flex;
        align-items: flex-start;
        padding: ${spacings.spacing3} ${spacings.spacing5};
        cursor: pointer;
        border-bottom: 1px solid ${colors.black20};

        & img {
            margin-right: ${spacings.spacing5};
        }

        & h6 {
            font-weight: ${fontWeights.weightBold};
            font-size: ${fontSizes.sizeBody};
            color: ${colors.black100};
        }

        & p {
            color: ${colors.black60};
            font-size: ${fontSizes.sizeBody};
        }

        &:hover {
            background-color: ${colors.coldGrey10};
        }
    }
`;