"use client"
import { MonitorCog } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathname = usePathname();
  if(pathname.startsWith('/dashboard')) return <></>;
    return (
      <header className="bg-blue-900 text-white p-4 flex items-center justify-between flex-wrap">
        <div className='flex gap-2 items-center'>
          <MonitorCog />
          <Link href="/" className="text-2xl font-semibold">
            Dev-Story
          </Link>
        </div>

        <nav className="flex space-x-4">
          <Link href="/tutorials" className="hover:underline">
            Tutorials
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/stories" className="hover:underline">
            Stories
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/register" className="hover:underline">
            Register
          </Link>
        </nav>
      </header>
    );
};

export default Header;