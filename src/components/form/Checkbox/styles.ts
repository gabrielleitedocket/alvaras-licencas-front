import { colors } from '@/styles/assets/colors/colors';
import { spacings } from '@/styles/assets/spacings/spacings';
import { styled } from "styled-components";

interface IStyledCheckboxProps {
    checked?: boolean;
}

export const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

export const StyledCheckbox = styled.div<IStyledCheckboxProps>`
    display: inline-block;
    border: 2px solid ${props => props.checked ? colors.blue : colors.black60};
    border-radius: 3px;
    background: ${props => (props.checked ? colors.blue : 'transparent')};
    width: 16px;
    height: 16px;
    margin-right: ${spacings.spacing3};

    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }
`;