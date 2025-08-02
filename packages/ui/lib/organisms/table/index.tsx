import "./index.css";

type TableProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Table = ({ children, className, ...props }: TableProps) => {
  return (
    <div className={`table-container ${className}`} {...props}>
      {children}
    </div>
  );
};

Table.displayName = 'Table';
