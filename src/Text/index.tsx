import React from 'react';
import ElementPropTypes from '@volusion/element-proptypes';

const Text = ({ content }) => {
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
