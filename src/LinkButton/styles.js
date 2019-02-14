export default (
    name,
    { color, typography },
    {
        textColor,
        backgroundColor,
        borderColor,
        hoverTextColor,
        hoverBackgroundColor,
        hoverBorderColor
    }
) => {
    const styles = {
        linkButton: {
            fontFamily: typography.fontFamily,
            backgroundColor: backgroundColor || color.primary,
            borderColor: borderColor || color.primary,
            color: textColor || 'white'
        },
        hover: {
            ':hover': {
                backgroundColor: hoverBackgroundColor || color.primary,
                borderColor: hoverBorderColor || color.primary,
                color: hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        }
    };

    return styles;
};
