import { ElementBlockStylesProps, ObjectLiteral } from './types';

export const getStyles = (
    blockConfig: ElementBlockStylesProps,
    globalSettings: ObjectLiteral
) => {
    const mobileStyles =
        blockConfig.showOnMobile === false
            ? {
                  '@media only screen and (max-width: 30em)': {
                      display: 'none'
                  }
              }
            : {};
    const tabletStyles =
        blockConfig.showOnTablet === false
            ? {
                  '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                      display: 'none'
                  }
              }
            : {};
    const desktopStyles =
        blockConfig.showOnDesktop === false
            ? {
                  '@media only screen and (min-width: 60em)': {
                      display: 'none'
                  }
              }
            : {};
    return {
        wrapper: {
            width: '100%',
            maxWidth: blockConfig.isFullWidth
                ? undefined
                : globalSettings.__________,
            paddingRight: blockConfig.hasHorizontalPadding
                ? globalSettings.__________
                : undefined,
            paddingLeft: blockConfig.hasHorizontalPadding
                ? globalSettings.__________
                : undefined,
            paddingTop: getPaddingAmount(
                blockConfig.topPadding,
                globalSettings
            ),
            paddingBottom: getPaddingAmount(
                blockConfig.bottomPadding,
                globalSettings
            ),
            ...mobileStyles,
            ...tabletStyles,
            ...desktopStyles
        }
    };
};

const getPaddingAmount = (
    paddingSize: 'None' | 'Small' | 'Medium' | 'Large',
    globalSettings: ObjectLiteral
) => {
    if (/^small$/i.test(paddingSize)) return globalSettings.__________;
    if (/^medium$/i.test(paddingSize)) return globalSettings.__________;
    if (/^large$/i.test(paddingSize)) return globalSettings.__________;
};
