import { ElementBlockConfigs } from './types';
import { ElementPropTypes } from '@volusion/element-proptypes';

export const configSchema = {
    isFullWidth: {
        label: `Full width`,
        type: ElementPropTypes.bool
    },
    hasHorizontalPadding: {
        label: `Horizontal spacing`,
        type: ElementPropTypes.bool
    },
    topPadding: {
        label: `Top spacing`,
        type: ElementPropTypes.oneOf(['None', 'Small', 'Medium', 'Large'])
    },
    bottomPadding: {
        label: `Top spacing`,
        type: ElementPropTypes.oneOf(['None', 'Small', 'Medium', 'Large'])
    },
    showOnDesktop: {
        label: `Show on desktop`,
        type: ElementPropTypes.bool
    },
    showOnTablet: {
        label: `Show on tablet`,
        type: ElementPropTypes.bool
    },
    showOnMobile: {
        label: `Show on mobile`,
        type: ElementPropTypes.bool
    },
    customAttrs: {
        label: `Custom element attributes`,
        type: ElementPropTypes.arrayOf(
            ElementPropTypes.shape({
                name: {
                    label: `Name`,
                    type: ElementPropTypes.string
                },
                value: {
                    label: `Value`,
                    type: ElementPropTypes.string
                }
            })
        )
    }
};

export const defaultConfig: ElementBlockConfigs = {
    isFullWidth: false,
    hasHorizontalPadding: true,
    topPadding: 'Small',
    bottomPadding: 'Small',
    showOnDesktop: true,
    showOnTablet: true,
    showOnMobile: true,
    customAttrs: [
        {
            name: '',
            value: ''
        }
    ]
};
