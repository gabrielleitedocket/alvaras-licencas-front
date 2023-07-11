'use client';

import { colors } from "@/styles/assets/colors/colors";
import { shadows } from "@/styles/assets/shadows/shadow";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

interface IColumnProps {
    borderRight?: boolean;
}

export const LoginWrapContentStyle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const LoginBoxContent = styled.div`
    display: flex;
    width: 900px;
    background-color: ${colors.white};
    margin: 0 auto;
    border-radius: 4px;
    ${shadows.shadowFirstFloor};
`;

export const LoginInfoContainer = styled.div`
    width: 50%;
    background-color: ${colors.violetDark};
    padding: ${spacings.spacing6};
    color: ${colors.white};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    img {
        max-width: 250px;
        width: 100%;
        height: auto;
    }

    p {
        margin-top: ${spacings.spacing7};
        font-size: ${fontSizes.sizeSubtitle};
        font-weight: ${fontWeights.weightSemiBold};
    }
`;

export const LoginInfoFooter = styled.div`
    display: flex;
    margin-top: ${spacings.spacing7};
    gap: ${spacings.spacing6};
`;

export const ColumnFooter = styled.div<IColumnProps>`
    border-right: ${props => props.borderRight ? `1px solid ${colors.white}` : 'none'};

    img {
        max-width: 70px;
        margin-right: ${spacings.spacing6};
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: ${spacings.spacing4};
    }
`;

export const LoginFormContainer = styled.div`
    width: 50%;
    padding: ${spacings.spacing6};
`;