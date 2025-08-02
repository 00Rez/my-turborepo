import "./index.css";

type TableBodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TableBody = ({ children, className, ...props }: TableBodyProps) => {
  return (
    <div className={`table-body ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

TableBody.displayName = 'TableBody';
