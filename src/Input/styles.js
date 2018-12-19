export default (
    name,
    { color, typography },
    {
        textColor,
        backgroundColor,
        borderColor,
        focusBackgroundColor,
        focusBorderColor
    }
) => {
    const styles = {
        input: {
            fontFamily: typography.fontFamily,
            backgroundColor: backgroundColor || color.primary,
            borderColor: borderColor || color.primary,
            color: textColor || 'inherit'
        },
        focus: {
            ':focus': {
                outline: 'none',
                backgroundColor: focusBackgroundColor || color.primary,
                borderColor: focusBorderColor || color.primary
            }
        }
    };

    return styles;
};
