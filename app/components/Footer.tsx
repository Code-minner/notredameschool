"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, Users, Award, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Logo and About */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="Notre Dame School Logo"
                className="h-14 w-14 mb-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-white font-bold text-xl mb-2">
                Notre Dame School
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Inspiring excellence, fostering faith, and nurturing lifelong
              learning for all our students.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-900"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/mission-vision">Mission & Vision</FooterLink>
              <FooterLink href="/principals-message">
                Principal's Message
              </FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-900"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <span className="text-blue-500 mt-0.5 text-base"><MapPin className="w-4 h-4" /></span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  456 Learning Way, Dallas, TX 75205
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-blue-500 mt-0.5 text-base"><Phone className="w-4 h-4" /></span>
                <a
                  href="tel:+12145557890"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (325) 864-2097
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-blue-500 mt-0.5 text-base"><Mail className="w-4 h-4" /></span>
                <a
                  href="mailto:info@notredameschool.org"
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  Notrdameinterhighschool@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Partners & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-900"></span>
            </h3>

            {/* Partner Section */}
            <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-900 transition-colors">
              <div className="flex items-center gap-3">
                <img
                  src="/logo (3).png"
                  alt="Partner Logo"
                  className="h-10 w-10 object-contain bg-white rounded-full p-1.5 flex-shrink-0"
                />
                <span className="text-sm text-gray-300 font-medium">
                  Catholic Education Alliance
                </span>
              </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>
              © {currentYear} Notre Dame School. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link
                href="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Footer Link Component
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-white transition-all duration-200 inline-flex items-center gap-2 group"
      >
        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300"></span>
        {children}
      </Link>
    </li>
  );
}

// Social Link Component
function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-900 hover:border-blue-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
    >
      <i className={icon}></i>
    </a>
  );
}