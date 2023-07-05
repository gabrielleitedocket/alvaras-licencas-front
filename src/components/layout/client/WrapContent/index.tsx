import { ReactNode } from "react";
import { WrapContentStyle } from "./styles";

export default function WrapContent({ children }: { children: ReactNode }) {
    return(
        <WrapContentStyle>
            { children }
        </WrapContentStyle>
    );
}