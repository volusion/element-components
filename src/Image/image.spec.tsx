import React from 'react';
import { mount, render } from 'enzyme';
import { block as Image, ImageProps } from './index';
import { defaultConfig } from './configs';
import { mockGlobalSettings as globalSettings } from '../__fixtures__/mockGlobalSettings';

describe('Image component', () => {
    let props: ImageProps;

    beforeEach(() => {
        props = {
            ...defaultConfig,
            globalSettings,
            utils: {
                isAmpRequest: false
            }
        };
    });

    it('matches snapshot', () => {
        const rendered = render(<Image {...props} />);
        expect(rendered).toMatchSnapshot();
    });

    it('should have an img tag when a normal request', () => {
        const image = mount(<Image {...props} />);
        expect(image.find('img').exists()).toBeTruthy();
    });

    it('should have an amp-img tag when an AMP request', () => {
        props.utils.isAmpRequest = true;
        const image = mount(<Image {...props} />);
        expect(image.find('img').exists()).toBeFalsy();
        expect(image.find('amp-img').exists()).toBeTruthy();
        expect(image.render()).toMatchSnapshot();
    });

    it('should change src, alt text, and title when given props', () => {
        props.alt = 'fake alt text';
        props.title = 'fake title';
        props.src = 'https://www.fakeimgsrc.com/fake/image.jpg';
        const image = mount(<Image {...props} />);
        expect(image.find('img').prop('alt')).toEqual(props.alt);
        expect(image.find('img').prop('title')).toEqual(props.title);
        expect(image.find('img').prop('src')).toEqual(props.src);
        expect(image.render()).toMatchSnapshot();
    });
});
