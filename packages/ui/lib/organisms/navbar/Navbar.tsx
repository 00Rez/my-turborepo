"use client";

import styles from "./Navbar.module.scss";

export const Navbar = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.navbar} {...props}>
      {children}
    </div>
  )
}
