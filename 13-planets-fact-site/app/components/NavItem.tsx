"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <li className={`hover:opacity-100 ${pathname !== href && "opacity-70"}`}>
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavItem;
