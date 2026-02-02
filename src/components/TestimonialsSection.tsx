import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

interface TestimonialsSectionProps {
  variant?: "fn" | "cit";
}

const TestimonialsSection = ({ variant = "fn" }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      quote: "We've been able to evolve from a small company to becoming quite large. The technology behind our current integration allows us to function cohesively regardless of location.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovations Inc",
      rating: 5,
    },
    {
      quote: "The 24/7 support has been invaluable. Every time we've had an issue, their team responds quickly and resolves it efficiently. True partners in every sense.",
      author: "Michael Chen",
      role: "CTO",
      company: "FinServe Global",
      rating: 5,
    },
    {
      quote: "Their proactive approach to cybersecurity has given us peace of mind. We can focus on growing our business knowing our data is protected.",
      author: "Emily Rodriguez",
      role: "Operations Director",
      company: "Healthcare Solutions",
      rating: 5,
    },
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
            What Our Clients Are Saying
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                variant={variant}
                hover="lift"
                padding="lg"
                className="h-full flex flex-col"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-current ${
                        variant === "fn" ? "text-fn-primary" : "text-cit-primary"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/80 leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    variant === "fn" ? "bg-gradient-fn" : "bg-gradient-cit"
                  }`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
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

export default TestimonialsSection;
