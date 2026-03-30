"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { createPortal } from "react-dom";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "BUILD", href: "/build" },
  { name: "SOLUTIONS", href: "/solutions" },
  { name: "GALLERY", href: "/gallery" },
  { name: "RESOURCES", href: "/resources" },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div className="lg:hidden">
      {/* Mobile Header Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-1002 transition-all duration-300 ${
          isOpen
            ? "bg-transparent"
            : isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative z-1002" onClick={() => setIsOpen(false)}>
            <Image
              src="/navLogo.png"
              alt="High On Innovation Logo"
              width={180}
              height={50}
              className="w-auto h-10 object-contain"
              priority
            />
          </Link>

          <button
            className="text-white relative z-1002 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX size={32} />
            ) : (
              <HiMenuAlt3 size={32} className="text-[#FD5A07]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Rendered via Portal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 min-h-screen w-full bg-black z-1001 flex flex-col items-center justify-center gap-8"
              style={{ backgroundColor: "#000000" }} // Solid black fallback
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-3xl font-['Bebas_Neue'] tracking-widest hover:text-[#FF4D00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 px-10 py-4 rounded-full bg-linear-to-r from-[#FF4D00] to-[#FF8A00] text-white text-xl font-bold tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                START WITH HOI
              </Link>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default MobileNavbar;
