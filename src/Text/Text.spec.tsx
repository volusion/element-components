import React from 'react';
import { mount, render } from 'enzyme';
import { block as Text, defaultConfig } from './index';
/* import { mockGlobalSettings as globalSettings } from '../__fixtures__/mockGlobalSettings'; */

describe('The <Text /> Component', () => {
    /* let props: ImageProps; */

    /* beforeEach(() => { */
    /*     props = { */
    /*         ...defaultConfig, */
    /*         globalSettings, */
    /*         utils: { */
    /*             isAmpRequest: false */
    /*         } */
    /*     }; */
    /* }); */

    it('matches the snapshot', () => {
        mount(<Text {...defaultConfig} />)
    });
});

