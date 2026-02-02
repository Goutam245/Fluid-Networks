import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "fn" | "cit";
}

const FloatingShapes = ({ variant = "fn" }: FloatingShapesProps) => {
  const shapes = [
    { size: 400, x: -100, y: -50, delay: 0, duration: 20 },
    { size: 300, x: "80%", y: 100, delay: 2, duration: 25 },
    { size: 200, x: "60%", y: "60%", delay: 4, duration: 18 },
    { size: 350, x: "20%", y: "70%", delay: 1, duration: 22 },
    { size: 150, x: "90%", y: "40%", delay: 3, duration: 15 },
  ];

  const gradients = {
    fn: [
      "from-fn-primary/20 to-fn-secondary/10",
      "from-fn-secondary/20 to-fn-primary/10",
      "from-trust/20 to-fn-primary/10",
    ],
    cit: [
      "from-cit-primary/20 to-cit-secondary/10",
      "from-cit-secondary/20 to-cit-accent/10",
      "from-cit-accent/20 to-cit-primary/10",
    ],
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${gradients[variant][index % 3]} blur-3xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
