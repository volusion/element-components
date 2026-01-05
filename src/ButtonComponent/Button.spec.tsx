import React from 'react';
import { render } from '@testing-library/react';
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
        const { container } = render(<ButtonComponent {...props} />);
        expect(container).toMatchSnapshot();
    });

    it('uses LinkButton when "href" is passed', () => {
        const href = '#';
        const { container } = render(
            <ButtonComponent {...props} href={href} />
        );
        const link = container.querySelector('a');
        expect(link).toBeInTheDocument();
    });

    it('uses StandardButton when no "href" is passed', () => {
        const href = '';
        const { container } = render(
            <ButtonComponent {...props} href={href} />
        );
        expect(container).toMatchSnapshot();
        const link = container.querySelector('a');
        expect(link).not.toBeInTheDocument();
    });
});
