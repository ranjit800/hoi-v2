"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, Variants } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

const usefulLinks = ["Home", "About Us", "Blog", "Case studies", "Career", "Event"];
const services = ["Web Development", "App Development", "Creative Works", "Blockchain & Web 3", "AI / ML", "IoT"];
const products = ["AI", "Human Resource", "Finance", "Legal", "Operations", "Information Tech"];
const industries = ["AI", "Human Resource", "Finance", "Legal", "Operations", "Information Tech"];

// ── Animation Variants ──────────────────────────────────────────────────────

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

const lineVariants: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.8, ease: "easeInOut" as const, delay: 0.4 },
    },
};

const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "backOut" as const },
    },
};

// ── NavColumn ─────────────────────────────────────────────────────────────

const NavColumn = ({ title, items }: { title: string; items: string[] }) => (
    <motion.div variants={itemVariants} className="flex flex-col gap-4">
        <h4 className="text-white text-[12px] md:text-[13px] font-bold uppercase tracking-widest font-['Bebas_Neue']">
            {title}
        </h4>
        <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
                <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <Link href="#" className="text-[13px] text-white/70 font-medium hover:text-white transition-colors font-['Barlow']">
                        {item}
                    </Link>
                </motion.li>
            ))}
        </ul>
    </motion.div>
);

export const Footer = () => {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, amount: 0.1 });

    return (
        <footer ref={footerRef} className="bg-[#100702] border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0 py-16 md:py-20">
                
                {/* Main Grid area */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-10"
                >
                    
                    {/* Logo + Address Area */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Logo */}
                        <motion.div variants={itemVariants}>
                            <Image 
                                src="/LogoForFooter.png"
                                alt="High On Innovation"
                                width={240}
                                height={80}
                                className="object-contain"
                            />
                        </motion.div>

                        {/* USA */}
                        <motion.div variants={itemVariants}>
                            <h5 className="text-white text-[13px] font-bold uppercase tracking-widest mb-2 font-['Bebas_Neue']">USA</h5>
                            <p className="text-white/50 text-[13px] font-medium leading-relaxed font-['Barlow']">
                                433 W Van Buren St, Suite 205,<br />
                                Chicago, IL, 60607
                            </p>
                        </motion.div>

                        {/* INDIA */}
                        <motion.div variants={itemVariants}>
                            <h5 className="text-white text-[13px] font-bold uppercase tracking-widest mb-2 font-['Bebas_Neue']">INDIA</h5>
                            <p className="text-white/50 text-[13px] font-medium leading-relaxed font-['Barlow']">
                                Mosaic Digital Hub, 13-14 Silver Street,<br />
                                Lincoln, LN2 1DY
                            </p>
                        </motion.div>
                    </div>

                    {/* Nav Columns */}
                    <NavColumn title="Useful Links" items={usefulLinks} />
                    <NavColumn title="Services" items={services} />
                    <NavColumn title="Product" items={products} />
                    <NavColumn title="Industries" items={industries} />
                </motion.div>

                {/* Divider & Bottom area */}
                <div className="mt-16">
                    <motion.div 
                        variants={lineVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="h-px w-full bg-white/10"
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                    >
                        {/* Social Icons */}
                        <div className="flex items-center gap-6">
                            {[
                                { icon: FaInstagram, delay: 0.7 },
                                { icon: FaFacebookF, delay: 0.8 },
                                { icon: FaXTwitter, delay: 0.9 },
                                { icon: FaLinkedinIn, delay: 1.0 }
                            ].map((social: { icon: IconType; delay: number }, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={socialVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ delay: social.delay }}
                                >
                                    <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Copyright */}
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="text-[13px] text-white/40 font-medium text-center font-['Barlow']"
                        >
                            © 2026 <span className="text-[#FD5A07]">High On Innovation</span>. All Rights Reserved.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;