import React from 'react';
import { mount } from 'enzyme';
import { block as Logo, LogoProps } from './index';
import { defaultConfig } from './config';
import { block as Text } from '../Text';
import { block as Image } from '../Image';
import { mockGlobalSettings as globalSettings } from '../__fixtures__/mockGlobalSettings';

describe('Logo component', () => {
    let props: LogoProps;

    beforeEach(() => {
        props = {
            ...defaultConfig,
        };
    });

    it('renders a text logo', () => {
        const textProps = {
            globalSettings,
            htmlString: 'Test Store Name',
        };
        const TextComponent = () => <Text {...textProps}  />;
        props.StoreName = TextComponent;

        const renderedTextLogo = mount(<Logo {...props} />);
        expect(renderedTextLogo.render()).toMatchSnapshot();
    });

    it('renders an image logo', () => {
        const imageProps = {
            globalSettings,
            src: 'http://example.com/test.jpg',
            alt: '',
            title: '',
            height: 10,
            width: 10,
            utils: {
                isAmpRequest: false
            }
        };
        const ImageComponent = () => <Image {...imageProps} />;
        props.style = 'Image';
        props.Image = ImageComponent;

        const renderedImageLogo = mount(<Logo {...props} />);
        expect(renderedImageLogo.render()).toMatchSnapshot();
    });
});