"use client";

import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import FeaturedTours from "../components/FeaturedTours";
import QuickContact from "../components/QuickContact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedTours />
      <QuickContact />
    </>
  );
}
