import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatsSectionProps {
  variant?: "fn" | "cit";
}

const StatsSection = ({ variant = "fn" }: StatsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fnStats = [
    { value: 500, suffix: "+", label: "Clients Protected" },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
    { value: 24, suffix: "/7", label: "Expert Support" },
    { value: 15, suffix: "+", label: "Years Experience" },
  ];

  const citStats = [
    { value: 24, suffix: "/7", label: "IT Support" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 10, suffix: "+", label: "Years of Excellence" },
    { value: 100, suffix: "%", label: "SOC2 Compliant" },
  ];

  const stats = variant === "fn" ? fnStats : citStats;

  return (
    <section
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        variant === "fn" ? "bg-gradient-fn" : "bg-gradient-cit"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-2">
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <div className="text-white/80 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpNumberProps {
  value: number;
  suffix: string;
  isInView: boolean;
}

const CountUpNumber = ({ value, suffix, isInView }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const isDecimal = value % 1 !== 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default StatsSection;
