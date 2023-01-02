import React from 'react';
import { Spacing } from '@infovore.ds.e/foundation';
export interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: React.ReactNode;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
