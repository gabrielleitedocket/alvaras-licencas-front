'use client';

import { styled } from "styled-components";
import { colors } from "../colors/colors";
import { fontSizes, fontWeights } from "./sizes";

export const LinkSpotlight = styled.a`
    font-size: ${fontSizes.sizeBody};
    font-weight: ${fontWeights.weightSemiBold};
    color: ${colors.blue};
    cursor: pointer;

    &:hover {
        color: ${colors.blueDark};
        text-decoration: underline;
    }
`;