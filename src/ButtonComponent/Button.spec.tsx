import React from 'react';
import { mount, render } from 'enzyme';
import { block as ButtonComponent, defaultConfig } from './index';
import { ButtonProps } from './types';

describe('Button component', () => {
    let props: ButtonProps;

    beforeEach(() => {
        props = {
            ...defaultConfig,
            globalSettings: {
                globalComponents: {
                    volComponentButton: {
                        primaryButtonStyles: {
                            size: 'large',
                            rounded: 'none',
                            textColor: '#fff',
                            fontWeight: '700',
                            borderColor: 'rgba(247, 67, 186, 1)',
                            growOnHover: true,
                            letterSpacing: 'none',
                            textTransform: 'none',
                            hoverTextColor: '#fff',
                            backgroundColor: 'rgba(247, 68, 186, 1)',
                            borderThickness: 'none',
                            hoverBorderColor: 'rgba(0, 0, 0, 1)',
                            hoverBackgroundColor: 'rgba(218, 15, 148, 1)'
                        },
                        secondaryButtonStyles: {
                            size: 'large',
                            rounded: 'none',
                            textColor: '#fff',
                            fontWeight: '700',
                            borderColor: 'rgba(247, 67, 186, 1)',
                            growOnHover: true,
                            letterSpacing: 'none',
                            textTransform: 'none',
                            hoverTextColor: '#fff',
                            backgroundColor: 'rgba(247, 68, 186, 1)',
                            borderThickness: 'none',
                            hoverBorderColor: 'rgba(0, 0, 0, 1)',
                            hoverBackgroundColor: 'rgba(218, 15, 148, 1)'
                        }
                    }
                }
            }
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
        expect(rendered.find('a').exists()).toBe(false);
    });
});
