import { VolComponentButton } from './types';

// TODO: Change 'any' type to return type from Aphrodite
export const getStyles = ({
    primaryButtonStyles,
    secondaryButtonStyles
}: VolComponentButton): any => {
    return {
        baseStyles: {
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'color .15s ease-in',
            display: 'inline-block',
            cursor: 'pointer',
            ':hover': { transition: 'color .15s ease-in' },
            ':active': { transition: 'color .15s ease-in' },
            ':visited': { transition: 'color .15s ease-in' },
            ':link': { transition: 'color .15s ease-in' },
            ':focus': {
                transition: 'color .15s ease-in',
                outline: '1px dotted currentColor'
            }
        },
        borderBasic: {
            borderStyle: 'solid',
            borderWidth: '.125rem'
        },
        borderThin: {
            borderStyle: 'solid',
            borderWidth: '1px'
        },
        borderThick: {
            borderStyle: 'solid',
            borderWidth: '.25rem'
        },
        borderNone: {
            borderStyle: 'none',
            borderWidth: 0
        },
        sizeSmall: {
            fontSize: '.75rem',
            padding: '.25rem .5rem'
        },
        sizeMedium: {
            fontSize: '.875rem',
            padding: '.5rem 1rem'
        },
        sizeLarge: {
            fontSize: '1rem',
            padding: '1rem 2rem'
        },
        sizeBlock: {
            fontSize: '1rem',
            padding: '1rem 2rem',
            width: '100%',
            maxWidth: '30em'
        },
        cornerNone: {
            borderRadius: 0
        },
        cornerSmall: {
            borderRadius: '.125rem'
        },
        cornerMedium: {
            borderRadius: '.25rem'
        },
        cornerLarge: {
            borderRadius: '.5rem'
        },
        cornerPill: {
            borderRadius: '9999px'
        },
        weight300: {
            fontWeight: 300
        },
        weight400: {
            fontWeight: 400
        },
        weight500: {
            fontWeight: 500
        },
        weight600: {
            fontWeight: 600
        },
        weight700: {
            fontWeight: 700
        },
        weight800: {
            fontWeight: 800
        },
        weight900: {
            fontWeight: 900
        },
        textTransformNone: {
            textTransform: 'none'
        },
        textTransformCapitalize: {
            textTransform: 'capitalize'
        },
        textTransformLowercase: {
            textTransform: 'lowercase'
        },
        textTransformUppercase: {
            textTransform: 'uppercase'
        },
        spacingNone: {},
        spacingTracked: {
            letterSpacing: '.1em'
        },
        spacingTight: {
            letterSpacing: '-.05em'
        },
        spacingMega: {
            letterSpacing: '.25em'
        },
        grow: {
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
        },
        primaryButton: {
            backgroundColor: primaryButtonStyles.backgroundColor,
            borderColor: primaryButtonStyles.borderColor,
            color: primaryButtonStyles.textColor || 'white'
        },
        primaryButtonHover: {
            ':hover': {
                backgroundColor: primaryButtonStyles.hoverBackgroundColor,
                borderColor: primaryButtonStyles.hoverBorderColor,
                color: primaryButtonStyles.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        },
        secondaryButton: {
            backgroundColor: secondaryButtonStyles.backgroundColor,
            borderColor: secondaryButtonStyles.borderColor,
            color: secondaryButtonStyles.textColor || 'white'
        },
        secondaryButtonHover: {
            ':hover': {
                backgroundColor: secondaryButtonStyles.hoverBackgroundColor,
                borderColor: secondaryButtonStyles.hoverBorderColor,
                color: secondaryButtonStyles.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        }
    };
};
