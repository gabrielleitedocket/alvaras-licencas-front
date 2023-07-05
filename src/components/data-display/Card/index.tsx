'use client';

import { ReactNode } from "react";
import {
    CardStyle,
    CardTitleStyle,
    CardSubtitleStyle,
    CardContentStyle,
    CardFooterStyle
} from './styles';

interface ICardProps {
    title?: string;
    subtitle?: string;
    footer?: ReactNode;
    children: ReactNode;
}

export default function Card(props: ICardProps) {
    const { title, subtitle, children, footer } = props;

    return (
        <CardStyle>
            {
                title ? 
                    <CardTitleStyle>
                        { title }

                        {
                            subtitle ?
                                <CardSubtitleStyle>{ subtitle }</CardSubtitleStyle>
                            : ''
                        }
                    </CardTitleStyle> 
                : ''
            }

            <CardContentStyle className="card-content">
                { children }
            </CardContentStyle>

            {
                footer ?
                    <CardFooterStyle>{ footer }</CardFooterStyle>
                : ''
            }
        </CardStyle>
    );
}