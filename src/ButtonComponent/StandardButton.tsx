import React from 'react';

interface Props {
    className: string;
    href: string;
    newWindow: string;
    text: string;
}

export const StandardButton = ({ text, className }: Props) => (
    <a className={className}>{text}</a>
);
