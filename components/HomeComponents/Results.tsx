"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from "framer-motion";
import { HiPlay } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        stat: "2.8×",
        statSub: "Revenue Growth · 9 Months",
        quote: "The ROI we've seen from the custom AI agents has been unprecedented. Our operations are now fully automated and and scaling seamlessly.",
        initials: "SG",
        name: "SOPHYA RAY GILL",
        role: "CEO OF CARL NETWORK"
    },
    {
        stat: "120%",
        statSub: "Efficiency Increase · 4 Months",
        quote: "HOI didn't just build an app; they re-engineered our entire workflow. We've saved 30+ man-hours per week since the deployment.",
        initials: "MC",
        name: "MICHELE CHOLE",
        role: "Founder of Rhodotion"
    },
    {
        stat: "4.5×",
        statSub: "Lead Gen Surge · 6 Months",
        quote: "Our marketing automation is now smarter than our competitors. The data architecture they built is the backbone of our growth.",
        initials: "JD",
        name: "JOHN DOE",
        role: "CTO of Fintech Australia"
    },
    {
        stat: "15k",
        statSub: "Monthly Man-Hours Saved",
        quote: "The government-grade security and AI precision HOI provided exceeded our enterprise compliance standards. Truly world-class.",
        initials: "AK",
        name: "ALEX KNIGHT",
        role: "Director at GovSystems"
    },
    {
        stat: "3.2×",
        statSub: "Customer Retention",
        quote: "Since integrating the AI support agents, our NPS score has hit an all-time high. The system is empathetic and incredibly fast.",
        initials: "SL",
        name: "SARAH LING",
        role: "Ops Manager at TechScale"
    },
    {
        stat: "99%",
        statSub: "Accuracy in Data Entry",
        quote: "Manual entry used to be our biggest bottleneck. Now, it's our biggest strength thanks to the LLM integration from HOI.",
        initials: "RB",
        name: "RICK BAKER",
        role: "COO of Established SMEs"
    },
    {
        stat: "5.0×",
        statSub: "Speed to Market",
        quote: "We launched our MVP in record time. The HOI team guided us from blue-ocean thinking to a fully functional AI product.",
        initials: "DM",
        name: "DAVID MILLER",
        role: "Startup Founder"
    },
    {
        stat: "75%",
        statSub: "Cost Reduction",
        quote: "Automating our finance workflows has allowed us to reallocate capital to R&D. The results were immediate and measurable.",
        initials: "EP",
        name: "EMMA PRICE",
        role: "CFO at Global Logistics"
    },
    {
        stat: "10/10",
        statSub: "Strategic Partnership",
        quote: "They don't just maintain systems; they optimize them as technology evolves. HOI is the strategic partner we needed.",
        initials: "TH",
        name: "TOM HARRIS",
        role: "Managing Director"
    }
];

const VIDEO_URL = "https://www.pexels.com/download/video/9365580/";

const videos = [
    { name: "MICHELE CHOLE", role: "CEO OF RHODOTION PVT LTD." },
    { name: "MICHELE CHOLE", role: "CEO OF RHODOTION PVT LTD." },
    { name: "ALEX KNIGHT", role: "Director at GovSystems" },
    { name: "SARAH LING", role: "Ops Manager at TechScale" },
    { name: "RICK BAKER", role: "COO of Established SMEs" },
    { name: "DAVID MILLER", role: "Startup Founder" }
];

const StarRating = () => (
    <div className="flex gap-1">
        {Array(5).fill(0).map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#FD5A07] fill-[#FD5A07]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard = ({ stat, statSub, quote, initials, name, role }: { stat: string; statSub: string; quote: string; initials: string; name: string; role: string }) => (
    <div className="flex flex-col justify-between p-8 border border-gray-100 rounded-sm bg-white hover:shadow-xl transition-all duration-300 h-full">
        <div>
            <div className="mb-4">
                <span className="text-[#FD5A07] text-3xl md:text-5xl font-normal font-['Bebas_Neue'] leading-none block">
                    {stat}
                </span>
                <span className="text-xl text-[#6B6B6B] font-medium font-['Barlow']">
                    {statSub}
                </span>
            </div>
            <StarRating />
            <p className="text-[13px] text-black leading-relaxed font-medium mt-4 font-['Barlow']">
                {quote}
            </p>
        </div>
        
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#C5C5C5]">
            <div className="w-10 h-10 rounded-full bg-[#FD5A07]/10 flex items-center justify-center shrink-0">
                <span className="text-[#FD5A07] text-[11px] font-bold">{initials}</span>
            </div>
            <div>
                <div className="flex items-center gap-1.5">
                    <span className="text-2xl text-[#100702] uppercase font-['Bebas_Neue']">{name}</span>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                        <svg className="w-2 h-2 text-white fill-white" viewBox="0 0 12 12">
                            <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                    </div>
                </div>
                <span className="text-[11px] text-[#6B6B6B] font-['Barlow'] uppercase">{role}</span>
            </div>
        </div>
    </div>
);

const VideoCard = ({ name, role }: { name: string; role: string }) => (
    <div
        className="relative flex-1 rounded-sm overflow-hidden group cursor-pointer h-full"
        style={{ minHeight: "420px" }}
    >
        <video
            src={VIDEO_URL}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            muted
            loop
            playsInline
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <HiPlay className="w-7 h-7 text-white ml-1" />
            </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <p className="text-white/80 text-[12px] font-bold uppercase tracking-widest mb-1 font-['Barlow']">{name}</p>
            <p className="text-white text-lg md:text-xl font-normal font-['Bebas_Neue'] uppercase leading-tight">{role}</p>
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

const Results = () => {
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
                    className="mb-12"
                >
                    <motion.span variants={fadeUp} className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                        RESULTS
                    </motion.span>
                    <motion.h2 variants={fadeUp} className="text-[clamp(2rem,5vw,4rem)] font-normal text-[#100702] mb-6 leading-[0.95] font-['Bebas_Neue'] uppercase">
                        OUR HAPPY CLIENTS.
                    </motion.h2>
                </motion.div>

                {/* Testimonials Carousel Wrapper with Tailwind Pagination Styling */}
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
                            delay: 3000,
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
                        className="testimonials-swiper"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i} className="h-auto pb-4">
                                <TestimonialCard {...t} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Video Section Carousel */}
                <div className="mt-20">
                    <h3 className="text-[clamp(1.4rem,3vw,2.4rem)] font-normal text-[#100702] font-['Bebas_Neue'] uppercase mb-8">
                        WATCH OUR CUSTOMER REVIEW
                    </h3>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
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
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                            }}
                            className="videos-swiper"
                        >
                            {videos.map((v, i) => (
                                <SwiperSlide key={i} className="h-auto pb-4">
                                    <VideoCard {...v} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Results;