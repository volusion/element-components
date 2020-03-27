import React from 'react';
import { BaseButtonProps } from './types';

export const LinkButton = ({
    text,
    href,
    newWindow,
    className
}: BaseButtonProps) => (
    <a
        href={href}
        target={newWindow ? '_blank' : '_self'}
        className={className}
    >
        {text}
    </a>
);
