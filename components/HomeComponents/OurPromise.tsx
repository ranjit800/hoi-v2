"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const promises = [
    {
        title: "NO LOCK-IN CONTRACTS",
        description: "Month-to-month after the initial project. You stay because results are measurable — not because you're contractually trapped. Cancel with 30 days notice, always."
    },
    {
        title: "FIXED SCOPE, FIXED PRICE",
        description: "No surprise invoices. Every project scoped in writing before a single line of code is written. If we miss the scope, we fix it on our time and our cost — not yours."
    },
    {
        title: "FREE AUDIT — NO OBLIGATION",
        description: "Our growth audit is completely free. We'll tell you honestly if we're not the right fit — even if that means pointing you elsewhere. Your success matters more than our sale."
    }
];

const PromiseCard = ({ title, description, index }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex-1 p-8 md:p-10 border border-gray-100 rounded-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300"
    >
        <div className="mb-6">
            <Image 
                src="/Images/rocket-outline-black.png" 
                alt="Rocket" 
                width={40} 
                height={40} 
                className="object-contain"
            />
        </div>
        <h3 className="text-lg md:text-xl font-normal text-[#100702] mb-4 uppercase  leading-tight font-['Bebas_Neue']">
            {title}
        </h3>
        <p className="text-[15px] md:text-[16px] text-[#100702] font-['Barlow']  leading-relaxed font-medium">
            {description}
        </p>
    </motion.div>
);

const OurPromise = () => {
    return (
        <section className="bg-white py-[100px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                        OUR PROMISE
                    </span>
                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-normal text-[#100702] mb-6  leading-[0.95] font-['Bebas_Neue'] uppercase">
                        WE STAND BEHIND <br className="hidden md:block" /> EVERYTHING WE BUILD.
                    </h2>
                    <p className="text-[16px] md:text-[16px] text-[#100702] leading-relaxed font-medium max-w-sm font-['Barlow']">
                        We've been on the receiving end of bad vendor experiences too. So we built the guarantees we wished we'd had.
                    </p>
                </div>

                {/* Promise Cards Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area Area */}
                <div className="flex flex-col md:flex-row gap-6">
                    {promises.map((promise, i) => (
                        <PromiseCard key={i} index={i} {...promise} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPromise;