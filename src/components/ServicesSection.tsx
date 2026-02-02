import { motion } from "framer-motion";
import { Cloud, Shield, Database, Phone, Server, Users, Lock, BarChart } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

interface ServicesSectionProps {
  variant?: "fn" | "cit";
}

const ServicesSection = ({ variant = "fn" }: ServicesSectionProps) => {
  const fnServices = [
    {
      icon: Server,
      title: "Managed IT Services",
      description: "Comprehensive IT management and monitoring to keep your business running smoothly.",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Enterprise-grade security solutions to protect your data from modern threats.",
    },
    {
      icon: Database,
      title: "Data Backups",
      description: "VaultaDr™ disaster recovery ensures your data is always safe and recoverable.",
    },
    {
      icon: Phone,
      title: "Business Communications",
      description: "Unified communications platform for seamless collaboration.",
    },
  ];

  const citServices = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure designed for modern enterprises.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security with HIPAA, SOC2, and industry compliance.",
    },
    {
      icon: Users,
      title: "Co-Managed IT",
      description: "Augment your team with expert IT professionals on demand.",
    },
    {
      icon: BarChart,
      title: "IT Strategy",
      description: "Data-driven technology roadmaps aligned with your business goals.",
    },
  ];

  const services = variant === "fn" ? fnServices : citServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-24 relative">
      <div className={`absolute inset-0 ${
        variant === "fn" 
          ? "bg-gradient-to-b from-fn-background via-white to-fn-background" 
          : "bg-gradient-to-b from-cit-background via-white to-cit-background"
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            {variant === "fn" ? "Our Solutions" : "What We Offer"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
            {variant === "fn" 
              ? "Solve Problems Through IT" 
              : "Leading Solutions that Power Progress"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {variant === "fn"
              ? "Cloud Enabled Office™ is built on our unique blend of orientated services designed to propel your business forward."
              : "We provide small and mid-sized businesses access to enterprise-level IT infrastructure, service management, and cybersecurity."}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <GlassCard
                variant={variant}
                hover="glow"
                padding="lg"
                className="h-full group cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  variant === "fn"
                    ? "bg-gradient-fn text-white group-hover:shadow-glow-fn"
                    : "bg-gradient-cit text-white group-hover:shadow-glow-cit"
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Learn More Link */}
                <div className={`mt-6 flex items-center gap-2 text-sm font-medium transition-colors ${
                  variant === "fn" 
                    ? "text-fn-primary group-hover:text-fn-secondary" 
                    : "text-cit-primary group-hover:text-cit-secondary"
                }`}>
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
