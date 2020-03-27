import { BaseButtonStylesConfig } from './types';
import { css } from 'aphrodite';

export const getConfigClasses = (
    classes: any,
    {
        fontWeight,
        letterSpacing,
        textTransform,
        borderThickness,
        size,
        rounded,
        growOnHover
    }: BaseButtonStylesConfig
): string => {
    const base: any = classes.baseStyles;

    const borders: any = {
        basic: classes.borderBasic,
        thin: classes.borderThin,
        thick: classes.borderThick,
        none: classes.borderNone
    };
    const sizes: any = {
        small: classes.sizeSmall,
        medium: classes.sizeMedium,
        large: classes.sizeLarge,
        block: classes.sizeBlock
    };
    const corners: any = {
        none: classes.cornerNone,
        small: classes.cornerSmall,
        medium: classes.cornerMedium,
        large: classes.cornerLarge,
        pill: classes.cornerPill
    };
    const weight: any = {
        300: classes.weight300,
        400: classes.weight400,
        500: classes.weight500,
        600: classes.weight600,
        700: classes.weight700,
        800: classes.weight800,
        900: classes.weight900
    };
    const text: any = {
        none: classes.textTransformNone,
        capitalize: classes.textTransformCapitalize,
        lowercase: classes.textTransformLowercase,
        uppercase: classes.textTransformUppercase
    };
    const spacing: any = {
        none: null,
        tracked: classes.spacingTracked,
        tight: classes.spacingTight,
        mega: classes.spacingMega
    };

    const grow: any = growOnHover ? classes.grow : null;

    const getValue = (obj: {}, key: string): any => {
        const keys = Object.keys(obj);
        const values = Object.values(obj);
        return values[keys.indexOf(key)];
    };

    return css(
        base,
        getValue(text, textTransform),
        getValue(weight, fontWeight),
        getValue(borders, borderThickness),
        getValue(sizes, size),
        getValue(corners, rounded),
        getValue(spacing, letterSpacing),
        grow
    );
};
