import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { StyleSheet, css } from 'aphrodite';
import { getStyles } from './getStyles';
import { BaseButtonStylesConfig, ButtonProps, ButtonConfig } from './types';
import { getBaseStyles } from './getBaseStyles';

const Button = ({ buttonStyle, href, text, globalSettings }: ButtonProps) => {
    const { volComponentButton } = globalSettings.globalComponents;
    const mergedStyles = {
        primary: {
            ...volComponentButton.primaryButtonStyles
        },
        secondary: {
            ...volComponentButton.secondaryButtonStyles
        }
    };

    const classes: any = StyleSheet.create(getStyles(mergedStyles));

    const styles: BaseButtonStylesConfig =
        buttonStyle === 'secondary'
            ? mergedStyles.secondary
            : mergedStyles.primary;

    const getButtonClasses = (
        role: string,
        styles: BaseButtonStylesConfig
    ): string => {
        const baseStyles = getBaseStyles(classes, styles);

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
                <a className={`${getButtonClasses(buttonStyle, styles)}`}>
                    {text}
                </a>
            ) : (
                <button className={`${getButtonClasses(buttonStyle, styles)}`}>
                    {text}
                </button>
            )}
        </React.Fragment>
    );
};

export const block = Button;

export const defaultConfig: ButtonConfig = {
    buttonStyle: 'primary',
    className: '',
    href: '',
    text: 'My Button'
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
