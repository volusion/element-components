import React, { CSSProperties } from 'react';
import { BlockUtils, GlobalSettings } from '../types';

interface ImgProps {
    alt: string;
    height: number;
    src: string;
    title: string;
    width: number;
}

interface AmpImgProps extends ImgProps {
    layout: string;
}

export interface ImageProps extends ImgProps {
    globalSettings: GlobalSettings;
    utils: BlockUtils;
}

const responsiveImgStyles: CSSProperties = {
    maxWidth: '100%'
};

const AmpImg = (props: AmpImgProps) => <amp-img {...props} />;
const Img = (props: ImgProps) => (
    <picture>
        <img {...props} style={responsiveImgStyles} />
    </picture>
);

const Image = ({ alt, height, src, title, utils, width }: ImageProps) => {
    const imgProps = { alt, height, src, title, width };

    return utils.isAmpRequest ? (
        <AmpImg layout="responsive" {...imgProps} />
    ) : (
        <Img {...imgProps} />
    );
};

export const block = Image;
export { configSchema, defaultConfig } from './configs';
