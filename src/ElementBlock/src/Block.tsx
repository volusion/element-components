import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getStyles } from './getStyles';
import { defaultConfig } from './configs';
import { ElementBlockProps, ObjectLiteral } from './types';

const Block = (props: ElementBlockProps) => {
    const { globalSettings, customAttrs, children } = props;
    const styles = StyleSheet.create(getStyles(props, globalSettings));
    const customProps: ObjectLiteral = {};
    customAttrs.forEach((attr: { name: string; value: string }) => {
        const hyphenateString = (string = '') => {
            // const specialChars = /[^a-zA-Z0-9\s-_]+/g; // Talk to Phil about adding/removing
            const nonAlphaNumericChars = /[^a-zA-Z0-9]+/g;
            const attr = string
                .trim()
                // .replace(specialChars, '') // Talk to Phil about adding/removing
                .replace(nonAlphaNumericChars, '-');
            return attr;
        };
        const fullAttrName = `data-element-${hyphenateString(attr.name)}`;
        customProps[fullAttrName] = attr.value;
    });
    return (
        <div className={css(styles.wrapper)} {...customProps}>
            {children}
        </div>
    );
};

Block.defaultProps = defaultConfig;

export default Block;