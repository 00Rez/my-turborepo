import './index.css';

type TableHeaderProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TableHeader = ({ children, className, ...props }: TableHeaderProps) => {
  return (
    <div className={`table-header ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

TableHeader.displayName = 'TableHeader';
