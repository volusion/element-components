export interface ButtonConfig {
    buttonStyle: string;
    href: string;
    text: string;
    newWindow: boolean;
}

export interface ButtonProps extends ButtonConfig {
    globalSettings: GlobalSettings;
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

export interface MergedStyles {
    primary: BaseButtonStylesConfig;
    secondary: BaseButtonStylesConfig;
}

export interface GlobalSettings {
    globalComponents: {
        volComponentButton: VolComponentButton;
    };
}

export type StyleProp = string | number;

export interface Styles {
    [key: string]: {
        [key: string]: { [key: string]: StyleProp } | StyleProp;
    };
}

export interface BaseButtonProps extends ButtonConfig {
    className?: string;
    globalButtonSettings: BaseButtonStylesConfig;
}
