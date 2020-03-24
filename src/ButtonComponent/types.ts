export interface BlockSettingsProps {
    buttonStyle: string;
    className: string;
    href: string;
    text: string;
    // Not sure about these...
    primaryButtonStyles?: BaseButtonStylesConfig;
    secondaryButtonStyles?: BaseButtonStylesConfig;
}

export interface BaseButtonStylesConfig {
    textColor: string;
    hoverTextColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    borderColor: string;
    hoverBorderColor: string;
    fontWeight: string;
    textTransform: string;
    letterSpacing: string;
    borderThickness: string;
    size: string;
    rounded: string;
    growOnHover: boolean;
}

export interface VolComponentButton {
    primaryButtonStyles: BaseButtonStylesConfig;
    secondaryButtonStyles: BaseButtonStylesConfig;
}

export interface MergedConfigStyles {
    primary: BaseButtonStylesConfig;
    secondary: BaseButtonStylesConfig;
}

export interface GlobalSettings {
    globalComponents: {
        volComponentButton: VolComponentButton;
    };
}

export interface ButtonComponentProps extends BlockSettingsProps {
    globalSettings: GlobalSettings;
}
