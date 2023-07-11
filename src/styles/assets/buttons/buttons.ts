'use client';

import { styled } from "styled-components";
import { raisedButtonBaseStyle } from "./base";
import { colors } from "../colors/colors";
import { shadows } from "../shadows/shadow";

export const ButtonRaised = styled.button`
    ${raisedButtonBaseStyle};
    background-color: ${colors.blue};

    &:hover {
        ${shadows.shadowGroundFloor};
    }

    &:active {
        background-color: ${colors.blueDark};
        ${shadows.shadowGroundFloor};
    }

    &:disabled {
        background-color: ${colors.black20};
        color: ${colors.black60};
        pointer-events: none;
    }
`;