"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Button from "@/components/Common/Button";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "BUILD", href: "/build" },
  { name: "SOLUTIONS", href: "/solutions" },
  { name: "GALLERY", href: "/gallery" },
  { name: "RESOURCES", href: "/resources" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-0 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-51">
          <Image
            src="/navLogo.png"
            alt="High On Innovation Logo"
            width={220}
            height={60}
            className="w-auto h-12 md:h-14 lg:h-14 object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links & Button Group (Right Aligned) */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#FD5A07] text-[22px] font-['Bebas_Neue'] tracking-wider transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Button href="/contact">
            START WITH HOI
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white relative z-51 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <HiX size={32} />
          ) : (
            <HiMenuAlt3 size={32} className="text-[#FD5A07]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-50 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-2xl font-bold tracking-widest hover:text-[#FF4D00] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 px-8 py-3 rounded-full bg-linear-to-r from-[#FF4D00] to-[#FF8A00] text-white text-lg font-bold tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              START WITH HOI
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;