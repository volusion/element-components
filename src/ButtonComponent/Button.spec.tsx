import React from 'react';
import { mount, render } from 'enzyme';
import { block as ButtonComponent, defaultConfig } from './index';
import { ButtonProps } from './types';
import { mockGlobalSettings as globalSettings } from '../__fixtures__/mockGlobalSettings';

describe('Button component', () => {
    let props: ButtonProps;

    beforeEach(() => {
        props = {
            ...defaultConfig,
            globalSettings
        };
    });

    it('matches snapshot', () => {
        const rendered = render(<ButtonComponent {...props} />);
        expect(rendered).toMatchSnapshot();
    });

    it('uses LinkButton when "href" is passed', () => {
        const href = '#';
        const rendered = mount(<ButtonComponent {...props} href={href} />);
        expect(rendered.find('a').exists()).toBe(true);
    });

    it('uses StandardButton when no "href" is passed', () => {
        const href = '';
        const rendered = mount(<ButtonComponent {...props} href={href} />);
        expect(rendered).toMatchSnapshot();
        expect(rendered.find('a').exists()).toBe(false);
    });
});
