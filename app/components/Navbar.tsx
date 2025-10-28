"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Showcase", href: "/showcase" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0b0f]/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          AutoMind
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-400 hover:text-blue-400 transition ${
                pathname === link.href ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 border-t border-gray-800 bg-[#0b0b0f]">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-gray-300 hover:text-blue-400 transition ${
                pathname === link.href ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
