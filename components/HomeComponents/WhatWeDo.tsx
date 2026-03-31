"use client";

import React from 'react';
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import rocketOrang from "@/public/Images/rocket-outline-orang.png";
import rocketBlack from "@/public/Images/rocket-outline-black.png";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.33, 1, 0.68, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const viewportSettings = { once: true, amount: 0.2 };

const StatBox = ({ value, label, sublabel }: { value: string, label: string, sublabel: string }) => (
  <motion.div 
    variants={fadeInUp}
    className="flex items-center gap-3 p-4 border border-black rounded mb-4 last:mb-0 shadow-sm bg-white/50"
  >
    <span className="text-[#FD5A07] text-xl md:text-3xl font-normal min-w-[50px] md:min-w-[70px] font-['bebas_neue'] leading-none shrink-0">
        {value}
    </span>
    <div className="flex flex-col">
      <span className="text-[#100702] font-bold text-[10px] md:text-[12px] leading-tight uppercase font-['barlow']">
          {label}
      </span>
      <span className="text-black text-[7px] md:text-[9px]  tracking-widest mt-0.5 font-['barlow'] ">
          {sublabel}
      </span>
    </div>
  </motion.div>
);

const FeatureCard = ({ title, description }: any) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group p-5 md:p-6 lg:p-10 rounded flex flex-col gap-6 transition-all duration-300 h-full bg-white border border-gray-100 text-[#100702] hover:bg-[#FD5A07] hover:text-[#100702] hover:shadow-2xl hover:shadow-orange-500/20 hover:border-transparent cursor-default"
  >
    <div className="relative w-7 h-7 mb-2">
        <Image 
          src={rocketOrang} 
          alt="Rocket Icon" 
          width={28} 
          height={28} 
          className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0" 
        />
        <Image 
          src={rocketBlack} 
          alt="Rocket Icon Hover" 
          width={28} 
          height={28} 
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
        />
    </div>
    <div>
        <h3 className="text-lg md:text-xl font-normal mb-2 uppercase  font-['Bebas_Neue']">
            {title}
        </h3>
        <p className="text-[16px] md:text-[13px] leading-relaxed font-['barlow'] font-medium text-[#100702] group-hover:text-[#100702]/80 transition-colors duration-300">
            {description}
        </p>
    </div>
  </motion.div>
);

const WhatWeDo = () => {
    const stats = [
        { value: "3.2X", label: "Average revenue growth at 12 months", sublabel: "HOI Client Data · Verified Accounts 2022–2025" },
        { value: "90", label: "Days from idea to live startup product", sublabel: "Average across 30+ startup builds" },
        { value: "40%", label: "Average reduction in operational costs via AI automation", sublabel: "Measured at 60 days post-implementation" }
    ];

    const features = [
        {
            title: "COMPLETE SYSTEMS",
            description: "From idea validation to live revenue operations. Every stage connected. No silos. No gaps. No wasted spend.",
        },
        {
            title: "STRATEGY + BRAND + AI + TECH",
            description: "From idea validation to live revenue operations. Every stage connected. No silos. No gaps. No wasted spend.",
        },
        {
            title: "REVENUE PARTNER",
            description: "From idea validation to live revenue operations. Every stage connected. No silos. No gaps. No wasted spend.",
        }
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-12 md:py-[10vh] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0 max-w-7xl">
                {/* ══ HEADER SECTION ══ */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportSettings}
                    className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-8 mb-[5vh]"
                >
                    
                    {/* LEFT: Text Content Area */}
                    <motion.div 
                        variants={staggerContainer}
                        className="flex-1 max-w-3xl"
                    >
                        <motion.span 
                            variants={fadeInUp}
                            className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-2"
                        >
                            WHAT WE DO
                        </motion.span>
                        <motion.h2 
                            variants={fadeInUp}
                            className="text-[clamp(2.5rem,5vw,4.2rem)] text-[#151515] my-5 tracking leading-[0.99] font-['Bebas_Neue'] uppercase"
                        >
                            Not an agency. Not a consultant. <br className="hidden md:block" /> A business builder.
                        </motion.h2>
                        <motion.div variants={staggerContainer} className="space-y-4 max-w-lg">
                            <motion.p variants={fadeInUp} className="text-[16px] md:text-[14px] lg:text-[15px] text-[#151515] leading-relaxed font-medium">
                                Most businesses that come to us have been burned before — by agencies that deliver a piece and disappear, or consultants who report but never execute.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-[16px] md:text-[14px] lg:text-[15px] text-[#151515] leading-relaxed font-medium">
                                HOI is built differently. We combine strategy, technology, and marketing execution under one accountable team. We own your outcomes.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: By The Numbers*/}
                    <motion.div 
                        variants={staggerContainer}
                        className="w-full lg:w-2/5 shrink-0"
                    >
                        <motion.span 
                            variants={fadeInUp}
                            className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] mb-4 lg:mb-7 block"
                        >
                            BY THE NUMBERS
                        </motion.span>
                        <div className="space-y-2 lg:space-y-2.5 mt-5">
                            {stats.map((stat, i) => (
                                <StatBox key={i} {...stat} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* ══ FEATURE GRID ══ */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportSettings}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((feature, i) => (
                        <div key={i} className="h-full">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;