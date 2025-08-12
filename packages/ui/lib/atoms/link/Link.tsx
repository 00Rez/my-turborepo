"use client";

import { forwardRef } from "react";

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  newTab?: boolean;
  href?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, href, newTab, ...other }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      rel={newTab ? "noreferrer" : undefined}
      target={newTab ? "_blank" : undefined}
      {...other}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";
