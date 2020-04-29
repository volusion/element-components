import { ElementPropTypes } from '@volusion/element-proptypes';
import { LogoStyle } from './index';

export const defaultConfig = {
  style: 'text' as LogoStyle,
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