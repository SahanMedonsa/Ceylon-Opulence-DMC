"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/tours", label: "Tours & Experiences" },
  { href: "/gallery", label: "Photo Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Crystal glass on home at top, black elsewhere/after scroll
  const navBg =
    pathname === "/" && !scrolled
      ? "bg-white/30 backdrop-blur-md shadow-lg border border-white/30"
      : "bg-black/90 shadow-lg border border-neutral-800";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center bg-transparent pointer-events-none transition-colors duration-300 pt-4">
      <div
        className={`max-w-4xl w-[95vw] mx-auto flex items-center justify-between px-4 py-2 rounded-full pointer-events-auto ${navBg} transition-colors duration-300`}
      >
        <Link href="/" className="text-lg lg:text-xl font-semibold text-green-500 tracking-tight logo whitespace-nowrap">
          Ceylon Opulence DMC
        </Link>
        <ul className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white hover:text-green-400 transition-colors px-2 py-1 rounded-lg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden text-white text-xl focus:outline-none px-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <FaBars />
        </button>
      </div>
      {/* Mobile/Tablet Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 px-6 py-6 rounded-2xl shadow-2xl absolute w-full left-0 top-full animate-fade-in z-50 mt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base font-medium text-white hover:text-green-400 px-2 py-2 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
} 