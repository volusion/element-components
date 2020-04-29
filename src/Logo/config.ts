import { ElementPropTypes } from '@volusion/element-proptypes';

export const defaultConfig = {
  style: 'text',
};

export const configSchema = {
  style: {
    label: 'Style',
    type: ElementPropTypes.oneOf(['text', 'image']),
  },
  Image: {
    label: 'Image',
    type: ElementPropTypes.component('Image'),
  },
  StoreName: {
    label: 'Store Name',
    type: ElementPropTypes.component('Text'),
  }
};