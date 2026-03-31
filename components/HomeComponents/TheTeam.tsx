"use client";

import React from 'react';
import { motion } from "framer-motion";

const members = [
    {
        initials: "SG",
        name: "FOUNDER NAME",
        role: "Founder & Strategy Lead",
        quote: '"I built my first business at 22 and learned what not to do. Now I help founders skip the expensive part."'
    },
    {
        initials: "SG",
        name: "TECH LEAD NAME",
        role: "Head of Engineering",
        quote: '"I built my first business at 22 and learned what not to do. Now I help founders skip the expensive part."'
    },
    {
        initials: "SG",
        name: "GROWTH LEAD NAME",
        role: "Head of Growth",
        quote: '"I built my first business at 22 and learned what not to do. Now I help founders skip the expensive part."'
    },
    {
        initials: "SG",
        name: "DESIGN LEAD NAME",
        role: "Head of Product & Design",
        quote: '"I built my first business at 22 and learned what not to do. Now I help founders skip the expensive part."'
    }
];

const MemberCard = ({ initials, name, role, quote, index }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col flex-1  overflow-hidden  bg-[#150d04]  duration-300 p-0 font-['Barlow']"
    >
        {/* Photo Placeholder Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area */}
        <div className="w-full rounded bg-[#32190A] shrink-0 relative overflow-hidden" style={{ minHeight: "240px" }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                 style={{ background: "radial-gradient(ellipse at center, rgba(253,90,7,0.06) 0%, transparent 70%)" }} />
        </div>

        {/* Card Body Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area */}
        <div className="pt-6 pb-3 px-4 flex flex-col gap-4 bg-[#221005]">
            {/* Profile Row */}
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#F5C5A3] flex items-center justify-center shrink-0">
                    <span className="text-[#FD5A07] text-xl font-bold">{initials}</span>
                </div>
                <div className="flex flex-col">
                    <p className="text-white text-xl md:text-2xl font-normal uppercase  font-['Bebas_Neue'] leading-tight">
                        {name}
                    </p>
                    <p className="text-[#FD5A07] text-sm font-semibold ">
                        {role}
                    </p>
                </div>
            </div>

            {/* Quote */}
            <p className="text-sm text-white leading-relaxed italic font-medium">
                {quote}
            </p>
        </div>
    </motion.div>
);

const TheTeam = () => {
    return (
        <section className="bg-[#100702] py-[100px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                        THE TEAM
                    </span>
                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-normal text-white mb-6  leading-[0.95] font-['Bebas_Neue'] uppercase">
                        THE PEOPLE WHO ACTUALLY <br className="hidden md:block" /> DO THE WORK.
                    </h2>
                    <p className="text-[16px] md:text-[17px] text-white leading-relaxed font-medium max-w-[500px]">
                        No account managers passing messages. The team you meet in week one is the team that builds your project and picks up your calls.
                    </p>
                </div>

                {/* Cards Grid Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area */}
                <div className="flex flex-col sm:flex-row gap-6">
                    {members.map((member, i) => (
                        <MemberCard key={i} index={i} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheTeam;