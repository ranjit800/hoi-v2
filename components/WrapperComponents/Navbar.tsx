"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    setIsScrolled(latest > 20);
  });

  return (
    <>
      {/* Mobile & Tablet Navigation */}
      <MobileNavbar />

      {/* Desktop Navigation (Hidden on smaller screens) */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-1000 hidden lg:block transition-colors duration-300 ${
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
                  className="group relative overflow-hidden flex text-[22px] font-['Bebas_Neue'] tracking-wider leading-tight"
                >
                  <span className="text-white transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[110%]">
                    {link.name}
                  </span>
                  <span className="text-[#FD5A07] absolute inset-0 translate-y-[110%] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <Button href="/contact">
              START WITH HOI
            </Button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;