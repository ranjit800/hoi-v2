// import HeroSection from "@/components/HomeComponents/HeroSection";
import WhatWeDo from "@/components/HomeComponents/WhatWeDo";
import MarqueeSection from "@/components/HomeComponents/MarqueeSection";
import Services from "@/components/HomeComponents/Services";
import TheProblem from "@/components/HomeComponents/TheProblem";
import OurProducts from "@/components/HomeComponents/OurProducts";
import WhatHoiDoes from "@/components/HomeComponents/WhatHoiDoes";
import RoiCalculator from "@/components/HomeComponents/RoiCalculator";
import HowItWorks from "@/components/HomeComponents/HowItWorks";
import HoiDiagnostic from "@/components/HomeComponents/HoiDiagnostic";
import Results from "@/components/HomeComponents/Results";
import TheTeam from "@/components/HomeComponents/TheTeam";
import OurPromise from "@/components/HomeComponents/OurPromise";
import Faq from "@/components/HomeComponents/Faq";
import Blogs from "@/components/HomeComponents/Blogs";
import ReadytoBuild from "@/components/HomeComponents/ReadytoBuild";
import NewHeroSection from "@/components/HomeComponents/NewHeroSection";
import React from "react";

const Home = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <NewHeroSection />
      <MarqueeSection />
      <WhatWeDo />
      <Services />
      <TheProblem />
      <OurProducts />
      <WhatHoiDoes />
      <RoiCalculator />
      <HowItWorks />
      <HoiDiagnostic />
      <Results />
      <TheTeam />
      <OurPromise />
      <Faq />
      <Blogs />
      <ReadytoBuild />
    </>
  );
};

export default Home;
