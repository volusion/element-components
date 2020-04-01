import React from 'react';
import { BaseButtonProps } from './types';

export const LinkButton = ({
    text,
    href,
    newWindow,
    className
}: BaseButtonProps) => (
    <a href={href} target={newWindow ? '_blank' : '_self'}>
        <button className={className}>{text}</button>
    </a>
);
