import React from 'react';
import { render } from '@testing-library/react';
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
        const { container } = render(<Image {...props} />);
        expect(container).toMatchSnapshot();
    });

    it('should have an img tag when a normal request', () => {
        const { container } = render(<Image {...props} />);
        const img = container.querySelector('img');
        expect(img).toBeInTheDocument();
    });

    it('should have an amp-img tag when an AMP request', () => {
        props.utils.isAmpRequest = true;
        const { container } = render(<Image {...props} />);
        const img = container.querySelector('img');
        const ampImg = container.querySelector('amp-img');
        expect(img).not.toBeInTheDocument();
        expect(ampImg).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should change src, alt text, and title when given props', () => {
        props.alt = 'fake alt text';
        props.title = 'fake title';
        props.src = 'https://www.fakeimgsrc.com/fake/image.jpg';
        const { container } = render(<Image {...props} />);
        const img = container.querySelector('img');
        expect(img).toHaveAttribute('alt', props.alt);
        expect(img).toHaveAttribute('title', props.title);
        expect(img).toHaveAttribute('src', props.src);
        expect(container).toMatchSnapshot();
    });
});
