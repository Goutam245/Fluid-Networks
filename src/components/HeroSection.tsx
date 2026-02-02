import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GradientButton } from "./ui/GradientButton";
import FloatingShapes from "./FloatingShapes";

interface HeroSectionProps {
  variant?: "fn" | "cit";
  onStartTransition?: () => void;
}

const HeroSection = ({ variant = "fn", onStartTransition }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      variant === "fn" ? "mesh-bg-fn" : "mesh-bg-cit"
    }`}>
      <FloatingShapes variant={variant} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              variant === "fn" 
                ? "bg-fn-primary/10 text-fn-primary border border-fn-primary/20" 
                : "bg-cit-primary/10 text-cit-primary border border-cit-primary/20"
            }`}>
              <span className={`w-2 h-2 rounded-full ${variant === "fn" ? "bg-fn-primary" : "bg-cit-primary"} animate-pulse`} />
              {variant === "fn" ? "Cloud Enabled Office™" : "Trusted Technology Partner"}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-6 ${
              variant === "fn" ? "gradient-text-fn text-shadow-fn" : "gradient-text-cit text-shadow-cit"
            }`}
          >
            {variant === "fn" ? (
              <>
                DATA LOSS
                <br />
                <span className="text-foreground">DESTROYS BUSINESSES</span>
              </>
            ) : (
              <>
                Trusted Technology
                <br />
                <span className="text-foreground">Partnership</span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {variant === "fn"
              ? "But even if disaster strikes, our VaultaDr™ Data Backup and Disaster Recovery service will keep you up and running."
              : "Empowering businesses with comprehensive IT solutions. Reduce complexity, ensure scalability, and drive data-driven growth."}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <GradientButton
              variant={variant}
              size="xl"
              onClick={onStartTransition}
              className="group min-w-[200px]"
            >
              {variant === "fn" ? "Avoid Catastrophe" : "Explore Solutions"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </GradientButton>
            <GradientButton
              variant={variant === "fn" ? "outline" : "outlineCit"}
              size="xl"
              className="min-w-[200px]"
            >
              {variant === "fn" ? "Learn More" : "Schedule Demo"}
            </GradientButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 opacity-60"
          >
            {variant === "fn" ? (
              <>
                <span className="text-sm text-muted-foreground">Trusted by leading businesses</span>
                <div className="flex items-center gap-6">
                  {["HIPAA", "SOC2", "MSPP"].map((cert) => (
                    <div key={cert} className="px-3 py-1 bg-muted rounded text-xs font-medium">
                      {cert}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="text-sm text-muted-foreground">Strategic Partners</span>
                <div className="flex items-center gap-6">
                  {["Microsoft", "Dell", "Lenovo"].map((partner) => (
                    <div key={partner} className="text-sm font-medium text-muted-foreground">
                      {partner}
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <ChevronDown className={`w-8 h-8 ${variant === "fn" ? "text-fn-primary" : "text-cit-primary"}`} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
