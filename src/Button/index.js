import PropTypes from 'prop-types';
import styles from './styles';

const name = 'volComponentButton';

const baseButtonStylesConfig = {
    textColor: '#fff',
    hoverTextColor: '#fff',
    backgroundColor: '#333',
    hoverBackgroundColor: '#555',
    borderColor: '#333333',
    hoverBorderColor: '#555',
    fontWeight: '700', // 300, 400, 500, 600, 700, 800, 900
    textTransform: 'none', // none, capitalize, lowercase, uppercase
    letterSpacing: 'none', // none, tracked, tight, mega
    borderThickness: 'basic', // basic, thin, thick, none
    size: 'medium', // small, medium, large, block
    rounded: 'medium', // none, small, medium, large, pill
    growOnHover: false
};

const defaultConfig = {
    buttonStyle: 'primary',
    className: '',
    href: '',
    primaryButtonStyles: {
        ...baseButtonStylesConfig
    },
    secondaryButtonStyles: {
        ...baseButtonStylesConfig,
        textColor: '#666',
        hoverTextColor: '#333',
        backgroundColor: '#fff',
        hoverBackgroundColor: '#f2f2f2',
        borderColor: '#666',
        hoverBorderColor: '#333'
    }
};

const factory = (
    { React, ElementPropTypes },
    { StyleSheet, css },
    { globalComponents }
) => {
    const buttonGlobalStyles = globalComponents.volComponentButton;
    const mergedComponentStyles = {
        primary: {
            ...defaultConfig.primaryButtonStyles,
            ...(buttonGlobalStyles || {}).primaryButtonStyles
        },
        secondary: {
            ...defaultConfig.secondaryButtonStyles,
            ...(buttonGlobalStyles || {}).secondaryButtonStyles
        }
    };
    const classes = StyleSheet.create(styles(mergedComponentStyles));
    const buttonStylesConfigSpec = {
        textColor: ElementPropTypes.color.isRequired,
        hoverTextColor: ElementPropTypes.color.isRequired,
        backgroundColor: ElementPropTypes.color.isRequired,
        hoverBackgroundColor: ElementPropTypes.color.isRequired,
        borderColor: ElementPropTypes.color.isRequired,
        hoverBorderColor: ElementPropTypes.color.isRequired,
        fontWeight: ElementPropTypes.oneOf([
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900'
        ]).isRequired,
        textTransform: ElementPropTypes.oneOf([
            'none',
            'capitalize',
            'lowercase',
            'uppercase'
        ]).isRequired,
        borderThickness: ElementPropTypes.oneOf([
            'basic',
            'thin',
            'thick',
            'none'
        ]).isRequired,
        size: ElementPropTypes.oneOf([
            'small',
            'medium',
            'large',
            'xlarge',
            'block'
        ]).isRequired,
        rounded: ElementPropTypes.oneOf([
            'none',
            'small',
            'medium',
            'large',
            'pill'
        ]).isRequired,
        growOnHover: ElementPropTypes.bool.isRequired
    };
    const configSpec = {
        children: ElementPropTypes.array,
        primaryButtonStyles: ElementPropTypes.shape(buttonStylesConfigSpec),
        secondaryButtonStyles: ElementPropTypes.shape(buttonStylesConfigSpec)
    };

    const component = class extends React.Component {
        configClasses = ({
            fontWeight,
            letterSpacing,
            textTransform,
            borderThickness,
            size,
            rounded,
            growOnHover
        }) => {
            const base = classes.baseStyles;
            const borders = {
                basic: classes.borderBasic,
                thin: classes.borderThin,
                thick: classes.borderThick,
                none: classes.borderNone
            };
            const sizes = {
                small: classes.sizeSmall,
                medium: classes.sizeMedium,
                large: classes.sizeLarge,
                xlarge: classes.sizeXLarge,
                block: classes.sizeBlock
            };
            const corners = {
                none: classes.cornerNone,
                small: classes.cornerSmall,
                medium: classes.cornerMedium,
                large: classes.cornerLarge,
                pill: classes.cornerPill
            };
            const weight = {
                300: classes.weight300,
                400: classes.weight400,
                500: classes.weight500,
                600: classes.weight600,
                700: classes.weight700,
                800: classes.weight800,
                900: classes.weight900
            };
            const text = {
                none: classes.textTransformNone,
                capitalize: classes.textTransformCapitalize,
                lowercase: classes.textTransformLowercase,
                uppercase: classes.textTransformUppercase
            };

            const spacing = {
                none: null,
                tracked: classes.spacingTracked,
                tight: classes.spacingTight,
                mega: classes.spacingMega
            };

            const grow = growOnHover ? classes.grow : null;

            /* eslint-disable security/detect-object-injection */
            return css(
                base,
                text[textTransform],
                weight[fontWeight],
                borders[borderThickness],
                sizes[size],
                corners[rounded],
                spacing[letterSpacing],
                grow
            );
            /* eslint-enable security/detect-object-injection */
        };

        getButtonClasses = (role, styles) => {
            const baseStyles = this.configClasses(styles);
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

        render() {
            const { children, buttonStyle, className, ...rest } = this.props;
            const classExtensions = className ? className : '';
            const styles =
                buttonStyle === 'secondary'
                    ? mergedComponentStyles.secondary
                    : mergedComponentStyles.primary;
            return (
                <React.Fragment>
                    {this.props.href ? (
                        <a
                            className={`${this.getButtonClasses(
                                buttonStyle,
                                styles
                            )} ${classExtensions}`}
                            {...rest}
                        >
                            {children}
                        </a>
                    ) : (
                        <button
                            className={`${this.getButtonClasses(
                                buttonStyle,
                                styles
                            )} ${classExtensions}`}
                            {...rest}
                        >
                            {children}
                        </button>
                    )}
                </React.Fragment>
            );
        }
    };

    component.propTypes = {
        className: PropTypes.string,
        buttonStyle: PropTypes.string,
        extendClasses: PropTypes.string,
        href: PropTypes.string,
        ...configSpec
    };

    return {
        component,
        config: configSpec
    };
};

export { factory, defaultConfig, name };
