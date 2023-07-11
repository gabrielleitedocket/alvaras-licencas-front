'use client';

import { colors } from "@/styles/assets/colors/colors";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes } from "@/styles/assets/typography/sizes";
import { styled } from "styled-components";

export const Input = styled.input`
    border: 1px solid ${colors.black20};
    appearance: none;
    height: ${spacings.spacing7};
	padding: ${spacings.spacing3};
	background: ${colors.white};
    color: ${colors.black100};
    border: 1px solid ${colors.black40};
	font-size: ${fontSizes.sizeBody};
	outline: none;
    border-radius: 2px;
	width: 100%;
	display: block;
    text-align: left !important;

    &:focus {
        box-shadow: inset 0 0 0 1px ${colors.blue};
        transition: .3s;
    }

    &:disabled {
        background: ${colors.black10};
		border: 1px solid ${colors.black20};
    }

    &.error{
		border: 1px solid ${colors.red};
    }

    &::placeholder{
        color: ${colors.black20};
    }
`;

export const Label = styled.label`
    display: block;
    margin-bottom: ${spacings.spacing2};
    font-size: ${fontSizes.sizeBody};
    color: ${colors.black100};
`;