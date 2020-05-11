import React from 'react';

export type LogoStyle = 'Text' | 'Image';

export interface LogoProps {
    style: LogoStyle;
    Image?: any;
    StoreName?: any;
}

const Logo = ({style, Image, StoreName}: LogoProps) => {
    if (style === 'Image') {
        return <Image />;
    }

    return <StoreName />;
};

export const block = Logo;