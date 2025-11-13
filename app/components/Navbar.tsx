"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logos */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            {/* Small logo icon */}
            <img
              src="/logo.png"
              alt="Notre Dame Small Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            {/* Main logo text/image - visible on all screens */}
            <img
              src="/logo (3).png"
              alt="Notre Dame School of Dallas"
              className="h-8 sm:h-10 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              About Us
            </Link>
            <Link
              href="/mission-vision"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Mission & Vision
            </Link>
            <Link
              href="/principals-message"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Principal’s Message
            </Link>
            <Link
              href="/contact-us"
              className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/mission-vision"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition"
              onClick={() => setMenuOpen(false)}
            >
              Mission & Vision
            </Link>
            <Link
              href="/principals-message"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition"
              onClick={() => setMenuOpen(false)}
            >
              Principal’s Message
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-3 rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-800 transition text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
