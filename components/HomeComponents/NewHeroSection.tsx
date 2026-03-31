"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ZCanvas from "@/components/Common/ZCanvas";
import IdeadIcon from "@/public/IdeaIcon.png";

const STAGE_LABELS = ["Strategy", "Systems", "Branding", "Team", "Revenue"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom cubic-bezier for premium feel
    },
  },
};

const NewHeroSection = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative w-full min-h-screen bg-[#100702] text-white overflow-hidden border-t border-white/10">
      {/* ──────────────────────────────────────────────────────────────────────
          MOBILE / TABLET  (< lg)  →  single column, stacked layout
          DESKTOP           (≥ lg)  →  3-column flex row
      ────────────────────────────────────────────────────────────────────── */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 lg:px-0 h-full w-full flex flex-col lg:flex-row min-h-screen pt-10 relative z-10"
      >
        {/* ══ LEFT — Text Content ══ */}
        <div
          id="leftdiv"
          className="
            w-full lg:w-[40%]
            flex flex-col justify-center gap-3
            pt-12 lg:py-5
            px-0
          "
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#FD5A07] shrink-0" />
            <span className="text-[16px] md:text-[12px] font-['Barlow'] uppercase text-[#FD5A07]">Not an agency. Not a consultant.</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-['Bebas_Neue'] text-4xl md:text-7xl font-normal leading-none uppercase tracking-[0.02em] flex flex-col gap-2 md:gap-1">
            <span className="inline-block whitespace-nowrap">
              We Build <span className="text-[#FD5A07]">Complete</span>
            </span>
            <span className="inline-block whitespace-nowrap">
              Business Systems.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="font-['Barlow'] text-[16px] md:text-[clamp(13px,1.1vw,16px)] leading-relaxed text-white max-w-[540px]">
            From AI automation and business digitisation to startup builds and digital marketing — HOI gives ambitious Australian businesses the complete system to dominate their
            market. Strategy, technology, and execution under one accountable team.
          </motion.p>

          {/* Stat Cards */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5 my-3">
            <div className="flex items-start gap-4 bg-white/[0.035] border border-white/[0.07] rounded px-4 py-3.5 font-['Barlow']">
              <span className="text-[clamp(26px,2.5vw,36px)] font-semibold text-[#FD5A07] leading-none whitespace-nowrap font-['Bebas_Neue']">3.2×</span>
              <div className="flex flex-col gap-1 pt-0.5">
                <span className="text-[16px] md:text-[13px] font-semibold text-white">Average client revenue growth at 12 months</span>
                <span className="text-[14px] md:text-[11px] text-white/40">Across 90+ Australian businesses — verified client data 2022–2025</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/[0.035] border border-white/[0.07] rounded px-4 py-3.5 text-[13px] text-white/70 font-['Barlow']">
              <Image src={IdeadIcon} alt="Idea Icon" width={20} height={20} className="shrink-0" />
             <span className="text-[16px] md:text-[13px] font-semibold text-white">
              
              Projects typically start from $2000. Written scope delivered before you commit to anything — always.
               </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between">
            <button className="font-['Bebas_Neue'] text-[16px] md:text-[18px] rounded font-normal tracking-[0.05em] uppercase bg-[#FD5A07] text-white py-3 px-10 cursor-pointer hover:bg-[#d44d00] transition-colors duration-200 mb-5 lg:mb-0">
              Book a Free Strategy Call
            </button>
            <button className="font-['Bebas_Neue'] text-[16px] md:text-[18px] rounded font-normal tracking-[0.05em] uppercase bg-transparent text-white border border-white/30 py-3 px-10 cursor-pointer hover:border-white transition-colors duration-200">
              Find Your Growth Path
            </button>
          </motion.div>

          {/* Stage labels — visible on mobile/tablet ONLY, horizontal row */}
          <motion.div variants={itemVariants} className="flex lg:hidden flex-wrap gap-2 mt-2">
            {STAGE_LABELS.map((label, i) => (
              <div
                key={label}
                className={`text-[9px] font-['Barlow'] font-bold tracking-[0.12em] uppercase px-3 py-1.5 border rounded transition-all duration-300 ${
                  i === activeStage ? "border-[#FD5A07] text-[#FD5A07] bg-[rgba(253,90,7,0.08)]" : "border-white/15 text-white/50 bg-[rgba(16,7,2,0.85)]"
                }`}
              >
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══ MIDDLE — Stage labels (desktop only) ══ */}
        <motion.div id="middlediv" variants={itemVariants} className="  hidden lg:flex w-[15%] flex-col items-end justify-center ">
          <div className="flex flex-col items-center">
            {STAGE_LABELS.map((label, i) => (
              <div key={label} className="flex flex-col items-center">
                <div
                  className={`w-[100px] text-[12px] font-['Barlow'] rounded font-semibold tracking-[0.12em] uppercase px-4 py-2 border text-center whitespace-nowrap transition-all duration-300 ${
                    i === activeStage ? "border-[#FD5A07] text-[#FD5A07] bg-[rgba(253,90,7,0.08)]" : "border-white text-white bg-[rgba(16,7,2,0.85)]"
                  }`}
                >
                  {label}
                </div>
                {i < STAGE_LABELS.length - 1 && <div className="w-px h-6 bg-white" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══ RIGHT — Z Animation Canvas ══ */}
        <motion.div
          id="rightdiv"
          variants={itemVariants}
          className="
            relative
            w-full lg:w-[45%]
            h-[350px] sm:h-[400px] md:h-[460px] lg:h-auto
            lg:min-h-[750px] lg:max-h-[900px] xl:max-h-[1000px]
            my-auto  -ml-4 md:ml-0 lg:ml-0
          "
        >
          <ZCanvas onStageChange={setActiveStage} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewHeroSection;
