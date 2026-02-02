import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "./ui/GradientButton";
import FloatingShapes from "./FloatingShapes";

interface CTASectionProps {
  variant?: "fn" | "cit";
  onStartTransition?: () => void;
}

const CTASection = ({ variant = "fn", onStartTransition }: CTASectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${
        variant === "fn" ? "mesh-bg-fn" : "mesh-bg-cit"
      }`} />
      <FloatingShapes variant={variant} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            {variant === "fn" ? (
              <>
                Ready to Meet Your New{" "}
                <span className="gradient-text-fn">C.E.O.?</span>
              </>
            ) : (
              <>
                Are you ready for a{" "}
                <span className="gradient-text-cit">Complete technology partner?</span>
              </>
            )}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {variant === "fn"
              ? "Cloud Enabled Office™ from Fluid Networks transforms the way you work. Let's discuss how we can modernize your IT infrastructure."
              : "Partner with Complete IT and experience the difference of having a dedicated technology team focused on your success."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GradientButton
              variant={variant}
              size="xl"
              onClick={onStartTransition}
              className="group min-w-[220px]"
            >
              {variant === "fn" ? "Contact Us Today" : "Get Started Now"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </GradientButton>
            <GradientButton
              variant={variant === "fn" ? "outline" : "outlineCit"}
              size="xl"
              className="min-w-[220px]"
            >
              {variant === "fn" ? "Schedule Demo" : "Book Consultation"}
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
