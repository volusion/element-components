import React from 'react';
import { mount, render } from 'enzyme';
import { block as Image, ImageProps } from './index';
import { defaultConfig } from './configs';

describe('Image component', () => {
  let props: ImageProps;

  beforeEach(() => {
    props = {
      ...defaultConfig,
      globalSettings: {},
      utils: {
        isAmpRequest: false
      }
    };
  });

  it('matches snapshot', () => {
    const rendered = render(<Image {...props} />);
    expect(rendered).toMatchSnapshot();
  });

  it('should have an img tag when not a normal request', () => {
    const image = mount(<Image {...props} />);
    expect(image.find('img').exists()).toBeTruthy();
  });

  it('should have an amp-img tag when an AMP request', () => {
    props.utils.isAmpRequest = true;
    const image = mount(<Image {...props} />);
    expect(image.find('img').exists()).toBeFalsy();
    expect(image.find('amp-img').exists()).toBeTruthy();
  });

  it('should change alt text and title when given props', () => {
    props.alt = 'fake alt text';
    props.title = 'fake title';
    const image = mount(<Image {...props} />);
    expect(image.find('img').prop('alt')).toEqual(props.alt);
    expect(image.find('img').prop('title')).toEqual(props.title);
    expect(image.render()).toMatchSnapshot();
  });
});