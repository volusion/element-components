import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getStyles } from './getStyles';
import { defaultConfig } from './configs';
import { ElementBlockProps, ObjectLiteral } from './types';

const Block = (props: ElementBlockProps) => {
    const { globalSettings, customAttrs, children } = props;
    if (!children) return null;
    const styles = StyleSheet.create(getStyles(props, globalSettings));
    const customProps: ObjectLiteral = {};
    customAttrs.filter(attr => attr.name).forEach((attr: { name: string; value: string }) => {
        const hyphenateString = (string = '') => {
            const specialChars = /[^a-zA-Z0-9\s-_]+/g;
            const nonAlphaNumericChars = /[^a-zA-Z0-9]+/g;
            const attr = string
                .trim()
                .replace(specialChars, '')
                .replace(nonAlphaNumericChars, '-')
                .toLowerCase()
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
