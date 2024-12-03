import React from "react";
import HeroSection from "../component/landing/HeroSection";
import NavigationBar from "../component/NavigationBar";
import AboutSection from "../component/landing/AboutSection";
import BenefitSection from "../component/landing/BenefitSection";
import ProcedureSection from "../component/landing/ProcedureSection";
import FooterBar from "../component/FooterBar";
import TestimonialSection from "../component/landing/TestimonialSection";

const Landing = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <BenefitSection />
      <ProcedureSection />
      <TestimonialSection />
      <FooterBar />
    </>
  );
};

export default Landing;
