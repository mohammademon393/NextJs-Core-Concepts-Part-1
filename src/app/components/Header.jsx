import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-900 text-white p-4 flex items-center justify-between flex-wrap">
          <Link href="/" className="text-2xl font-semibold">Dev-Story</Link>

          <nav className="flex space-x-4">
            <Link href="/tutorials" className="hover:underline">Tutorials</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/stories" className="hover:underline">Stories</Link>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </nav>
        </header>
    );
};

export default Header;