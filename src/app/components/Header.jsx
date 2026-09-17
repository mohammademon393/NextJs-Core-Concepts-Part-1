"use client";

import { MonitorCog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return <></>;

  return (
    <header className="bg-sky-500 text-white p-4 flex items-center justify-between flex-wrap">
      <div className="flex gap-2 items-center">
        <MonitorCog />

        <Link href="/" className="text-2xl font-semibold">
          Dev-Story
        </Link>
      </div>

      <nav className="flex space-x-4">
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
