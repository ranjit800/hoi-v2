"use client";

import React from 'react';
import { motion } from "framer-motion";
import { HiXMark, HiCheck } from "react-icons/hi2";
import Button from "@/components/Common/Button";

const ComparisonRow = ({ text, subtext, iconType, index }: any) => {
    const isOld = iconType === "x";
    return (
        <motion.div 
            initial={{ opacity: 0, x: isOld ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex items-start gap-4 ${isOld ? "mb-1.5" : "mb-8"} last:mb-0`}
        >
            <div className={`mt-1 shrink-0 ${isOld ? "text-gray-600" : "text-[#FD5A07]"}`}>
                {isOld ? <HiXMark className="w-5 h-5 opacity-70" /> : <HiCheck className="w-5 h-5" />}
            </div>
            <div>
                <p className={`text-[13px] md:text-[15px] leading-tight font-medium font-['barlow'] ${isOld ? "text-[#87766F] line-through decoration-gray-500/50" : "text-white"}`}>
                    {text}
                </p>
                {subtext && (
                    <p className="text-[#FD5A07] text-[11px] md:text-[12px] font-bold mt-1  font-['barlow']">
                        {subtext}
                    </p>
                )}
            </div>
        </motion.div>
    );
};


const TheProblem = () => {
    const oldWay = [
        "Agencies that deliver one piece and disappear",
        "Consultants who report but never execute",
        "Paying for strategy with no team to implement it",
        "No one accountable for your actual revenue",
        "Tech builds that don't connect to your sales",
        "Great startup idea — no trusted build partner",
        "Manual processes eating your team's capacity"
    ];

    const hoiWay = [
        { text: "One team — strategy, build, marketing & revenue accountability", subtext: "↑ avg. 67% reduction in vendor coordination time" },
        { text: "We own your outcomes, not just your deliverables", subtext: "↑ 3.2× average revenue growth at 12 months" },
        { text: "Startup built and live in 90 days — not 12 months", subtext: "↑ avg. $180k saved vs. equivalent in-house team" },
        { text: "AI automation cuts operational costs by up to 40%", subtext: "↑ avg. 38% reduction in manual hours at 60 days" },
        { text: "No lock-in contracts — month-to-month after delivery", subtext: "↑ 94% client retention — they stay because it works" },
        { text: "Fixed scope. Fixed price. No surprise invoices.", subtext: "↑ 100% of projects delivered to written scope" }
    ];

    return (
        <section className="bg-[#100702] py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0 max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16 px-4 md:px-0">
                    <div className="max-w-4xl">
                        <span className="text-[10px] md:text-[17px] font-['barlow'] uppercase text-[#FD5A07] block mb-3">
                            THE PROBLEM
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] text-white my-4  leading-[0.95] font-['Bebas_Neue'] uppercase">
                            THE PROBLEM WITH HOW <br className="hidden md:block" /> BUSINESSES BUY HELP TODAY.
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-white/90 leading-relaxed max-w-3xl font-['barlow']">
                            Most businesses we speak with have tried an agency, a consultant, or a freelancer before — and ended up more frustrated than when they started. Here's why the old model is broken, and what HOI does differently.
                        </p>
                    </div>
                    
                    <div className="shrink-0 mt-4 lg:mt-0">
                        <Button>
                            READ CASE STUDIES
                        </Button>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 px-4 md:px-0">
                    {/* The Old Way Section */}
                    <div className="bg-[#221005] p-7 md:p-10 lg:p-14 rounded-sm border border-white/5 h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl md:text-3xl font-normal text-gray-500 mb-8  font-['Bebas_Neue'] uppercase">
                                THE OLD WAY
                            </h3>
                            <div className="space-y-4">
                                {oldWay.map((item, i) => (
                                    <ComparisonRow key={i} index={i} text={item} iconType="x" />
                                ))}
                            </div>
                        </div>
                        
                        {/* Quote Box Area */}
                        <div className="mt-10 p-6 md:p-8 bg-[#40200D] border border-white/5 rounded-sm">
                            <p className="text-[13px] md:text-[15px] leading-relaxed text-[#87766F] font-medium italic font-['barlow']">
                                "Most businesses we talk to have been burned at least once before. That's actually why they come to us." <span className="text-[#87766F] font-semibold not-italic ml-2 block lg:inline mt-2 lg:mt-0 font-['barlow']">— HOI Founder</span>
                            </p>
                        </div>
                    </div>

                    {/* The HOI Way Section */}
                    <div className="bg-[#221005] p-7 md:p-10 lg:p-14 rounded-sm border border-[#FD5A07]/10 relative overflow-hidden shadow-2xl shadow-orange-500/5 h-full">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD5A07]/5 blur-[100px] pointer-events-none" />
                        
                        <h3 className="text-xl md:text-3xl font-normal text-[#FD5A07] mb-8  font-['Bebas_Neue'] uppercase">
                            THE HOI WAY
                        </h3>
                        <div className="space-y-5">
                            {hoiWay.map((item, i) => (
                                <ComparisonRow key={i} index={i} text={item.text} subtext={item.subtext} iconType="check" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheProblem;