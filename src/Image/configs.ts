import { ElementPropTypes } from '@volusion/element-proptypes';

export const defaultConfig = {
    alt: '',
    height: 270,
    src:
        'https://res.cloudinary.com/dyx4yhvoq/image/upload/v1545428185/images/tcp-no-image.jpg',
    title: '',
    width: 360
};

export const configSchema = {
    src: {
        label: 'Image',
        type: ElementPropTypes.string
    },
    title: {
        label: 'Title',
        type: ElementPropTypes.string
    },
    altText: {
        label: 'Alt Text',
        type: ElementPropTypes.string
    },
    width: {
        label: 'Width',
        type: ElementPropTypes.number
    },
    height: {
        label: 'Height',
        type: ElementPropTypes.number
    }
};
