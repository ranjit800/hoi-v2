"use client";

import React from 'react';
import { motion } from "framer-motion";
import Button from "@/components/Common/Button";

const CaseStudyRow = ({ client, subtitle, challenge, solution, stat, statSub, index }: any) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-[1.2fr_3fr_3.5fr_1fr_0.8fr] border border-transparent hover:border-[#FD5A07] transition-all duration-300 relative group overflow-hidden bg-[#221005] hover:shadow-inner hover:shadow-orange-500/10 hover:z-20 mb-4 rounded-sm"
    >
        {/* Client Info Area */}
        <div className="p-6 md:p-4 md:border-r border-white/10 flex flex-col justify-start">
            <h4 className="text-xl md:text-2xl font-normal text-white uppercase font-['Bebas_Neue']  mb-1">
                {client}
            </h4>
            <p className="text-[11px] md:text-[13px] text-gray-400 font-medium font-['Barlow']">
                {subtitle}
            </p>
        </div>

        {/* Challenge Area */}
        <div className="p-6 md:p-4 md:border-r border-white/10 flex flex-col justify-center">
            <span className="text-white text-[17px] font-semibold font-['Bebas_Neue'] uppercase tracking-[1px] block mb-1">CHALLENGE</span>
            <p className="text-[13px] md:text-[14px]  text-white font-medium font-['Barlow']">
                {challenge}
            </p>
        </div>

        {/* Solution Area */}
        <div className="p-6 md:p-4 md:border-r border-white/10 flex flex-col justify-center">
            <span className="text-white text-[17px] font-semibold font-['Bebas_Neue'] uppercase tracking-[1px] block mb-1">SOLUTION</span>
            <p className="text-[13px] md:text-[14px] leading-snug text-white font-medium font-['Barlow']">
                {solution}
            </p>
        </div>

        {/* Stats Area */}
        <div className="p-6 md:p-4 md:border-r border-white/10 flex flex-col justify-center lg:items-center text-left">
            <span className="text-[#FD5A07] text-3xl md:text-4xl font-normal font-['Bebas_Neue'] leading-none">
                {stat}
            </span>
            <div className="text-gray-400 text-[11px] md:text-[12px] font-medium font-['Barlow'] mt-1 leading-tight whitespace-pre-line">
                {statSub}
            </div>
        </div>

        {/* Action Area */}
        <div className="p-6 md:p-4 flex items-center justify-center">
            <button className="text-[18px] md:text-[22px] font-['Bebas_Neue'] text-[#FD5A07]  uppercase hover:text-white transition-all cursor-pointer">
                READ
            </button>
        </div>
    </motion.div>
);

const WhatHoiDoes = () => {
    const caseStudies = [
        {
            client: "RETAILGROUP AU",
            subtitle: "Retail · Sydney",
            challenge: "Fully offline — losing customers to digital competitors.\nZero e-commerce. 40% of admin manual.",
            solution: "Full digitisation + e-commerce build + automated\ninventory + performance marketing launch.",
            stat: "2.8×",
            statSub: "Revenue\n· 9 months"
        },
        {
            client: "MEDFLOW",
            subtitle: "HealthTech · Melbourne",
            challenge: "Fully offline — losing customers to digital competitors.\nZero e-commerce. 40% of admin manual.",
            solution: "Full digitisation + e-commerce build + automated\ninventory + performance marketing launch.",
            stat: "$1.2M",
            statSub: "Seed Round\nClosed"
        },
        {
            client: "MEDFLOW",
            subtitle: "HealthTech · Melbourne",
            challenge: "Fully offline — losing customers to digital competitors.\nZero e-commerce. 40% of admin manual.",
            solution: "Full digitisation + e-commerce build + automated\ninventory + performance marketing launch.",
            stat: "$1.2M",
            statSub: "Seed Round\nClosed"
        },
        {
            client: "MEDFLOW",
            subtitle: "HealthTech · Melbourne",
            challenge: "Fully offline — losing customers to digital competitors.\nZero e-commerce. 40% of admin manual.",
            solution: "Full digitisation + e-commerce build + automated\ninventory + performance marketing launch.",
            stat: "$1.2M",
            statSub: "Seed Round\nClosed"
        }
    ];

    return (
        <section className="bg-[#100702] py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <div className="max-w-3xl">
                        <span className="text-[10px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                            WHAT HOI DOES?
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] text-white my-5 leading-[0.99] font-['Bebas_Neue'] uppercase">
                            REAL BUSINESSES. <br className="hidden md:block" /> REAL NUMBERS.
                        </h2>
                        <p className="text-[13px] md:text-base text-white leading-relaxed max-w-2xl font-['Barlow'] font-medium">
                            Not "improved performance." Actual revenue figures, actual timelines, actual clients you can verify on LinkedIn.
                        </p>
                    </div>
                    
                    <Button>
                        ALL CASE STUDIES
                    </Button>
                </div>

                {/* Case Studies Table Section */}
                <div className="w-full border-t border-white/10">
                    {caseStudies.map((study, i) => (
                        <CaseStudyRow key={i} index={i} {...study} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatHoiDoes;