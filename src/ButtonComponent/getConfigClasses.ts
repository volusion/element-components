import { BaseButtonStylesConfig } from './types';

export const getConfigClasses = (
    aphroditeProps: any,
    {
        fontWeight,
        letterSpacing,
        textTransform,
        borderThickness,
        size,
        rounded,
        growOnHover
    }: BaseButtonStylesConfig
): any => {
    const { classes, css } = aphroditeProps;
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

    /* eslint-disable security/detect-object-injection */
    return css(
        base,
        text[textTransform],
        weight[fontWeight],
        borders[borderThickness],
        sizes[size],
        corners[rounded],
        spacing[letterSpacing],
        grow
    );
    /* eslint-enable security/detect-object-injection */
};
