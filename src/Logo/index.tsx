import React from 'react';

type LogoStyle = 'text' | 'image';

interface LogoProps {
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