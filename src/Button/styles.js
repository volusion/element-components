export default ({ primary, secondary }) => {
    console.log('primary', primary); // eslint-disable-line
    console.log('secondary', secondary); // eslint-disable-line

    return {
        primaryButton: {
            backgroundColor: primary.backgroundColor,
            borderColor: primary.borderColor,
            color: primary.textColor || 'white'
        },
        primaryButtonHover: {
            ':hover': {
                backgroundColor: primary.hoverBackgroundColor,
                borderColor: primary.hoverBorderColor,
                color: primary.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        },
        secondaryButton: {
            backgroundColor: secondary.backgroundColor,
            borderColor: secondary.borderColor,
            color: secondary.textColor || 'white'
        },
        secondaryButtonHover: {
            ':hover': {
                backgroundColor: secondary.hoverBackgroundColor,
                borderColor: secondary.hoverBorderColor,
                color: secondary.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        }
    };
};
