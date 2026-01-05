import React from 'react';
import { render } from '@testing-library/react';
import { block as Text, defaultConfig } from './index';
import { mockGlobalSettings as globalSettings } from '../__fixtures__/mockGlobalSettings';

describe('The <Text /> Component', () => {
    const renderWithContent = (content: string) => {
        const { container } = render(
            <Text htmlString={content} globalSettings={globalSettings} />
        );
        return container;
    };

    describe('with default props', () => {
        it('matches the snapshot', () => {
            const rendered = renderWithContent(defaultConfig.htmlString);
            expect(rendered).toMatchSnapshot();
        });
    });

    describe('with empty content', () => {
        it('matches the snapshot', () => {
            expect(renderWithContent('')).toMatchSnapshot();
        });
    });

    describe('with custom content', () => {
        it('matches the snapshot', () => {
            expect(
                renderWithContent('<h1>Test Content</h1>')
            ).toMatchSnapshot();
            expect(renderWithContent('Test Content')).toMatchSnapshot();
            expect(renderWithContent('<p>Test Content</p>')).toMatchSnapshot();
        });
    });
});
