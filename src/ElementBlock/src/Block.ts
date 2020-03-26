import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getStyles } from './getStyles';

import { defaultConfig } from './configs';

const Block = (props: {}) => {
    const classes = StyleSheet.create(getStyles(props));
    return <h1 className={css(classes.example)}>{props.text}</h1>;
};

Block.defaultProps = defaultConfig;

export default Block;
