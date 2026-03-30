"use client";

import React from 'react';
import { motion } from "framer-motion";
import { HiOutlineClock } from "react-icons/hi2";

const steps = [
    {
        number: "1",
        title: "FREE STRATEGY CALL",
        description: "45 minutes. We listen, ask smart questions, and understand your real situation — not just your website. No pitch. No obligation whatsoever.",
        tag: "45 MIN · FREE · NO OBLIGATION"
    },
    {
        number: "2",
        title: "GROWTH AUDIT",
        description: "Written audit of your 3 biggest opportunities + a prioritised 90-day roadmap. Delivered in 3 business days. Yours to keep — regardless of what you decide next.",
        tag: "3 DAYS · FREE · YOURS TO KEEP"
    },
    {
        number: "3",
        title: "FIXED SCOPE & PRICE",
        description: "Written contract. Fixed scope. Fixed price. Milestone-based payments tied to deliverables — not calendar dates. No surprises. Ever.",
        tag: "5 DAYS · FIXED PRICE · WRITTEN SCOPE"
    },
    {
        number: "4",
        title: "BUILD & DELIVER",
        description: "Weekly check-ins. Live progress dashboard. Dedicated account lead. You always know exactly where your project stands — in real time.",
        tag: "WEEKLY UPDATES · LIVE DASHBOARD"
    }
];

const HowItWorks = () => {
    return (
        <section className="bg-white py-[100px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">
                {/* Header Area Area Area Area Area Area Area Area */}
                <div className="max-w-2xl mb-20">
                    <span className="text-[10px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                        HOW IT WORKS
                    </span>
                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-normal text-[#100702] mb-6  leading-[0.95] font-['Bebas_Neue'] uppercase">
                        WHAT HAPPENS WHEN <br /> YOU REACH OUT.
                    </h2>
                    <p className="text-[13px] md:text-sm text-black leading-relaxed font-medium max-w-sm">
                        No pressure. No pitch. A clear process you control at every step — nothing moves without your sign-off.
                    </p>
                </div>

                {/* Timeline Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area */}
                <div className="relative">
                    {/* Horizontal connector line */}
                    <div className="hidden lg:block absolute top-[28px] left-[28px] right-[calc(25%-28px)] h-[2px] bg-[#FD5A07]" />

                    {/* Steps Row */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                viewport={{ once: true }}
                                className="flex-1 flex flex-col"
                            >
                                {/* Circle */}
                                <div className="flex items-center mb-10 lg:mb-12">
                                    <div className="w-14 h-14 rounded-full bg-[#FD5A07] flex items-center justify-center shrink-0 z-10 shadow-lg shadow-orange-500/20">
                                        <span className="text-black text-xl md:text-2xl font-normal font-['Bebas_Neue'] leading-none">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="pr-8 lg:pr-12 flex-1 flex flex-col">
                                    <h3 className="text-lg md:text-2xl font-normal text-black mb-4 uppercase font-['Bebas_Neue']">
                                        {step.title}
                                    </h3>
                                    <p className="text-md  text-black font-['barlow'] mb-8 font-medium">
                                        {step.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <HiOutlineClock className="w-4 h-4 text-[#FD5A07] shrink-0" />
                                        <span className="text-[10px] font-semibold text-[#FD5A07]  uppercase">
                                            {step.tag}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;