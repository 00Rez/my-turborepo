import { memo } from 'react';
import './index.css';

type TableHeaderCellProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TableHeaderCell = memo(({
  children,
  className,
  ...props
}: TableHeaderCellProps) => {
  return (
    <div className={`table-header-cell ${className}`} {...props}>
      {children}
    </div>
  );
});

TableHeaderCell.displayName = 'TableHeaderCell';
