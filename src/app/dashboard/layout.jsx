import { MonitorCog } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
      <div className="grid grid-cols-12 gap-5 min-h-screen">
        <div className="col-span-3 border-r-2">
          <div className='flex gap-2 items-center'>
            <MonitorCog />
            <Link href="/" className="text-2xl font-semibold">
              Dev-Story
            </Link>
          </div>
          <div className="flex flex-col space-y-4 mt-5">
            <Link
              href="/dashboard/add-story"
              className="py-2 px-4 mx-2 bg-blue-900 text-white rounded text-center hover:bg-black  transition duration-300"
            >
              Add Story
            </Link>
            <Link
              href="/dashboard/my-profile"
              className="py-2 px-4 mx-2 bg-blue-900 text-white rounded text-center hover:bg-black  transition duration-300"
            >
              My Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="py-2 px-4 mx-2 bg-blue-900 text-white rounded text-center hover:bg-black  transition duration-300"
            >
              Settings
            </Link>
          </div>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    );
};

export default DashboardLayout;