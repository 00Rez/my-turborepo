import { memo } from 'react';
import './index.css';

type TableRowProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TableRow = memo(({ children, className, ...props }: TableRowProps) => {
  return (
    <div className={`table-row ${className || ''}`} {...props}>
      {children}
    </div>
  );
});

TableRow.displayName = 'TableRow';
