import styles from './styles';

const name = 'volComponentLinkButton';

const defaultConfig = {
    linkButtonStyles: {
        textColor: '#fff',
        textTransform: 'uppercase',
        backgroundColor: '#333',
        borderColor: '#333',
        hoverTextColor: '#fff',
        hoverBackgroundColor: '#444',
        hoverBorderColor: '#444',
        borderThickness: 'basic',
        size: 'large',
        rounded: 'none',
        growOnHover: false
    }
};

const factory = (
    { React, ElementPropTypes },
    { StyleSheet, css },
    globalStyles
) => {
    const mergedComponentStyles = {
        ...defaultConfig.linkButtonStyles,
        ...(globalStyles.globalComponents['volComponentLinkButton'] || {})
            .linkButtonStyles
    };
    const classes = StyleSheet.create(
        styles(name, globalStyles, mergedComponentStyles)
    );

    const configSpec = {
        children: ElementPropTypes.array,
        linkButtonStyles: ElementPropTypes.shape({
            textColor: ElementPropTypes.color.isRequired,
            textTransform: ElementPropTypes.oneOf(['uppercase', 'none'])
                .isRequired,
            backgroundColor: ElementPropTypes.color.isRequired,
            borderColor: ElementPropTypes.color.isRequired,
            hoverTextColor: ElementPropTypes.color,
            hoverBackgroundColor: ElementPropTypes.color,
            hoverBorderColor: ElementPropTypes.color,
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
            const text = {
                none: '',
                uppercase: 'ttu'
            };
            const grow = growOnHover ? 'grow' : '';

            /* eslint-disable security/detect-object-injection */
            return `${base} ${text[textTransform]} ${borders[borderThickness]} ${sizes[size]} ${corners[rounded]} ${grow}`;
            /* eslint-enable security/detect-object-injection */
        };

        render() {
            const { children, ...rest } = this.props;
            return (
                <a
                    className={`tc ${this.configClasses(
                        mergedComponentStyles
                    )} ${css(classes.linkButton, classes.hover)}`}
                    {...rest}
                >
                    {children}
                </a>
            );
        }
    };

    return {
        component,
        config: configSpec
    };
};

export { factory, defaultConfig, name };
