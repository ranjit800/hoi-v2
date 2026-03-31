"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";
import rocketIcon from "@/public/Images/rocket-outline-orang.png";
import Button from "@/components/Common/Button";

const TABS = [
  "ALL",
  "STARTUP FOUNDERS",
  "ENTERPRISE",
  "DEEP TECH",
  "GOVERNMENT",
  "ESTABLISHED SMES"
];

// ── Animation variants ──────────────────────────────────────────────────────

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const tabBarVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const tabItemVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const cardGridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ── ProductCard ─────────────────────────────────────────────────────────────

const ProductCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    layout
    variants={cardVariant}
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, scale: 0.93, transition: { duration: 0.25 } }}
    whileHover={{
      y: -6,
      boxShadow: "0 20px 40px -10px rgba(253,90,7,0.15)",
      borderColor: "#FD5A07",
      transition: { duration: 0.25, ease: "easeOut" },
    }}
    className="p-8 border border-gray-100 rounded-sm bg-white transition-colors duration-300 flex flex-col items-start gap-4 cursor-pointer"
  >
    {/* Rocket icon with subtle spin-in */}
    <motion.div
      className="p-2"
      initial={{ rotate: -20, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      <Image src={rocketIcon} alt="Rocket Icon" width={24} height={24} />
    </motion.div>

    <h3 className="text-xl font-normal text-[#100702] uppercase font-['Bebas_Neue']">
      {title}
    </h3>
    <p className="text-[16px] md:text-[14px] text-[#100702] font-medium font-['Barlow']">
      {description}
    </p>

    {/* Bottom accent line that grows on hover */}
    <motion.div
      className="h-[2px] bg-[#FD5A07] mt-auto"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

// ── OurProducts ─────────────────────────────────────────────────────────────

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const allProducts = [
    { title: "STARTUP FOUNDERS",          category: "STARTUP FOUNDERS",  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { title: "ENTERPRISE SOLUTIONS",      category: "ENTERPRISE",        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { title: "DEEP TECH INNOVATION",      category: "DEEP TECH",         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { title: "GOVERNMENT SYSTEMS",        category: "GOVERNMENT",        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { title: "SME GROWTH",                category: "ESTABLISHED SMES",  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { title: "STARTUP ACCELERATOR",       category: "STARTUP FOUNDERS",  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { title: "ENTERPRISE TRANSFORMATION", category: "ENTERPRISE",        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { title: "TECH SCALEUP",              category: "DEEP TECH",         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  ];

  const filteredProducts =
    activeTab === "ALL"
      ? allProducts
      : allProducts.filter((p) => p.category === activeTab);

  return (
    <section ref={sectionRef} className="py-[100px] bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-0">

        {/* ── Header ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-12"
        >
          <div className="max-w-3xl">
            {/* Tagline */}
            <motion.span
              variants={fadeUp}
              className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4"
            >
              OUR PRODUCT
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,5vw,4rem)] font-normal text-[#100702] mb-6 leading-[0.95] font-['Bebas_Neue'] uppercase"
            >
              WHO WE WORK WITH.
            </motion.h2>

            {/* Body copy */}
            <motion.p
              variants={fadeUp}
              className="text-[16px] md:text-sm text-black leading-relaxed font-medium max-w-sm"
            >
              From pre-revenue startups to $20M+ businesses — if you want to build
              something serious across Australia, we're built for you.
            </motion.p>
          </div>

          {/* CTA button */}
          <motion.div variants={fadeLeft}>
            <Button>WORK WITH US</Button>
          </motion.div>
        </motion.div>

        {/* ── Tab Navigation ── */}
        <motion.div
          variants={tabBarVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-b border-gray-200 mb-12 overflow-x-auto scroller-hide pb-px"
        >
          <div className="flex justify-start md:justify-between items-center gap-8 md:gap-0 min-w-max md:min-w-full">
            {TABS.map((tab) => (
              <motion.button
                key={tab}
                variants={tabItemVariant}
                onClick={() => setActiveTab(tab)}
                whileHover={{ color: "#FD5A07" }}
                transition={{ duration: 0.2 }}
                className={`text-[12px] md:text-[14px] font-bold uppercase py-4 relative cursor-pointer font-['barlow'] text-[#100702] shrink-0`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FD5A07]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Product Grid ── */}
        <motion.div
          layout
          variants={cardGridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default OurProducts;