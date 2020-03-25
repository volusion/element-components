import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { StyleSheet, css } from 'aphrodite';
import { getStyles } from './getStyles';
import { ButtonProps, ButtonConfig } from './types';
import { getConfigClasses } from './getConfigClasses';

const Button = ({ buttonStyle, href, text, globalSettings }: ButtonProps) => {
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
                <a href={href} className={`${getButtonClasses(buttonStyle)}`}>
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
