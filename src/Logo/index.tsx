import React from 'react';
// import { BlockUtils, GlobalSettings } from '../../types';

type LogoStyle = 'text' | 'image';

interface LogoProps {
    style: LogoStyle;
    image?: string;
    storeName?: string;
}

const LogoText = ({ text }: { text: string }) => (
    <div>{text}</div>
);

const LogoImage = ({ url }: { url: string }) => (
    <div>
        <img src={url} />
    </div>
);

const Logo = ({style, image, storeName}: LogoProps) => {
    if (style === 'image') {
        return <LogoImage url={image || ''} />;
    }

    return <LogoText text={storeName || ''} />;
};

export const block = Logo;