import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { render } from '@testing-library/react';
import { block as Block } from '../src/';
import { defaultConfig } from '../src/configs';
import { ElementBlockProps } from '../src/types';

const props: ElementBlockProps = {
    ...defaultConfig,
    children: 'TEST_CHILD',
    globalSettings: {}
};

describe('The ElementBlock component', () => {
    StyleSheetTestUtils.suppressStyleInjection();

    it('should match the snapshot', () => {
        const { container } = render(<Block {...props} />);
        expect(container).toMatchSnapshot();
    });

    describe('when there are no children', () => {
        it('should return null', () => {
            const { container } = render(<Block {...props} children={undefined} />);
            expect(container.firstChild).toBeNull();
        });
    });

    describe('when the custom attribute does not have a valid name', () => {
        it('should not apply the attribute to the element', () => {
            const customAttrs = [{ name: '', value: 'TEST_VALUE' }];
            const { container } = render(
                <Block {...props} customAttrs={customAttrs} />
            );
            const div = container.querySelector('div');
            expect(Object.keys(div?.dataset || {})).toHaveLength(0);
        });
    });

    describe('when the custom attribute has a valid name', () => {
        it('should apply the attribute to the element', () => {
            const customAttrs = [{ name: 'TEST_NAME', value: 'TEST_VALUE' }];
            const { container } = render(
                <Block {...props} customAttrs={customAttrs} />
            );
            const div = container.querySelector('[data-element-test-name="TEST_VALUE"]');
            expect(div).toBeInTheDocument();
        });
    });
});
