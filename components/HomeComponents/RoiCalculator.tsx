"use client";

import React, { useState, useMemo, useRef } from 'react';
import { motion, useInView, Variants } from "framer-motion";
import Button from "@/components/Common/Button";

// ── Sub-components ──────────────────────────────────────────────────────────

const ResultColumn = ({ label, value, sublabel }: { label: string; value: string; sublabel: string }) => (
    <div className="flex flex-col gap-6 p-8 md:p-6 border-b md:border-b-0 md:border-r last:border-none border-white flex-1 min-w-0">
        <p className="text-[16px] md:text-[13px] text-white font-['Barlow'] font-medium leading-snug max-w-[180px]">
            {label}
        </p>
        <span className="text-[#FD5A07] text-[30px] md:text-6xl lg:text-7xl font-normal font-['Bebas_Neue'] leading-none truncate">
            {value}
        </span>
        <p className="text-[16px] md:text-[13px] text-white font-['Barlow'] font-medium leading-snug max-w-[180px]">
            {sublabel}
        </p>
    </div>
);

const NumberInput = ({
    label,
    value,
    onChange,
    min = 0,
    max = 1000
}: {
    label: string;
    value: number;
    onChange: (val: number) => void;
    min?: number;
    max?: number;
}) => (
    <div className="space-y-4">
        <label className="text-[14px] text-white font-medium block">
            {label}
        </label>
        <div className="relative flex items-center">
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(Math.min(max, Math.max(min, parseInt(e.target.value) || 0)))}
                className="w-full bg-[#1A1009] rounded-sm p-4 text-white outline-none focus:border-[#FD5A07]/40 transition-all font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-transparent pr-16"
            />
            <div className="absolute right-2 flex flex-col h-[calc(100%-8px)] w-10 border-l border-white/5">
                <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); onChange(Math.min(max, value + 1)); }}
                    className="flex-1 flex items-center justify-center hover:bg-white/5 hover:text-[#FD5A07] transition-all rounded-tr-sm"
                    title="Increase"
                >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6L6 1L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="h-px bg-white/5 w-full" />
                <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); onChange(Math.max(min, value - 1)); }}
                    className="flex-1 flex items-center justify-center hover:bg-white/5 hover:text-[#FD5A07] transition-all rounded-br-sm"
                    title="Decrease"
                >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2L6 7L11 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
);

// ── Animation variants ──────────────────────────────────────────────────────

const headerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const slideFromLeft: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.75, ease: "easeOut" as const },
    },
};

const slideFromRight: Variants = {
    hidden: { opacity: 0, x: 70 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.75, ease: "easeOut" as const },
    },
};

// ── RoiCalculator ───────────────────────────────────────────────────────────

const RoiCalculator = () => {
    const [hours, setHours] = useState(20);
    const [rate,  setRate]  = useState(65);
    const [staff, setStaff] = useState(5);

    // Single ref on the section — all children react to it
    const sectionRef = useRef(null);
    const isInView   = useInView(sectionRef, { once: true, amount: 0.2 });

    const calculations = useMemo(() => {
        const annualCost     = hours * rate * staff * 52;
        const annualSavings  = annualCost * 0.38;
        const paybackMonths  = annualSavings > 0 ? (12000 / annualSavings) * 12 : 0;

        const fmt = (n: number) => {
            if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
            if (n >= 1_000)     return `$${(n / 1_000).toFixed(0)}K`;
            return `$${n.toFixed(0)}`;
        };

        return {
            annualCost:    fmt(annualCost),
            annualSavings: fmt(annualSavings),
            payback:       paybackMonths > 0 ? `${paybackMonths.toFixed(1)}MO` : '—',
        };
    }, [hours, rate, staff]);

    return (
        <section ref={sectionRef} className="bg-[#100702] py-[100px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">

                {/* ── Header — fades up ── */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-16"
                >
                    <motion.span
                        variants={fadeUp}
                        className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4"
                    >
                        ROI CALCULATOR
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="text-[clamp(2.5rem,5vw,4.2rem)] text-white mb-5 leading-[0.99] font-['Bebas_Neue'] uppercase"
                    >
                        CALCULATE YOUR SAVINGS
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-[16px] md:text-[17px] font-['Barlow'] text-white leading-relaxed max-w-2xl font-medium"
                    >
                        Based on HOI client averages across 90+ Australian businesses
                    </motion.p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch justify-between">

                    {/* ── Left Side: slides in from LEFT ── */}
                    <motion.div
                        variants={slideFromLeft}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="w-full lg:w-[40%] space-y-6 flex flex-col justify-center"
                    >
                        <div className="space-y-6">
                            <NumberInput
                                label="Total manual task hours per week (whole team)"
                                value={hours}
                                onChange={setHours}
                                min={1}
                                max={500}
                            />
                            <NumberInput
                                label="Average team hourly cost (AUD)"
                                value={rate}
                                onChange={setRate}
                                min={20}
                                max={500}
                            />
                            <NumberInput
                                label="Number of staff affected"
                                value={staff}
                                onChange={setStaff}
                                min={1}
                                max={500}
                            />
                        </div>

                        <div className="pt-6">
                            <Button className="w-full">
                                VERIFY WITH FREE AUDIT
                            </Button>
                        </div>
                    </motion.div>

                    {/* ── Right Side: slides in from RIGHT ── */}
                    <motion.div
                        variants={slideFromRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="w-full lg:w-[55%] border border-white rounded-sm flex flex-col md:flex-row h-fit self-center bg-[#0B0502]"
                    >
                        <ResultColumn
                            label="Current annual cost of manual work"
                            value={calculations.annualCost}
                            sublabel="Before HOI Automation"
                        />
                        <ResultColumn
                            label="Projected annual savings (avg. 38% reduction)"
                            value={calculations.annualSavings}
                            sublabel="HOI client average — measured at 60 days"
                        />
                        <ResultColumn
                            label="Estimated ROI payback period"
                            value={calculations.payback}
                            sublabel="Assuming typical HOI project investment"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default RoiCalculator;