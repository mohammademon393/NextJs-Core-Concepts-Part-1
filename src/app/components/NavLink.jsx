"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname.startsWith(href) ? "bg-sky-700 font-medium underline" : "text-white"} px-4 py-1 rounded hover:underline transition duration-300`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
