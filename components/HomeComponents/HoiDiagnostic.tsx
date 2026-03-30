"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Common/Button";

type DiscType = 'D' | 'I' | 'S' | 'C';

interface Option {
    letter: string;
    text: React.ReactNode;
    value: DiscType;
}

interface Question {
    title: string;
    description?: string;
    options: Option[];
}

interface Result {
    type: DiscType;
    badge: string;
    headline: string;
    sub: string;
    bigMetric: string;
    metricLabel: string;
    points: string[];
    ctaText: string;
    ctaLink: string;
    secondCtaText?: string;
    secondCtaLink?: string;
}

const steps = [
    { number: "01", label: "Situation" },
    { number: "02", label: "Blocker" },
    { number: "03", label: "Success" },
    { number: "04", label: "Your Path" }
];

const quizQuestions: Question[] = [
    {
        title: "What best describes your situation right now?",
        options: [
            { letter: "A", value: "D", text: <>I run an established business and want to <strong>grow revenue significantly</strong> this year</> },
            { letter: "B", value: "I", text: <>I have a <strong>startup idea</strong> and need a trusted team to build and launch it</> },
            { letter: "C", value: "S", text: <>My business runs on <strong>manual processes</strong> — I need to modernise and scale</> },
            { letter: "D", value: "C", text: <>My <strong>marketing and sales</strong> aren't delivering — I need to understand why</> }
        ]
    },
    {
        title: "What's your biggest blocker right now?",
        options: [
            { letter: "A", value: "D", text: <>I know what needs to happen — I need a team to <strong>execute fast and own the result</strong></> },
            { letter: "B", value: "I", text: <>I need someone who truly <strong>gets the vision</strong> and gets excited about it with me</> },
            { letter: "C", value: "S", text: <>I've been burned before — I need a <strong>safe, clear process</strong> I can trust from day one</> },
            { letter: "D", value: "C", text: <>I need to see <strong>hard data and methodology</strong> before committing to anything</> }
        ]
    },
    {
        title: "What does success look like in 12 months?",
        options: [
            { letter: "A", value: "D", text: <><strong>Measurable revenue growth</strong> — a specific number I can point to and own</> },
            { letter: "B", value: "I", text: <>A <strong>live product or business</strong> I'm proud of and excited to tell people about</> },
            { letter: "C", value: "S", text: <>A business that <strong>runs more smoothly</strong> — less chaos and manual work for my team</> },
            { letter: "D", value: "C", text: <>A <strong>clear, documented system</strong> I fully understand and can optimise over time</> }
        ]
    }
];

const results: Record<DiscType, Result> = {
    D: {
        type: 'D',
        badge: "D · Growth Driver — Revenue Acceleration Path",
        headline: "YOUR 90-DAY BATTLE PLAN.",
        sub: "You're results-first. You don't need theory — you need execution with accountability. Here's your first 90 days.",
        bigMetric: "3.2×",
        metricLabel: "Average revenue growth for clients like you — measured at 12 months",
        points: [
            "Week 1–2: Revenue audit — identify your 3 highest-leverage growth opportunities",
            "Week 3–6: Build and launch highest-impact system — automation, marketing, or product",
            "Week 7–12: Optimise, scale, hit first revenue milestone, map next 90 days"
        ],
        ctaText: "GET MY 90-DAY PLAN",
        ctaLink: "#cta-wrap",
        secondCtaText: "See Revenue Case Studies",
        secondCtaLink: "#results"
    },
    I: {
        type: 'I',
        badge: "I · Visionary Builder — Startup Launch Path",
        headline: "LET'S BUILD SOMETHING GREAT.",
        sub: "You've got the vision. We've built 30+ Australian startups. We know exactly how to make yours real, fast.",
        bigMetric: "90",
        metricLabel: "Days from idea to live product — our average startup launch timeline",
        points: [
            "Week 1: Vision workshop — product map, feature priorities, GTM strategy on paper",
            "Weeks 2–10: Design + engineering sprint — you're in every key decision",
            "Weeks 11–12: Launch, first users, investor deck, 6-month growth plan"
        ],
        ctaText: "TALK ABOUT MY IDEA",
        ctaLink: "#cta-wrap",
        secondCtaText: "See Startups We've Built",
        secondCtaLink: "#results"
    },
    S: {
        type: 'S',
        badge: "S · Steady Builder — Safe Transformation Path",
        headline: "A CLEAR PATH FORWARD.",
        sub: "You've been burned before. Most of our clients have that story. Here's what a low-risk, transparent start with HOI looks like.",
        bigMetric: "94%",
        metricLabel: "Of HOI clients stay beyond their first project — no lock-in. They stay because it works.",
        points: [
            "Step 1: Free 45-min strategy call — we listen. No pitch, no pressure, zero obligation.",
            "Step 2: Written growth audit in 3 days — yours to keep regardless of what you decide",
            "Step 3: Fixed-scope, fixed-price first project — written contract, milestone payments"
        ],
        ctaText: "BOOK FREE STRATEGY CALL",
        ctaLink: "#cta-wrap",
        secondCtaText: "Download: How We Work",
        secondCtaLink: "#"
    },
    C: {
        type: 'C',
        badge: "C · Evidence Builder — Data-Driven Audit Path",
        headline: "HERE'S THE DATA.",
        sub: "You want methodology and evidence before committing. That's the right approach. Here's what verified data shows for businesses in your situation.",
        bigMetric: "67%",
        metricLabel: "Average reduction in manual task hours after HOI automation — at 60 days post-implementation",
        points: [
            "Businesses your size typically see measurable ROI within 4–6 months",
            "Methodology: written audit → fixed scope → milestone delivery → weekly reporting",
            "We'll send 3 case studies from your industry before any call"
        ],
        ctaText: "SEE CASE STUDIES + METHOD",
        ctaLink: "#results",
        secondCtaText: "Download: ROI Benchmarks",
        secondCtaLink: "#"
    }
};

const HoiDiagnostic = () => {
    const [quizStage, setQuizStage] = useState<'intro' | 'questions' | 'result'>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<DiscType[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const activeStep = useMemo(() => {
        if (quizStage === 'intro') return 0;
        if (quizStage === 'result') return 3;
        return currentQuestionIndex + 1;
    }, [quizStage, currentQuestionIndex]);

    const resultType = useMemo(() => {
        if (answers.length === 0) return 'D';
        const counts: Record<DiscType, number> = { D: 0, I: 0, S: 0, C: 0 };
        answers.forEach(a => counts[a]++);
        return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as DiscType);
    }, [answers]);

    const handleStart = () => {
        setQuizStage('questions');
    };

    const handleOptionSelect = (index: number) => {
        setSelectedOption(index);
    };

    const handleNext = () => {
        if (selectedOption === null) return;

        const val = quizQuestions[currentQuestionIndex].options[selectedOption].value;
        const newAnswers = [...answers, val];
        setAnswers(newAnswers);

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            setQuizStage('result');
        }
    };

    const handleBack = () => {
        setQuizStage('intro');
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedOption(null);
    };

    const progress = quizStage === 'intro' ? 0 : quizStage === 'result' ? 100 : ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    return (
        <section className="bg-[#0D0704] py-[80px] md:py-[120px] overflow-hidden" id="quiz">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    
                    {/* Left Column */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-between h-full min-h-[300px]">
                        <div>
                            <span className="text-[12px] font-bold tracking-[0.2em] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                                60 Seconds
                            </span>
                            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#ffffff] mb-6 leading-[0.9] font-['Bebas_Neue'] uppercase">
                                60 SECONDS. <br /> YOUR <span className="text-[#FD5A07]">GROWTH</span> PATH.
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium max-w-md font-['Barlow']">
                                3 quick questions. We'll show you exactly where your biggest opportunity is — and what to do about it this week. No email required to see your result.
                            </p>
                        </div>

                        {/* Step Indicators */}
                        <div className="flex mt-12 bg-[#1A1009] border border-white/5 rounded-sm overflow-hidden">
                            {steps.map((step, i) => {
                                const isDone = i < activeStep;
                                const isActive = i === activeStep;
                                return (
                                    <div
                                        key={i}
                                        className={`flex flex-col items-center px-4 py-4 flex-1 transition-all border-r border-white/5 last:border-none ${
                                            isActive 
                                                ? "bg-[#FD5A07]/10 border-t-2 border-t-[#FD5A07]" 
                                                : isDone ? "bg-[#FD5A07]/5" : "bg-[#1A1009]"
                                        }`}
                                    >
                                        <span className={`text-xl md:text-2xl font-bold font-['Bebas_Neue'] leading-none mb-1 ${isActive || isDone ? "text-[#FD5A07]" : "text-gray-600"}`}>
                                            {step.number}
                                        </span>
                                        <span className={`text-[9px] font-bold tracking-widest uppercase ${isActive ? "text-white" : isDone ? "text-[#FD5A07]/70" : "text-gray-500"}`}>
                                            {step.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Quiz Area */}
                    <div className="w-full lg:w-[55%]">
                        <div className="bg-[#160D08] border border-white/5 rounded-sm overflow-hidden min-h-[400px] flex flex-col">
                            {/* Progress Bar */}
                            <div className="h-[3px] bg-white/5">
                                <motion.div 
                                    className="h-full bg-[#FD5A07]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            <div className="p-8 md:p-12 lg:p-14 flex-1 flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    {quizStage === 'intro' && (
                                        <motion.div
                                            key="intro"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="flex flex-col gap-6"
                                        >
                                            <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.1] font-['Bebas_Neue'] uppercase">
                                                What's your biggest growth challenge right now?
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium max-w-xl font-['Barlow'] mb-4">
                                                Answer 3 quick questions and get a personalised growth path — built specifically for your situation.
                                            </p>
                                            <div className="flex flex-col gap-4">
                                                <Button onClick={handleStart} className="w-full md:w-fit py-4 px-10">
                                                    START NOW →
                                                </Button>
                                                <p className="text-[12px] text-gray-500 italic font-medium">
                                                    No email required until the end. Your answers are private.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {quizStage === 'questions' && (
                                        <motion.div
                                            key={`question-${currentQuestionIndex}`}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="flex flex-col h-full"
                                        >
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-[1.2] font-['Bebas_Neue'] uppercase tracking-wide">
                                                {quizQuestions[currentQuestionIndex].title}
                                            </h3>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                                                {quizQuestions[currentQuestionIndex].options.map((option, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleOptionSelect(idx)}
                                                        className={`flex gap-4 items-start p-4 border rounded-sm transition-all text-left ${
                                                            selectedOption === idx 
                                                                ? "bg-[#FD5A07]/15 border-[#FD5A07]" 
                                                                : "bg-[#0D0704] border-white/5 hover:bg-[#FD5A07]/5"
                                                        }`}
                                                    >
                                                        <span className={`w-6 h-6 rounded-sm flex items-center justify-center text-[12px] font-bold transition-all ${
                                                            selectedOption === idx 
                                                                ? "bg-[#FD5A07] text-white" 
                                                                : "bg-[#1A1009] text-gray-500"
                                                        }`}>
                                                            {option.letter}
                                                        </span>
                                                        <span className="text-[13px] text-gray-300 font-medium leading-relaxed font-['Barlow']">
                                                            {option.text}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="mt-auto">
                                                <Button 
                                                    onClick={handleNext} 
                                                    className={`w-full md:w-fit py-3 px-12 transition-all ${selectedOption === null ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                                                >
                                                    {currentQuestionIndex === quizQuestions.length - 1 ? "SHOW MY GROWTH PATH →" : "NEXT →"}
                                                </Button>
                                                <p className="text-[11px] text-gray-600 mt-4 italic">
                                                    Your answers are private and not shared.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {quizStage === 'result' && (
                                        <motion.div
                                            key="result"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className={`flex flex-col ${
                                                resultType === 'D' ? 'text-[#FD5A07]' : 
                                                resultType === 'I' ? 'text-[#FFB800]' : 
                                                resultType === 'S' ? 'text-[#2ECC71]' : 'text-[#3B9EFF]'
                                            }`}
                                        >
                                            <div className={`text-[10px] font-black tracking-[0.2em] uppercase py-1 px-3 w-fit rounded-sm mb-6 ${
                                                resultType === 'D' ? 'bg-[#FD5A07]/15 text-[#FD5A07]' : 
                                                resultType === 'I' ? 'bg-[#FFB800]/15 text-[#FFB800]' : 
                                                resultType === 'S' ? 'bg-[#2ECC71]/15 text-[#2ECC71]' : 'bg-[#3B9EFF]/15 text-[#3B9EFF]'
                                            }`}>
                                                {results[resultType].badge}
                                            </div>
                                            
                                            <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[0.95] font-['Bebas_Neue'] uppercase mb-4">
                                                {results[resultType].headline}
                                            </h3>
                                            
                                            <p className="text-sm md:text-base text-gray-400 font-medium font-['Barlow'] mb-8 max-w-xl">
                                                {results[resultType].sub}
                                            </p>

                                            <div className="flex items-end gap-4 mb-8">
                                                <span className={`text-6xl md:text-8xl font-black font-['Bebas_Neue'] leading-none ${
                                                    resultType === 'D' ? 'text-[#FD5A07]' : 
                                                    resultType === 'I' ? 'text-[#FFB800]' : 
                                                    resultType === 'S' ? 'text-[#2ECC71]' : 'text-[#3B9EFF]'
                                                }`}>
                                                    {results[resultType].bigMetric}
                                                </span>
                                                <p className="text-[12px] md:text-sm text-gray-500 font-bold uppercase leading-tight max-w-[180px] mb-2 font-['Barlow']">
                                                    {results[resultType].metricLabel}
                                                </p>
                                            </div>

                                            <ul className="flex flex-col gap-4 mb-10">
                                                {results[resultType].points.map((pt, i) => (
                                                    <li key={i} className="flex gap-3 text-sm font-medium text-gray-300 font-['Barlow']">
                                                        <span className={`font-bold ${
                                                            resultType === 'D' ? 'text-[#FD5A07]' : 
                                                            resultType === 'I' ? 'text-[#FFB800]' : 
                                                            resultType === 'S' ? 'text-[#2ECC71]' : 'text-[#3B9EFF]'
                                                        }`}>→</span>
                                                        {pt}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-4 mb-8">
                                                <Button href={results[resultType].ctaLink} className={`py-4 px-8 ${
                                                    resultType === 'I' ? 'bg-[#FFB800] hover:bg-[#E5A500] text-black' : 
                                                    resultType === 'S' ? 'bg-[#2ECC71] hover:bg-[#27AE60] text-black' : 
                                                    resultType === 'C' ? 'bg-[#3B9EFF] hover:bg-[#2F80ED] text-white' : ''
                                                }`}>
                                                    {results[resultType].ctaText} →
                                                </Button>
                                                {results[resultType].secondCtaText && (
                                                    <a href={results[resultType].secondCtaLink} className="flex items-center text-[12px] font-bold tracking-widest uppercase text-gray-500 hover:text-white transition-all border border-white/5 rounded-sm px-6">
                                                        {results[resultType].secondCtaText}
                                                    </a>
                                                )}
                                            </div>

                                            <button onClick={handleBack} className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600 hover:text-gray-400 w-fit">
                                                ↩ RETAKE QUIZ
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HoiDiagnostic;