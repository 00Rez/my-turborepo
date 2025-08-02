import { memo } from 'react';
//import './index.css';

type TableCellProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const TableCell = memo(({ children, className, onClick, ...props }: TableCellProps) => {
  return (
    <div className={`table-cell ${className || ''}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
});

TableCell.displayName = 'TableCell';
