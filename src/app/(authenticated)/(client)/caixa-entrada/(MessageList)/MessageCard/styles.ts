import { colors } from "@/styles/assets/colors/colors";
import { shadows } from "@/styles/assets/shadows/shadow";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

export const NewMessageFlag = styled.span`
    display: flex;
    align-items: center;
    color: ${colors.blue};
    font-size: ${fontSizes.sizeSmall};

    &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: ${colors.blue};
        box-shadow: 0 0 0 2px ${colors.blueLight};
    }
`;

export const ActionsContainer = styled.div`
    display: none;
    gap: ${spacings.spacing2};
`;

export const MessageCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacings.spacing5};
    background-color: ${colors.white};
    padding: ${spacings.spacing5};
    border-radius: 4px;
    word-wrap: break-word;
    ${shadows.shadowFirstFloor};

    &:hover {
        ${NewMessageFlag} {
            display: none;
        }

        ${ActionsContainer} {
            display: flex;
        }
    }
`;

export const CardRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const CardColumn = styled.div`
    display: flex;
`;

export const MessageTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${spacings.spacing4};

    h3 {
        font-size: ${fontSizes.sizeSubtitle};
        font-weight: ${fontWeights.weightSemiBold};
    }

    h4 {
        font-size: ${fontSizes.sizeSmall};
        font-weight: ${fontWeights.weightNormal};
    }
`;

export const MessageText = styled.p`
    font-size: ${fontSizes.sizeBody};
`;

export const MessageSentDate = styled.p`
    font-size: ${fontSizes.sizeSmall};
    color: ${colors.black60};
`;