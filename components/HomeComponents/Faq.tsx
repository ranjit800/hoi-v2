"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
    {
        question: "What exactly does HOI do — and how is it different from a typical agency?",
        answer: "HOI is a full-stack business builder. Unlike agencies that deliver one piece and disappear, we combine strategy, technology, and marketing execution under one accountable team. We own your outcomes — not just your deliverables."
    },
    {
        question: "What exactly does HOI do — and how is it different from a typical agency?",
        answer: "HOI is a full-stack business builder. Unlike agencies that deliver one piece and disappear, we combine strategy, technology, and marketing execution under one accountable team. We own your outcomes — not just your deliverables."
    },
    {
        question: "What exactly does HOI do — and how is it different from a typical agency?",
        answer: "HOI is a full-stack business builder. Unlike agencies that deliver one piece and disappear, we combine strategy, technology, and marketing execution under one accountable team. We own your outcomes — not just your deliverables."
    },
    {
        question: "What exactly does HOI do — and how is it different from a typical agency?",
        answer: "HOI is a full-stack business builder. Unlike agencies that deliver one piece and disappear, we combine strategy, technology, and marketing execution under one accountable team. We own your outcomes — not just your deliverables."
    }
];

const FaqItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-sm bg-[#1A1009]/40 overflow-hidden"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left cursor-pointer group bg-[#221005]"
            >
                <span className="text-[14px] md:text-[15px] text-white/90 font-medium leading-snug">
                    {question}
                </span>
                <div className="shrink-0 text-[#FD5A07] group-hover:scale-110 transition-transform">
                    {open ? <HiMinus className="w-5 h-5" /> : <HiPlus className="w-5 h-5" />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <div className="px-8 pb-6 text-[13px] md:text-sm text-white/50 leading-relaxed font-medium border-t border-white/5 pt-5">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Faq = () => {
    return (
        <section className="bg-[#100702] py-[100px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                        FAQ
                    </span>
                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-normal text-white mb-6  leading-[0.95] font-['Bebas_Neue'] uppercase">
                        COMMON QUESTIONS, <br className="hidden md:block" /> ANSWERED HONESTLY.
                    </h2>
                </div>

                {/* Accordion Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <FaqItem key={i} index={i} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;