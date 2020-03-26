import React from 'react';

interface Props {
    className: string;
    href: string;
    newWindow: string;
    text: string;
}

export const LinkButton = ({ text, href, newWindow, className }: Props) => (
    <a
        href={href}
        target={newWindow ? '_blank' : '_self'}
        className={className}
    >
        {text}
    </a>
);
