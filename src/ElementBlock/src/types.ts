export interface ElementBlockStylesProps {
    isFullWidth: boolean;
    hasHorizontalPadding: boolean;
    topPadding: paddingSizes;
    bottomPadding: paddingSizes;
    showOnDesktop: boolean;
    showOnTablet: boolean;
    showOnMobile: boolean;
}

type paddingSizes = 'None' | 'Small' | 'Medium' | 'Large';

export interface ElementBlockConfigs extends ElementBlockStylesProps {
    customAttrs: [customAttrsProps];
}

export interface ElementBlockProps extends ElementBlockConfigs {
    children: any;
    globalSettings: any;
}

export interface customAttrsProps {
    name: string;
    value: string;
}
export interface ObjectLiteral {
    [key: string]: any;
}
