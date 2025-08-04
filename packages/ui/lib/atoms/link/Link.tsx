"use client";

import { memo } from "react";

export type LinkProps = {
  newTab?: boolean;
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Link = memo(({ children, href, newTab, ...other }: LinkProps) => {
  return (
    <a
      href={href}
      rel={newTab ? "noreferrer" : undefined}
      target={newTab ? "_blank" : undefined}
      {...other}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";
