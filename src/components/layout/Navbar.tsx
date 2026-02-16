"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container-width flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--color-primary)]">
          <Link href="#hero">Naeem&Co</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#about">About</Link>
          <Link href="#products">Products</Link>
          <Link href="#certifications">Certifications</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="bg-[var(--color-accent)] text-white px-5 py-2 rounded-md text-sm hover:opacity-90 transition"
        >
          Request Quote
        </Link>
      </div>
    </nav>
  );
}
