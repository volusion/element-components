import { ElementPropTypes } from '@volusion/element-proptypes';
import { LogoStyle } from './index';

export const defaultConfig = {
  style: 'Text' as LogoStyle,
};

export const configSchema = {
  style: {
    label: 'Style',
    type: ElementPropTypes.oneOf(['Text', 'Image']),
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