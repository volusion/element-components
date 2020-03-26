import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { getClasses } from './getClasses';
import { ButtonProps, ButtonConfig } from './types';
import { LinkButton } from './LinkButton';
import { StandardButton } from './StandardButton';

const Button = (props: ButtonProps) => {
    const { volComponentButton } = props.globalSettings.globalComponents;
    const { primaryButtonStyles, secondaryButtonStyles } = volComponentButton;

    const BaseButton = (props: any) => {
        const classes = getClasses(props.globalButtonSettings);
        return props.href ? (
            <LinkButton {...props} className={classes} />
        ) : (
            <StandardButton {...props} className={classes} />
        );
    };

    return (
        <BaseButton
            {...props}
            globalButtonSettings={
                props.buttonStyle === 'primary'
                    ? primaryButtonStyles
                    : secondaryButtonStyles
            }
        />
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
