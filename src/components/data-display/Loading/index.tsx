'use client';

import { LoadingStyle } from './styles';

interface ILoadingProps {
    type?: string;
}

export default function Loading(props: ILoadingProps) {
    const { type } = props;

    return (
        <LoadingStyle type={type} />
    );
}