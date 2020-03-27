import React from 'react';
import { BaseButtonProps } from './types';

export const StandardButton = ({ text, className }: BaseButtonProps) => (
    <a className={className}>{text}</a>
);
