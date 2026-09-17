"use client"
import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-5">
      <div className="w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <SearchX className="w-10 h-10 text-blue-700" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight text-blue-900">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-gray-500 leading-relaxed">
          Sorry, the page you are looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-900 text-white font-medium shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
          >
            <Home size={18} />
            Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Bottom text */}
        <p className="mt-10 text-sm text-gray-400">
          Dev-Story • Let's get you back on track.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
