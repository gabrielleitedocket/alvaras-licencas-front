'use client';

import { styled } from "styled-components";
import { circleButtonBaseStyle, outlineButtonBaseStyle, raisedButtonBaseStyle } from "./base";
import { colors } from "../colors/colors";
import { shadows } from "../shadows/shadow";
import { fontSizes } from "../typography/sizes";

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

export const ButtonOutline = styled.button`
    ${outlineButtonBaseStyle};
    color: ${colors.blue};
    border-color: ${colors.blue};

    &:hover {
        background-color: ${colors.blue};
    }

    &:active {
        background-color: ${colors.blueDark};
    }
`;

export const ButtonCircleOutline = styled.button`
    ${circleButtonBaseStyle};
    color: ${colors.blue};
    border-color: ${colors.blue};

    &:before {
		font-size: ${fontSizes.sizeSubtitle};
	}

	&:hover {
		background-color: ${colors.blue};
	}

	&:active {
		background-color: ${colors.bluedark};
	}
`;