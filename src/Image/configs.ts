import { ElementPropTypes } from '@volusion/element-proptypes';

export const defaultConfig = {
    alt: '',
    height: 270,
    src: '',
    title: '',
    width: 360
};

export const configSchema = {
    src: {
        label: 'Image',
        type: ElementPropTypes.string.required
    },
    title: {
        label: 'Title',
        type: ElementPropTypes.string
    },
    altText: {
        label: 'Alt Text',
        type: ElementPropTypes.string.required
    },
    width: {
        label: 'Width',
        type: ElementPropTypes.string
    },
    height: {
        label: 'Height',
        type: ElementPropTypes.string
    }
};
