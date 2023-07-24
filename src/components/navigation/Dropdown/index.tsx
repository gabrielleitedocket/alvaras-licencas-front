import { ReactNode, useState } from "react";
import {
    DropdownContainer,
    DropdownMenu,
    DropdownMenuItem
} from "./styles";

interface IOption {
    title: string;
    onClick: Function;
}

interface IDropdownProps {
    children: ReactNode;
    options: IOption[];
}

export default function Dropdown(props: IDropdownProps) {
    const { children, options } = props;

    const [isOpen, setIsOpen] = useState(false);

    function handleDropdownToggle() {
        setIsOpen(!isOpen);
    }

    function handleDropdownItemClick(option: IOption) {
        const { onClick } = option;
        onClick && onClick();
        setIsOpen(false);
    }

    return (
        <DropdownContainer onClick={handleDropdownToggle}>
            { children }

            {
                isOpen &&
                    <DropdownMenu>
                        {
                            options.map((option, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    onClick={() => handleDropdownItemClick(option)}
                                >
                                    { option.title }
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenu>
            }
        </DropdownContainer>
    );
}