'use client'

import { ReactNode } from 'react';
import { PageHeaderStyle } from './styles';

interface IPageHeaderPros {
    title: string;
    component?: ReactNode;
}

export function PageHeader(props: IPageHeaderPros) {
    const { title, component } = props;

    return(
        <PageHeaderStyle>
            <h3>{ title }</h3>
            {
                component ? component : ''
            }
        </PageHeaderStyle>
    );
}