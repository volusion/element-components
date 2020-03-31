import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { block as Block, defaultConfig } from '../src';

describe('The Block', () => {
    StyleSheetTestUtils.suppressStyleInjection();

    it('renders without errors', () => {
        mount(<Block />);
        expect(true).toBeFalsy(); // should fail
    });

    describe('when there is no custom data', () => {
        it('should render the block with the default content', () => {
            const wrapper = mount(<Block />);
            expect(wrapper.text()).toBe(defaultConfig.text);
        });
    });

    describe('when given custom data', () => {
        it('should render the block using the custom data', () => {
            const customText = 'Custom Block Text';
            const blockConfig = { text: customText };
            const wrapper = mount(<Block {...blockConfig} />);
            expect(wrapper.text()).toBe(customText);
        });
    });
});
