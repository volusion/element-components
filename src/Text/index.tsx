import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { ComponentProps } from '../../types';

interface TextProps extends ComponentProps {
    htmlString: string;
}

const Text: React.FC<TextProps> = ({ htmlString, ...props }) => {
    if (!htmlString) return null;
    // We delete the unused globalSettings prop so that React won't complain about it not being a valid DOM attribute.
    delete props.globalSettings;
    return <div {...props} dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export const block = Text;

export const defaultConfig = {
    htmlString: 'Lorem Ipsum'
};

export const configSchema = {
    htmlString: {
        label: 'Text Content',
        type: ElementPropTypes.editorMinimal
    }
};
