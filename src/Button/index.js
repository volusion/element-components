import PropTypes from 'prop-types';
import styles from './styles';

const name = 'volComponentButton';

const defaultConfig = {
    buttonType: 'button',
    buttonRole: 'primary',
    extendClasses: '',
    primaryButtonStyles: {
        textColor: '#fff',
        hoverTextColor: '#fff',
        backgroundColor: '#333',
        hoverBackgroundColor: '#555',
        borderColor: '#333333',
        hoverBorderColor: '#555',
        fontWeight: '700',
        textTransform: 'none', // none, uppercase
        borderThickness: 'basic', // basic, thin, thick, none
        size: 'medium', // small, medium, large, block
        rounded: 'medium', // none, small, medium, large, pill
        growOnHover: false
    },
    secondaryButtonStyles: {
        textColor: '#666',
        hoverTextColor: '#333',
        backgroundColor: '#fff',
        hoverBackgroundColor: '#f2f2f2',
        borderColor: '#666',
        hoverBorderColor: '#333',
        fontWeight: '700',
        textTransform: 'none', // none, uppercase
        borderThickness: 'basic', // basic, thin, thick, none
        size: 'medium', // small, medium, large, block
        rounded: 'medium', // none, small, medium, large, pill
        growOnHover: false
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
    const configSpec = {
        buttonType: PropTypes.string,
        buttonRole: PropTypes.string,
        extendClasses: PropTypes.string,
        children: ElementPropTypes.array,
        primaryButtonStyles: ElementPropTypes.shape({
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
            textTransform: ElementPropTypes.oneOf(['uppercase', 'none'])
                .isRequired,
            borderThickness: ElementPropTypes.oneOf([
                'basic',
                'thin',
                'thick',
                'none'
            ]).isRequired,
            size: ElementPropTypes.oneOf(['small', 'medium', 'large', 'block'])
                .isRequired,
            rounded: ElementPropTypes.oneOf([
                'none',
                'small',
                'medium',
                'large',
                'pill'
            ]).isRequired,
            growOnHover: ElementPropTypes.bool.isRequired
        }),
        secondaryButtonStyles: ElementPropTypes.shape({
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
            textTransform: ElementPropTypes.oneOf(['uppercase', 'none'])
                .isRequired,
            borderThickness: ElementPropTypes.oneOf([
                'basic',
                'thin',
                'thick',
                'none'
            ]).isRequired,
            size: ElementPropTypes.oneOf(['small', 'medium', 'large', 'block'])
                .isRequired,
            rounded: ElementPropTypes.oneOf([
                'none',
                'small',
                'medium',
                'large',
                'pill'
            ]).isRequired,
            growOnHover: ElementPropTypes.bool.isRequired
        })
    };

    const component = class extends React.Component {
        static propTypes = configSpec;

        configClasses = ({
            fontWeight,
            textTransform,
            borderThickness,
            size,
            rounded,
            growOnHover
        }) => {
            const base = 'link dib pointer';
            const borders = {
                basic: 'ba bw1',
                thin: 'ba',
                thick: 'ba bw2',
                none: 'bn'
            };
            const sizes = {
                small: 'f7 ph2 pv1',
                medium: 'f6 ph3 pv2',
                large: 'f5 ph4 pv3',
                block: 'f5 ph4 pv3 w-100 measure tracked'
            };
            const corners = {
                none: 'br0',
                small: 'br1',
                medium: 'br2',
                large: 'br3',
                pill: 'br-pill'
            };
            const weight = {
                300: 'fw3',
                400: 'fw4',
                500: 'fw5',
                600: 'fw6',
                700: 'fw7',
                800: 'fw8',
                900: 'fw9'
            };
            const text = {
                none: 'ttn',
                uppercase: 'ttu'
            };
            const grow = growOnHover ? 'grow' : '';

            /* eslint-disable security/detect-object-injection */
            return `${base} ${text[textTransform]} ${weight[fontWeight]} ${
                borders[borderThickness]
            } ${sizes[size]} ${corners[rounded]} ${grow}`;
            /* eslint-enable security/detect-object-injection */
        };

        getButtonClasses = (role, styles) => {
            const baseStyles = `tc link ${this.configClasses(styles)}`;
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
            const { children, buttonRole, buttonType, ...rest } = this.props;
            const styles =
                buttonRole === 'secondary'
                    ? mergedComponentStyles.secondary
                    : mergedComponentStyles.primary;
            return (
                <React.Fragment>
                    {buttonType === 'button' && (
                        <button
                            className={this.getButtonClasses(
                                buttonRole,
                                styles
                            )}
                            {...rest}
                        >
                            {children}
                        </button>
                    )}
                    {buttonType === 'link' && (
                        <a
                            className={this.getButtonClasses(
                                buttonRole,
                                styles
                            )}
                            {...rest}
                        >
                            {children}
                        </a>
                    )}
                </React.Fragment>
            );
        }
    };

    return {
        component,
        config: configSpec
    };
};

export { factory, defaultConfig, name };
