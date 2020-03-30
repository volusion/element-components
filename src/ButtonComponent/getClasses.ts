import { StyleSheet, css } from 'aphrodite';
import {
    BaseButtonStylesConfig,
    Styles,
    BorderRadius,
    BorderThickness,
    Size,
    Spacing
} from './types';

const getBorderRadius = (cornerStyle: BorderRadius) => {
    if (cornerStyle === 'small') return '.125rem';
    if (cornerStyle === 'medium') return '.25rem';
    if (cornerStyle === 'large') return '.5rem';
    if (cornerStyle === 'pill') return '9999px';
    return '0';
};

const getBorders = (borderThickness: BorderThickness) => {
    if (borderThickness === 'basic') {
        return {
            borderStyle: 'solid',
            borderWidth: '.125rem'
        };
    }
    if (borderThickness === 'thin') {
        return {
            borderStyle: 'solid',
            borderWidth: '1px'
        };
    }
    if (borderThickness === 'thick') {
        return {
            borderStyle: 'solid',
            borderWidth: '.25rem'
        };
    }
    return {
        borderStyle: 'none',
        borderWidth: 0
    };
};

const getSizes = (size: Size) => {
    if (size === 'small') {
        return {
            fontSize: '.75rem',
            padding: '.25rem .5rem'
        };
    }
    if (size === 'medium') {
        return {
            fontSize: '.875rem',
            padding: '.5rem 1rem'
        };
    }
    if (size === 'large') {
        return {
            fontSize: '1rem',
            padding: '1rem 2rem'
        };
    }
    return {
        fontSize: '1rem',
        padding: '1rem 2rem',
        width: '100%',
        maxWidth: '30em'
    };
};

const getLetterSpacing = (spacing: Spacing) => {
    if (spacing === 'tracked') return '.1em';
    if (spacing === 'tight') return '-.05em';
    if (spacing === 'mega') return '.25em';
    return '';
};

const getGrowOnHover = (grow: boolean) => {
    return (
        grow && {
            '-moz-osx-font-smoothing': 'grayscale',
            '-webkit-backface-visibility': 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            transition: 'transform .25s ease-out',
            ':hover': {
                transform: 'scale(1.05)'
            },
            ':focus': {
                transform: 'scale(1.05)'
            },
            ':active': {
                transform: 'scale(.90)'
            }
        }
    );
};

export const getClasses = (buttonSettings: BaseButtonStylesConfig) => {
    const styles: Styles = {
        button: {
            backgroundColor: buttonSettings.backgroundColor,
            borderColor: buttonSettings.borderColor,
            borderRadius: getBorderRadius(buttonSettings.rounded),
            color: buttonSettings.textColor || 'white',
            cursor: 'pointer',
            display: 'inline-block',
            fontWeight: buttonSettings.fontWeight,
            letterSpacing: getLetterSpacing(buttonSettings.letterSpacing),
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: buttonSettings.textTransform,
            transition: 'color .15s ease-in',
            ':hover': { transition: 'color .15s ease-in' },
            ':active': { transition: 'color .15s ease-in' },
            ':visited': { transition: 'color .15s ease-in' },
            ':link': { transition: 'color .15s ease-in' },
            ':focus': {
                transition: 'color .15s ease-in',
                outline: '1px dotted currentColor'
            },
            ...getBorders(buttonSettings.borderThickness),
            ...getSizes(buttonSettings.size),
            ...getGrowOnHover(buttonSettings.growOnHover)
        },
        buttonHover: {
            ':hover': {
                backgroundColor: buttonSettings.hoverBackgroundColor,
                borderColor: buttonSettings.hoverBorderColor,
                color: buttonSettings.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all .2s ease-in-out'
            }
        }
    };
    const classes = StyleSheet.create(styles);

    return `${css(classes.button, classes.buttonHover)}`;
};
