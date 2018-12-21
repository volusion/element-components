import styles from './styles';

const name = 'volComponentInput';

const defaultConfig = {
    inputType: 'text',
    placeholderText: '',
    styles: {
        textColor: '#2e2e2e',
        textTransform: 'none', // none, uppercase
        backgroundColor: 'transparent',
        borderColor: '#2e2e2e',
        focusBackgroundColor: 'transparent',
        focusBorderColor: '#2e2e2e',
        borderThickness: 'basic', // basic, thin, thick, none
        size: 'large', // small, medium, large
        rounded: 'none' // none, small, medium, large, pill
    }
};

const factory = (
    { React, ElementPropTypes },
    { StyleSheet, css },
    globalStyles
) => {
    const mergedComponentStyles = {
        ...defaultConfig.styles,
        ...(globalStyles.globalComponents['volComponentInput'] || {}).styles
    };
    const classes = StyleSheet.create(
        styles(name, globalStyles, mergedComponentStyles)
    );

    const configSpec = {
        placeholderText: ElementPropTypes.string,
        inputType: ElementPropTypes.string,
        styles: ElementPropTypes.shape({
            textColor: ElementPropTypes.string.isRequired,
            textTransform: ElementPropTypes.oneOf(['uppercase', 'none'])
                .isRequired,
            backgroundColor: ElementPropTypes.string.isRequired,
            borderColor: ElementPropTypes.string.isRequired,
            focusBackgroundColor: ElementPropTypes.string,
            focusBorderColor: ElementPropTypes.string,
            borderThickness: ElementPropTypes.oneOf([
                'basic',
                'thin',
                'thick',
                'none'
            ]).isRequired,
            size: ElementPropTypes.oneOf(['small', 'medium', 'large'])
                .isRequired,
            rounded: ElementPropTypes.oneOf([
                'none',
                'small',
                'medium',
                'large',
                'pill'
            ]).isRequired
        })
    };

    const component = class extends React.Component {
        static propTypes = configSpec;

        configClasses = ({ textTransform, borderThickness, size, rounded }) => {
            const base = 'link dib pointer bg-animate';
            const borders = {
                basic: 'ba bw1',
                thin: 'ba',
                thick: 'ba bw2',
                none: 'bn'
            };
            const sizes = {
                small: 'f7 pa1',
                medium: 'f6 pa2',
                large: 'f5 pa3'
            };
            const corners = {
                none: 'br0',
                small: 'br1',
                medium: 'br2',
                large: 'br3',
                pill: 'br-pill'
            };
            const text = {
                none: '',
                uppercase: 'ttu'
            };

            /* eslint-disable security/detect-object-injection */
            return `${base} ${text[textTransform]} ${
                borders[borderThickness]
            } ${sizes[size]} ${corners[rounded]}`;
            /* eslint-enable security/detect-object-injection */
        };

        render() {
            const { placeholderText, inputType } = this.props;
            return (
                <input
                    type={inputType}
                    placeholder={placeholderText}
                    className={`${this.configClasses(
                        mergedComponentStyles
                    )} ${css(classes.input, classes.focus)}`}
                />
            );
        }
    };
    return {
        component,
        config: configSpec
    };
};

export { factory, defaultConfig, name };
