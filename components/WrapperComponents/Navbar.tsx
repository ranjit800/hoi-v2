"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Common/Button";
import MobileNavbar from "./MobileNavbar";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "BUILD", href: "/build" },
  { name: "SOLUTIONS", href: "/solutions" },
  { name: "GALLERY", href: "/gallery" },
  { name: "RESOURCES", href: "/resources" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile & Tablet Navigation */}
      <MobileNavbar />

      {/* Desktop Navigation (Hidden on smaller screens) */}
      <nav
        className={`fixed top-0 left-0 w-full z-1000 hidden lg:block transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto  flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-1002">
            <Image
              src="/navLogo.png"
              alt="High On Innovation Logo"
              width={220}
              height={60}
              className="w-auto h-12 md:h-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links & Button Group */}
          <div className="flex items-center gap-12">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;