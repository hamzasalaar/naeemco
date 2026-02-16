"use client";

import { useState } from "react";
import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container-width flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--color-primary)]">
          <Link href="#hero">Naeem&Co</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[var(--color-accent)] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-[var(--color-accent)] text-white px-5 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[var(--color-accent)] transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-[var(--color-accent)] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
          >
            Request Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
