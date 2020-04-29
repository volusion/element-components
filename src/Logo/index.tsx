import React from 'react';

export type LogoStyle = 'text' | 'image';

export interface LogoProps {
    style: LogoStyle;
    Image?: any;
    StoreName?: any;
}

const Logo = ({style, Image, StoreName}: LogoProps) => {
    if (style === 'image') {
        return <Image />;
    }

    return <StoreName />;
};

export const block = Logo;