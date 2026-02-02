import { motion } from "framer-motion";

interface PartnersMarqueeProps {
  variant?: "fn" | "cit";
}

const PartnersMarquee = ({ variant = "fn" }: PartnersMarqueeProps) => {
  const partners = [
    "Microsoft", "Dell", "Lenovo", "Cisco", "VMware", 
    "HP", "AWS", "Google Cloud", "Fortinet", "Datto"
  ];

  return (
    <section className={`py-12 relative overflow-hidden border-y ${
      variant === "fn" ? "border-fn-primary/10" : "border-cit-primary/10"
    }`}>
      <div className="container mx-auto px-4 mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-wider"
        >
          {variant === "fn" ? "Trusted Technology Partners" : "Our Strategic Partners"}
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Partners */}
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className={`text-xl font-semibold transition-colors duration-300 ${
                variant === "fn"
                  ? "text-muted-foreground/50 hover:text-fn-primary"
                  : "text-muted-foreground/50 hover:text-cit-primary"
              }`}
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
