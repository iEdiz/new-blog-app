"use client";

import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

type NavItem = {
  title: string;
  path: string;
}
type NavLinkProps = {
  item: NavItem;
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
      {item.title}
    </Link>
  );
};

export default NavLink;
