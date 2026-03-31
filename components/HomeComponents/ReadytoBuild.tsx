"use client";

import React from 'react';
import { motion } from "framer-motion";
import Button from "@/components/Common/Button";

const ReadytoBuild = () => {
    return (
        <section className="bg-[#100702] py-[120px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-5 max-w-4xl mx-auto"
                >
                    <span className="text-[10px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block tracking-wide">
                        READY TO BUILD?
                    </span>

                    <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-white mb-6  leading-[0.95] font-['Bebas_Neue'] uppercase">
                        STOP GUESSING. <br className="hidden md:block" /> START BUILDING <span className="text-[#FD5A07]">REVENUE.</span>
                    </h2>

                    <p className="text-[16px] md:text-base text-white font-medium  max-w-2xl">
                        Book a free 30-minute call. We'll map exactly which Z System stages apply to your business.
                    </p>

                    <Button className="mt-2">
                        BOOK A FREE CALL
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ReadytoBuild;