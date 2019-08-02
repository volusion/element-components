export const name = 'ElementImage';

export const defaultConfig = {};

export const factory = ({ React }) => {
    const ElementImage = props => <img {...props} />;

    return {
        component: ElementImage,
        config: {}
    };
};
