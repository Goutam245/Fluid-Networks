import { motion } from "framer-motion";

interface IndustriesSectionProps {
  variant?: "fn" | "cit";
}

const IndustriesSection = ({ variant = "fn" }: IndustriesSectionProps) => {
  const industries = [
    { name: "Healthcare", description: "HIPAA-compliant IT solutions for medical practices and healthcare organizations." },
    { name: "Manufacturing", description: "Industrial technology solutions that optimize production and supply chain." },
    { name: "Finance", description: "Secure, compliant IT infrastructure for financial services and banking." },
    { name: "Legal/Professional Services", description: "Technology solutions designed for law firms and professional service organizations." },
  ];

  return (
    <section className={`py-24 relative ${
      variant === "fn" ? "bg-fn-background" : "bg-cit-background"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold uppercase tracking-wider ${
            variant === "fn" ? "text-fn-primary" : "text-cit-primary"
          }`}>
            Industry Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
            IT that Fits Your Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand that different industries have unique technology needs and compliance requirements.
          </p>
        </motion.div>

        {/* Industries List */}
        <div className="max-w-3xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-pointer border-b transition-colors ${
                variant === "fn" 
                  ? "border-fn-primary/20 hover:border-fn-primary" 
                  : "border-cit-primary/20 hover:border-cit-primary"
              }`}
            >
              <div className="py-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {industry.description}
                  </p>
                </div>
                <div className={`ml-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 ${
                  variant === "fn" ? "text-fn-primary" : "text-cit-primary"
                }`}>
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className={`inline-flex items-center gap-2 font-semibold ${
              variant === "fn" ? "text-fn-primary hover:text-fn-secondary" : "text-cit-primary hover:text-cit-secondary"
            }`}
          >
            See All Industries
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
