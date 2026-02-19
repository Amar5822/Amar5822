"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌸</span>
            <span className="text-2xl font-heading font-bold text-gradient">
              Kesariya Flower Decoration
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/facilities"
              className={`${
                isActive("/facilities")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
            >
              Our Services
            </Link>
            <Link
              href="/about"
              className={`${
                isActive("/about")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-all hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className={`block ${
                isActive("/")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/facilities"
              className={`block ${
                isActive("/facilities")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              href="/about"
              className={`block ${
                isActive("/about")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`block ${
                isActive("/contact")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              } transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-center transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
