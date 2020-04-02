import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { ComponentProps } from '../../types';

interface TextProps extends ComponentProps {
    content: string;
}

const Text: React.FC<TextProps> = ({ content, ...props }) => {
    if (!content) return null;
    // We delete the unused globalSettings prop so that React won't complain about it not being a valid DOM attribute.
    delete props.globalSettings;
    return <div {...props} dangerouslySetInnerHTML={{ __html: content }} />;
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
