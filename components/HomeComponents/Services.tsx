"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from "framer-motion";
import Button from "@/components/Common/Button";

// ── Animation Variants ──────────────────────────────────────────────────────

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
        duration: 0.8, 
        ease: "easeOut" as const,
        staggerChildren: 0.15 
    } 
  }
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const ServiceCard = ({ title, subtitle, description }: { title: string; subtitle: string; description: string }) => (
  <motion.div 
    variants={cardVariants}
    className="w-full sm:w-1/2 lg:w-1/4 p-2 flex flex-col"
  >
    <motion.div 
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      className="group p-6 md:p-8 border border-gray-100 rounded-sm flex flex-col h-full transition-all duration-300 bg-white text-[#100702] shadow-sm hover:bg-[#FD5A07] hover:shadow-2xl hover:border-transparent cursor-default relative overflow-hidden"
    >
      {/* Subtle background glow on hover */}
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
         <div className="w-24 h-24 bg-white/20 blur-3xl rounded-full" />
      </div>

      <div className="mb-6 z-10">
        <h3 className="text-xl md:text-2xl font-normal uppercase font-['Bebas_Neue'] text-[#100702]">
            {title}
        </h3>
        <p className="text-[14px] md:text-xs font-['Barlow'] font-bold tracking-wider mt-1 text-gray-400 group-hover:text-[#100702]/60 transition-colors duration-300">
            {subtitle}
        </p>
      </div>
      
      <p className="text-[14px] md:text-sm font-['Barlow'] leading-relaxed mb-8 grow text-[#100702] group-hover:text-[#100702]/90 transition-colors duration-300 z-10">
          {description}
      </p>
      
      <button className="text-[16px] md:text-lg font-['Bebas_Neue'] font-normal uppercase w-fit pb-1 transition-all cursor-pointer text-[#FD5A07] group-hover:text-black group-hover:border-[#100702] hover:border-b-2 z-10">
          LEARN MORE
      </button>
    </motion.div>
  </motion.div>
);

const Services = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

    const services = [
        {
            title: "AI STRATEGY",
            subtitle: "Map your AI roadmap",
            description: "Go beyond ChatGPT. We identify the high-impact automation opportunities that actually move the needle for your unique business goals."
        },
        {
            title: "CUSTOM AI AGENTS",
            subtitle: "Hiring tools, not just apps",
            description: "Deploy 24/7 AI staff that handles everything from customer support to complex research. Smarter work, less overhead."
        },
        {
            title: "WORKFLOW AUTOMATION",
            subtitle: "Save 20+ hours a week",
            description: "Eliminate repetitive manual tasks. We connect your tools with seamless AI workflows that run while you sleep."
        },
        {
            title: "DATA ARCHITECTURE",
            subtitle: "Fuel for your AI Engine",
            description: "AI is only as good as your data. We build the pipelines that turn raw info into actionable intelligence and predictions."
        },
        {
            title: "LLM INTEGRATION",
            subtitle: "Bring LLMs into your stack",
            description: "Seamlessly integrate GPT, Claude, or Llama into your existing products to create intelligent user experiences."
        },
        {
            title: "AI DIAGNOSTICS",
            subtitle: "Find the friction points",
            description: "A deep dive into your operations to find precisely where AI will yield the highest ROI and performance boost."
        },
        {
            title: "PRODUCT INNOVATION",
            subtitle: "Blue-ocean thinking",
            description: "Leverage AI to build entirely new products and services that your competitors haven't even thought of yet."
        },
        {
            title: "MANAGED AI SOLUTIONS",
            subtitle: "Worry-free maintenance",
            description: "We don't just build and leave. We maintain, optimize, and update your AI systems as technology evolves."
        }
    ];

    return (
        <section ref={sectionRef} className="py-[100px] bg-white overflow-hidden h-auto">
            <div className="container mx-auto px-6 lg:px-0">
                
                {/* Header Area */}
                <motion.div 
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-10 items-start"
                >
                    <div className="max-w-3xl">
                        <motion.span variants={itemFadeUp} className="text-[16px] md:text-[17px] font-['Barlow'] uppercase text-[#FD5A07] block mb-4">
                            SERVICES
                        </motion.span>
                        <motion.h2 variants={itemFadeUp} className="text-[clamp(2.5rem,5vw,4.2rem)] text-[#151515] my-5 tracking-tight leading-[0.99] font-['Bebas_Neue'] uppercase">
                            EIGHT CAPABILITIES. <br className="hidden md:block" /> ONE CONNECTED SYSTEM.
                        </motion.h2>
                        <motion.p variants={itemFadeUp} className="text-[16px] md:text-base text-[#100702] font-['Barlow'] leading-relaxed max-w-2xl font-medium">
                            We don't just add AI; we re-engineer your core operations. From strategy to deployment, we build the systems that give your business a permanent unfair advantage.
                        </motion.p>
                    </div>
                    
                    <motion.div variants={itemFadeUp}>
                        <Button>
                            VIEW ALL CASES
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Grid Area */}
                <motion.div 
                    variants={cardContainerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-wrap"
                >
                    {services.map((service, i) => (
                        <ServiceCard key={i} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;