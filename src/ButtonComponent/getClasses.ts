import { baseStyles } from './baseStyles';
import { StyleSheet, css } from 'aphrodite';
import { getConfigClasses } from './getConfigClasses';
import { BaseButtonStylesConfig } from './types';

export const getClasses = (buttonSettings: BaseButtonStylesConfig) => {
    const styles: any = {
        ...baseStyles,
        button: {
            backgroundColor: buttonSettings.backgroundColor,
            borderColor: buttonSettings.borderColor,
            color: buttonSettings.textColor || 'white'
        },
        buttonHover: {
            ':hover': {
                backgroundColor: buttonSettings.hoverBackgroundColor,
                borderColor: buttonSettings.hoverBorderColor,
                color: buttonSettings.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        }
    };
    const classes: any = StyleSheet.create(styles);
    const configClasses = getConfigClasses(classes, buttonSettings);

    return `${configClasses} ${css(classes.button, classes.buttonHover)}`;
};
