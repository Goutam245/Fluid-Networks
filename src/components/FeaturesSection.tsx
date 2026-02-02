import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";

interface FeaturesSectionProps {
  variant?: "fn" | "cit";
}

const FeaturesSection = ({ variant = "fn" }: FeaturesSectionProps) => {
  const fnFeatures = [
    {
      title: "Modernizing IT",
      description: "The Cloud Enabled Office™ Technology Solution™ offers an array of products to bring visibility into a IT systems, build actionable intelligence, and track sustainability—all in an easy-to-use engagement experience.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    },
    {
      title: "Low Upfront Capital Expenditure",
      description: "Cloud Enabled Office™ works with 0 down options! Whether you are looking for an outright purchase, a financing option, or true OpEx, we can make it happen. Contact Complete Technology to see what model works best for your business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Scalable Costs",
      description: "If you scale up the size of the team, no problem. Are you scaling down? No problem. Our process allows you to turn technology up or down anytime in line with your business budget while still meeting your requirements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
  ];

  const citFeatures = [
    {
      title: "Reduce Compliance and Security Risks",
      description: "Protect your business from cyber threats and ensure regulatory compliance with our comprehensive security solutions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    },
    {
      title: "Ensure Scalability and Standardization",
      description: "Build a technology foundation that grows with your business while maintaining consistency across your organization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
    {
      title: "Accelerate Growth with Data-Driven Insights",
      description: "Transform raw data into actionable intelligence that drives strategic business decisions and competitive advantage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
  ];

  const features = variant === "fn" ? fnFeatures : citFeatures;

  return (
    <section className="py-24 relative">
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
            {variant === "fn" ? "Cloud Enabled Office™" : "Why Choose Us"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
            {variant === "fn" 
              ? "Run your business, leave the IT to us." 
              : "Experts in Strategy. Partners in Technology."}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                variant={variant}
                hover="lift"
                padding="none"
                className={`overflow-hidden ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto min-h-[300px] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className={`absolute inset-0 ${
                      variant === "fn"
                        ? "bg-gradient-to-r from-fn-primary/20 to-transparent"
                        : "bg-gradient-to-r from-cit-primary/20 to-transparent"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <h3 className="text-2xl lg:text-3xl font-bold font-heading mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                        variant === "fn"
                          ? "text-fn-primary hover:text-fn-secondary"
                          : "text-cit-primary hover:text-cit-secondary"
                      }`}
                    >
                      Learn More
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
