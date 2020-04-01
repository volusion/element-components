import React from 'react';

export interface GlobalSettings<T, U> {
    globalComponents: {
        [key: T]: U;
    };
}

export interface BlockUtils {
    isAmpRequest: boolean;
}

export type ElementComponent<Props> = React.Component<Props>;
