import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { StyleSheet, css } from 'aphrodite';
import { getStyles, mergedComponentStyles } from './getStyles';
import {
    BlockSettingsProps,
    ButtonComponentProps,
    BaseButtonStylesConfig
} from './types';
import { getConfigClasses } from './getConfigClasses';

const Button = ({
    className,
    buttonStyle,
    href,
    text,
    globalSettings
}: ButtonComponentProps) => {
    const mergedStyles = mergedComponentStyles(defaultConfig, globalSettings);

    const classes: any = StyleSheet.create(getStyles(mergedStyles));

    const classExtensions = className ? className : '';

    const aphroditeProps = {
        StyleSheet,
        classes,
        css
    };

    const styles: BaseButtonStylesConfig =
        buttonStyle === 'secondary'
            ? mergedStyles.secondary
            : mergedStyles.primary;

    const getButtonClasses = (
        role: string,
        styles: BaseButtonStylesConfig
    ): string => {
        const baseStyles = getConfigClasses(aphroditeProps, styles);
        if (role === 'secondary') {
            return `${baseStyles} ${css(
                classes.secondaryButton,
                classes.secondaryButtonHover
            )}`;
        } else {
            return `${baseStyles} ${css(
                classes.primaryButton,
                classes.primaryButtonHover
            )}`;
        }
    };

    return (
        <React.Fragment>
            {href ? (
                <a
                    className={`${getButtonClasses(
                        buttonStyle,
                        styles
                    )} ${classExtensions}`}
                >
                    {text}
                </a>
            ) : (
                <button
                    className={`${getButtonClasses(
                        buttonStyle,
                        styles
                    )} ${classExtensions}`}
                >
                    {text}
                </button>
            )}
        </React.Fragment>
    );
};

export const block = Button;

export const defaultConfig: BlockSettingsProps = {
    buttonStyle: 'primary',
    className: '',
    href: '',
    text: 'My Button'
    // Not sure about this...
};
export const configSchema = {
    text: {
        label: 'Button Text',
        type: ElementPropTypes.string
    },
    target: {
        label: 'Button Target',
        type: ElementPropTypes.oneOf(['_self', '_blank'])
    },
    link: {
        label: 'Button Link',
        type: ElementPropTypes.string
    }
};
