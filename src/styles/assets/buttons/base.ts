'use client';

import { spacings } from "../spacings/spacings";
import { fontSizes, fontWeights } from "../typography/sizes";
import { colors } from "../colors/colors";
import { shadows } from "../shadows/shadow";

export const buttonBaseStyle = `
    border-radius: 18px;
    letter-spacing: 0;
    height: ${spacings.spacing6};
    cursor: pointer;
    color: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: ${fontSizes.sizeBody};
    font-weight: ${fontWeights.weightSemiBold};
    padding: 0 ${spacings.spacing5};
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    transition-duration: 250ms;
    transition-timing-function: ease-in;
    outline: 0;
    appearance: none;
    box-sizing: border-box;

    &:hover {
        text-decoration: none;
        color: ${colors.white};
    }

    &:focus{
        box-shadow: 0 0 0 3px ${colors.blue}5d;
    }

    &:small{
        height: ${spacings.spacing5};
    }

    &:bigger{
        height: ${spacings.spacing7};
    }
`;

export const raisedButtonBaseStyle = `
    ${buttonBaseStyle};
    border: none;
    color: ${colors.white};
`;

export const outlineButtonBaseStyle = `
    ${buttonBaseStyle};
    border: 1px solid ${colors.black100};
    background-color: transparent;
`;

export const circleButtonBaseStyle = `
    ${buttonBaseStyle};
    border-radius: 50%;
    height: ${spacings.spacing6};
    width: ${spacings.spacing6};
    border: 1px solid ${colors.black100};
    background-color: transparent;
    padding: 0;

    &:hover {
        ${shadows.shadowGroundFloor};
    }
`;