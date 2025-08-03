"use client";

import { memo } from 'react';
import './TableRow.css';

export type TableRowProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TableRow = memo(({ children, className, ...props }: TableRowProps) => {
  return (
    <div className={`table-row locale-aware ${className || ''}`} {...props}>
      {children}
    </div>
  );
});

TableRow.displayName = 'TableRow';
