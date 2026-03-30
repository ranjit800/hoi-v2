"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import Button from "@/components/Common/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const blogs = [
    {
        date: "JUNE 5, 2026",
        title: "AI TRANSFORMATION IN 2026",
        excerpt: "How automated agents are redefining the Australian SME landscape this year.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80"
    },
    {
        date: "MAY 28, 2026",
        title: "SCALING WITHOUT HEADCOUNT",
        excerpt: "The secret to growing your revenue 2X without hiring a single new employee.",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&q=80"
    },
    {
        date: "MAY 15, 2026",
        title: "SECURITY IN THE AI AGE",
        excerpt: "Protecting your business data while leveraging the power of large language models.",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=640&q=80"
    },
    {
        date: "MAY 02, 2026",
        title: "FINTECH REVOLUTION",
        excerpt: "Why custom payment architectures are the new competitive advantage for retailers.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?w=640&q=80"
    },
    {
        date: "APRIL 20, 2026",
        title: "GOVERNMENT DIGITISATION",
        excerpt: "Bridging the gap between legacy systems and modern cloud-native citizen services.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=640&q=80"
    },
    {
        date: "APRIL 05, 2026",
        title: "DEEP TECH FOR STARTUPS",
        excerpt: "Moving beyond basic SaaS: How to build defensible IP using niche AI models.",
        image: "https://images.unsplash.com/photo-1664575185263-bfc297049944?w=640&q=80"
    },
    {
        date: "MARCH 22, 2026",
        title: "THE FUTURE OF CX",
        excerpt: "Building empathetic AI agents that people actually enjoy talking to.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=640&q=80"
    },
    {
        date: "MARCH 10, 2026",
        title: "AUTOMATING LOGISTICS",
        excerpt: "How real-time tracking and predictive AI saved a Perth logistics firm 40% in costs.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80"
    },
    {
        date: "FEBRUARY 25, 2026",
        title: "ETHICAL AI PRACTICES",
        excerpt: "Ensuring bias-free automation in your hiring and customer service workflows.",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=640&q=80"
    }
];

const BlogCard = ({ date, title, excerpt, image }: { date: string; title: string; excerpt: string; image: string }) => (
    <div className="flex-1 border border-gray-100 rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white h-full">
        <div className="w-full h-56 md:h-60 overflow-hidden relative bg-gray-100">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        <div className="p-7 flex flex-col gap-3">
            <span className="text-xl text-black font-normal font-['Bebas_Neue'] uppercase">
                {date}
            </span>
            <h3 className="text-xl md:text-2xl font-normal text-[#100702] uppercase font-['Bebas_Neue'] line-clamp-2">
                {title}
            </h3>
            <p className="text-[13px] text-[#747474] font-['Barlow'] leading-relaxed font-medium line-clamp-3">
                {excerpt}
            </p>
            <div className="flex items-center gap-2 mt-2">
                <span className="text-[#FD5A07] text-[17px] font-normal uppercase font-['Bebas_Neue']">READ NOW</span>
                <HiArrowRight className="w-4 h-4 text-[#FD5A07] group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    </div>
);

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const Blogs = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="bg-white py-[100px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-0">
                {/* Section Header */}
                <motion.div 
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
                >
                    <div className="max-w-2xl">
                        <motion.span variants={fadeUp} className="text-[10px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                            REAL TRANSFORMATION STORIES
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-[clamp(2rem,5vw,4rem)] font-normal text-[#100702] mb-6 leading-[0.95] font-['Bebas_Neue'] uppercase">
                            OUR RECENT BLOGS.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[13px] md:text-[17px] text-[#100702] font-['Barlow'] leading-relaxed font-medium max-w-sm">
                            Practical insights for Australian business owners who want to digitise, automate, and grow — no fluff, no jargon.
                        </motion.p>
                    </div>
                    <motion.div variants={fadeUp}>
                        <Button>VIEW ALL BLOGS</Button>
                    </motion.div>
                </motion.div>

                {/* Blog Cards Carousel Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="
                        [&_.swiper-pagination]:relative! [&_.swiper-pagination]:mt-12!
                        [&_.swiper-pagination-bullet]:w-2.5! [&_.swiper-pagination-bullet]:h-2.5! 
                        [&_.swiper-pagination-bullet]:bg-gray-200! [&_.swiper-pagination-bullet]:opacity-100!
                        [&_.swiper-pagination-bullet-active]:bg-[#FD5A07]! [&_.swiper-pagination-bullet-active]:w-6!
                        [&_.swiper-pagination-bullet-active]:rounded-full! [&_.swiper-pagination-bullet]:transition-all
                        [&_.swiper-pagination-bullet]:duration-300
                    "
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="blogs-swiper"
                    >
                        {blogs.map((blog, i) => (
                            <SwiperSlide key={i} className="h-auto pb-4">
                                <BlogCard {...blog} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;