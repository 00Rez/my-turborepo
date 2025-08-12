"use client";

import { Link } from "../../atoms/link";

import styles from "./NavbarLink.module.scss";

export interface NavbarLinkProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  href?: string;
}

export const NavbarLink = 
  (
    { children, href, ...props }: NavbarLinkProps
  ) => {
    return (
      <div className={styles.navbarLink}>
        <Link href={href} {...props}>
          {children}
        </Link>
      </div>
    );
  };

NavbarLink.displayName = "NavbarLink";
