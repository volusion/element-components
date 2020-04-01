import React from 'react';
import { BaseButtonProps } from './types';

export const StandardButton = ({ text, className }: BaseButtonProps) => (
    <button className={className}>{text}</button>
);
