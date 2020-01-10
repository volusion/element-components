export default ({ primary, secondary }) => {
    return {
        baseStyles: {
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'color .15s ease-in',
            display: 'inline-block',
            cursor: 'pointer'
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
            paddingTop: '.25rem',
            paddingBottom: '.25rem',
            paddingLeft: '.5rem',
            paddingRight: '.5rem'
        },
        sizeMedium: {
            fontSize: '.875rem',
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem'
        },
        sizeLarge: {
            fontSize: '1rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem'
        },
        sizeBlock: {
            fontSize: '1rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
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
            backgroundColor: primary.backgroundColor,
            borderColor: primary.borderColor,
            color: primary.textColor || 'white'
        },
        primaryButtonHover: {
            ':hover': {
                backgroundColor: primary.hoverBackgroundColor,
                borderColor: primary.hoverBorderColor,
                color: primary.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        },
        secondaryButton: {
            backgroundColor: secondary.backgroundColor,
            borderColor: secondary.borderColor,
            color: secondary.textColor || 'white'
        },
        secondaryButtonHover: {
            ':hover': {
                backgroundColor: secondary.hoverBackgroundColor,
                borderColor: secondary.hoverBorderColor,
                color: secondary.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        }
    };
};
