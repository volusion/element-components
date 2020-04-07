import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { block as Block } from '../src/';
import { defaultConfig } from '../src/configs';
import { ElementBlockProps } from '../src/types';

let props: ElementBlockProps = {
    ...defaultConfig,
    children: 'TEST_CHILD',
    globalSettings: {}
};
describe('The ElementBlock component', () => {
    StyleSheetTestUtils.suppressStyleInjection();

    it('should match the snapshot', () => {
        const wrapper = mount(<Block {...props} />);
        expect(wrapper.render()).toMatchSnapshot();
    });
    describe('when there are no children', () => {
        it('should return null', () => {
            const wrapper = mount(<Block {...props} children={undefined} />);
            expect(wrapper.isEmptyRender()).toBeTruthy();
        });
    });
    describe('when the custom attribute does not have a valid name', () => {
        it('should not apply the attribute to the element', () => {
            const customAttrs = [{ name: '', value: 'TEST_VALUE' }];
            const wrapper = mount(<Block {...props} customAttrs={customAttrs} />);
            expect(Object.keys(wrapper.find('div').props())).toHaveLength(2); // ["className", "children"]
        });
    });
    describe('when the custom attribute has a valid name', () => {
        it('should apply the attribute to the element', () => {
            const customAttrs = [{ name: 'TEST_NAME', value: 'TEST_VALUE' }];
            const wrapper = mount(<Block {...props} customAttrs={customAttrs} />);
            expect(wrapper.exists(`[data-element-test-name="TEST_VALUE"]`)).toBeTruthy();
        });
    });
});
