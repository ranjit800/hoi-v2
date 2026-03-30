"use client";

import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <section className="py-4 bg-[#FAF3E8] border-y border-[#E5D5C5] overflow-hidden">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-16">
            <span className="text-[#FD5A07] text-[40px] md:text-[54px] font-['Bebas_Neue'] font-normal leading-none shrink-0">
              90%
            </span>
            <div className="flex flex-col">
              <h4 className="text-[#100702] text-[15px] md:text-[19px] font-bold leading-tight tracking-tight whitespace-nowrap">
                Client retention beyond first project — no lock-in
              </h4>
              <p className="text-[#100702]/60 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.08em] mt-1 whitespace-nowrap">
                HOI CRM Data · Rolling 24 months
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
