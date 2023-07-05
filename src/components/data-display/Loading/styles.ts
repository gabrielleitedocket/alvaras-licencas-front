import { colors } from "@/styles/assets/colors/colors";
import { styled } from "styled-components";

interface ILoadingProps {
    type?: string;
}

const defaultLoading = `
    width: 48px;
    height: 48px;
    border: 5px solid ${colors.black10};
    border-bottom-color: ${colors.purpleDocket};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`;

function getLoadingStyleByType(type: string | undefined) {
    switch(type) {
        default:
        case 'photoAndDescription':
            return defaultLoading;
    }
}

export const LoadingStyle = styled.div<ILoadingProps>`
    ${props => getLoadingStyleByType(props.type)}
`;