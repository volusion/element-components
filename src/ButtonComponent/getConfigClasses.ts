import { BaseButtonStylesConfig } from './types';
import { AphroditeProps } from '../../types';

export const getConfigClasses = (
    // TODO Remove 'any' type
    aphroditeProps: AphroditeProps,
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
    const base = classes.baseStyles;
    const borders = {
        basic: classes.borderBasic,
        thin: classes.borderThin,
        thick: classes.borderThick,
        none: classes.borderNone
    };
    const sizes = {
        small: classes.sizeSmall,
        medium: classes.sizeMedium,
        large: classes.sizeLarge,
        block: classes.sizeBlock
    };
    const corners = {
        none: classes.cornerNone,
        small: classes.cornerSmall,
        medium: classes.cornerMedium,
        large: classes.cornerLarge,
        pill: classes.cornerPill
    };
    const weight = {
        300: classes.weight300,
        400: classes.weight400,
        500: classes.weight500,
        600: classes.weight600,
        700: classes.weight700,
        800: classes.weight800,
        900: classes.weight900
    };
    const text = {
        none: classes.textTransformNone,
        capitalize: classes.textTransformCapitalize,
        lowercase: classes.textTransformLowercase,
        uppercase: classes.textTransformUppercase
    };

    const spacing = {
        none: null,
        tracked: classes.spacingTracked,
        tight: classes.spacingTight,
        mega: classes.spacingMega
    };

    const grow = growOnHover ? classes.grow : null;

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
