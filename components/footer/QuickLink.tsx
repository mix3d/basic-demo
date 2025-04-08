import * as React from 'react';
import { QuickLinkProps } from './types';

export const QuickLink: React.FC<QuickLinkProps> = ({ href, text }) => (
  <a
    className="text-stone-500 hover:text-stone-900"
    href={href}
  >
    {text}
  </a>
);
