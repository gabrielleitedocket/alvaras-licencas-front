import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from "./styles";

interface ICheckboxProps {
    checked?: boolean;
    onChange?: (e: any) => void;
    label?: string;
}

export default function Checkbox(props: ICheckboxProps) {
    const { checked, onChange, label } = props;

    return (
        <CheckboxContainer>
            <HiddenCheckbox
                checked={checked}
                onChange={onChange}
            />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            { label }
        </CheckboxContainer>
    );
}