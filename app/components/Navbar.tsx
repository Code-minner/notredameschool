"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left side: Logos */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 group"
            onClick={() => setMenuOpen(false)}
          >
            {/* Small logo icon with hover effect */}
            <div className="relative">
              <img
                src="/logo.png"
                alt="Notre Dame Small Logo"
                className="h-20 w-20 sm:h-28 sm:w-28 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Main logo text/image */}
            <img
              src="/logo (3).png"
              alt="Notre Dame School of Dallas"
              className="h-15 sm:h-20 object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6 text-lg text-black">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/mission-vision">Mission & Vision</NavLink>
            <NavLink href="/principals-message">Principal's Message</NavLink>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 font-medium transition-all duration-200 text-sm lg:text-base shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center px-1 py-2 bg-red-700 rounded-full text-white  hover:bg-red-300 hover:text-black  focus:outline-none focus:ring-2 focus:ring-blue-700 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-8 w-10 transition-transform duration-300"
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

      {/* Mobile Navigation Menu with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-200 bg-white px-4 pt-2 pb-4 space-y-1 text-[19px]">
          <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </MobileNavLink>
          <MobileNavLink
            href="/mission-vision"
            onClick={() => setMenuOpen(false)}
          >
            Mission & Vision
          </MobileNavLink>
          <MobileNavLink
            href="/principals-message"
            onClick={() => setMenuOpen(false)}
          >
            Principal's Message
          </MobileNavLink>
          <Link
            href="/contact"
            className="block px-3 py-3 rounded-lg text-base font-medium bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200 text-center mt-3 shadow-sm"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base group px-2 py-1"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}