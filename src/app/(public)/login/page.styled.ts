'use client';

import { spacings } from "@/styles/assets/spacings/spacings";
import { styled } from "styled-components";

export const FormLoginStyle = styled.form`
    display: flex;
    flex-direction: column;

    a {
        margin-bottom: ${spacings.spacing6};
    }
`;