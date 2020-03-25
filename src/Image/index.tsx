import React from 'react';

interface ImageProps {
    alt: string;
    globalSettings: any; // TODO: Get rid of any
    height: string;
    src: string;
    title: string;
    width: string;
}

const Image = ({ alt, height, src, title, width }: ImageProps) => {
    return (
        <picture>
            <img
                alt={alt}
                height={height}
                src={src}
                title={title}
                width={width}
            />
        </picture>
    );
};

export const block = Image;
export { configSchema, defaultConfig } from './configs';
