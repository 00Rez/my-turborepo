export const NavbarLink = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`navbar-link ${className || ''}`} {...props}>
      {children}
    </div>
  );
};