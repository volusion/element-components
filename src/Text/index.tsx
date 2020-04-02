import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { ComponentProps } from '../../types';

interface TextProps extends ComponentProps {
    content: string;
}

const Text: React.FC<TextProps> = ({ content }) => {
    if(!content) return null;
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export const block = Text;

export const defaultConfig = {
    content: 'Lorem Ipsum'
};

export const configSchema = {
    content: {
        label: 'Text Content',
        type: ElementPropTypes.editorMinimal
    }
};
