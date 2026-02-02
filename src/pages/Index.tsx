import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TransitionOverlay from "@/components/TransitionOverlay";

type BrandVariant = "fn" | "cit";

const Index = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentBrand, setCurrentBrand] = useState<BrandVariant>("fn");

  const handleStartTransition = () => {
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setCurrentBrand("cit");
    // In production, this would redirect to complete.net
    // window.location.href = "https://complete.net";
  };

  return (
    <div className="min-h-screen">
      {/* Transition Overlay */}
      <TransitionOverlay
        isActive={isTransitioning}
        onComplete={handleTransitionComplete}
      />

      {/* Main Content */}
      <div className={`transition-all duration-500 ${isTransitioning ? "blur-lg scale-105" : ""}`}>
        <Navigation variant={currentBrand} />
        <HeroSection variant={currentBrand} onStartTransition={handleStartTransition} />
        <PartnersMarquee variant={currentBrand} />
        <ServicesSection variant={currentBrand} />
        <FeaturesSection variant={currentBrand} />
        <StatsSection variant={currentBrand} />
        <IndustriesSection variant={currentBrand} />
        <TestimonialsSection variant={currentBrand} />
        <BlogSection variant={currentBrand} />
        <CTASection variant={currentBrand} onStartTransition={handleStartTransition} />
        <Footer variant={currentBrand} />
      </div>
    </div>
  );
};

export default Index;
