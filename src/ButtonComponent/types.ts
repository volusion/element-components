import { GlobalSettings } from '../types';

export interface ButtonConfig {
    buttonStyle: string;
    href: string;
    text: string;
    newWindow: boolean;
}

export interface ButtonProps extends ButtonConfig {
    globalSettings: GlobalSettings;
}

type FontWeight = '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'pill';
export type BorderThickness = 'none' | 'basic' | 'thin' | 'thick';
type TextTransform = 'none' | 'capitalize' | 'lowercase' | 'uppercase';
export type Size = 'small' | 'medium' | 'large' | 'block';
export type Spacing = 'none' | 'tracked' | 'tight' | 'mega';

export interface BaseButtonStylesConfig {
    textColor: string;
    hoverTextColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    borderColor: string;
    hoverBorderColor: string;
    fontWeight: FontWeight;
    textTransform: TextTransform;
    letterSpacing: Spacing;
    borderThickness: BorderThickness;
    size: Size;
    rounded: BorderRadius;
    growOnHover: boolean;
}

export type StyleProp = string | number | undefined;

export interface Styles {
    [key: string]: {
        [key: string]: { [key: string]: StyleProp } | StyleProp;
    };
}

export interface BaseButtonProps extends ButtonConfig {
    className?: string;
    globalButtonSettings: BaseButtonStylesConfig;
}
