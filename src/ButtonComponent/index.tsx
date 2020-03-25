import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { StyleSheet, css } from 'aphrodite';
import { getStyles } from './getStyles';
import { ButtonProps, ButtonConfig } from './types';
import { getConfigClasses } from './getConfigClasses';

const Button = ({
    buttonStyle,
    href,
    text,
    newWindow,
    globalSettings
}: ButtonProps) => {
    const { volComponentButton } = globalSettings.globalComponents;
    const { primaryButtonStyles, secondaryButtonStyles } = volComponentButton;
    const classes: any = StyleSheet.create(getStyles(volComponentButton));
    const primaryBaseClasses = getConfigClasses(classes, primaryButtonStyles);
    const secondaryBaseClasses = getConfigClasses(
        classes,
        secondaryButtonStyles
    );

    const getButtonClasses = (role: string): string => {
        if (role === 'secondary') {
            return `${secondaryBaseClasses} ${css(
                classes.secondaryButton,
                classes.secondaryButtonHover
            )}`;
        } else {
            return `${primaryBaseClasses} ${css(
                classes.primaryButton,
                classes.primaryButtonHover
            )}`;
        }
    };

    return (
        <React.Fragment>
            {href ? (
                <a
                    href={href}
                    target={newWindow ? '_blank' : '_self'}
                    className={`${getButtonClasses(buttonStyle)}`}
                >
                    {text}
                </a>
            ) : (
                <button className={`${getButtonClasses(buttonStyle)}`}>
                    {text}
                </button>
            )}
        </React.Fragment>
    );
};

export const block = Button;

export const defaultConfig: ButtonConfig = {
    buttonStyle: 'primary',
    href: '',
    text: 'My Button',
    newWindow: false
};

export const configSchema = {
    buttonStyle: {
        label: 'Button Style',
        type: ElementPropTypes.oneOf('primary', 'secondary')
    },
    href: {
        label: 'Button Link',
        type: ElementPropTypes.string
    },
    text: {
        label: 'Button Text',
        type: ElementPropTypes.string
    },
    newWindow: {
        label: 'Open link in a new window',
        type: ElementPropTypes.bool
    }
};
