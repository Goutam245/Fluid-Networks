import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "./ParticleField";

interface TransitionOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

const TransitionOverlay = ({ isActive, onComplete }: TransitionOverlayProps) => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  const startTransition = useCallback(() => {
    // Phase progression
    const phases = [
      { time: 0, phase: 1 },     // Introduction
      { time: 2000, phase: 2 },  // Acknowledgment
      { time: 5000, phase: 3 },  // Transformation Phase 1
      { time: 8000, phase: 4 },  // Transformation Phase 2
      { time: 11000, phase: 5 }, // Emergence
      { time: 13000, phase: 6 }, // Finalization
      { time: 14000, phase: 7 }, // Redirect
    ];

    phases.forEach(({ time, phase }) => {
      setTimeout(() => setPhase(phase), time);
    });

    // Progress animation
    const duration = 12000;
    const startTime = Date.now();
    
    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(animateProgress);
      }
    };
    
    setTimeout(() => {
      animateProgress();
    }, 2000);

    // Complete transition
    setTimeout(() => {
      onComplete();
    }, 15000);
  }, [onComplete]);

  useEffect(() => {
    if (isActive) {
      startTransition();
    }
  }, [isActive, startTransition]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 animated-gradient-fn"
          animate={{
            background: phase >= 3 
              ? [
                  "linear-gradient(-45deg, hsl(193, 100%, 50%), hsl(180, 100%, 45%), hsl(156, 100%, 48%), hsl(170, 100%, 42%))",
                  "linear-gradient(-45deg, hsl(239, 84%, 67%), hsl(250, 80%, 65%), hsl(263, 70%, 66%), hsl(330, 81%, 60%))",
                ]
              : undefined,
          }}
          transition={{ duration: 5 }}
          style={{ backgroundSize: "400% 400%" }}
        />

        {/* Particle Field */}
        <ParticleField 
          variant="transition" 
          transitionProgress={phase >= 3 ? (phase - 3) / 4 : 0} 
        />

        {/* Center Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: phase < 5 ? 1 : [1, 1.02, 0.98],
            opacity: phase < 6 ? 1 : 0,
          }}
          transition={{ 
            duration: phase < 5 ? 0.6 : 1,
            ease: "easeOut",
          }}
          className="relative z-10 max-w-2xl mx-4"
        >
          {/* Glassmorphism Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Rotating Gradient Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-3xl opacity-75"
              style={{
                background: phase >= 4
                  ? "conic-gradient(from 0deg, hsl(239, 84%, 67%), hsl(263, 70%, 66%), hsl(330, 81%, 60%), hsl(239, 84%, 67%))"
                  : "conic-gradient(from 0deg, hsl(193, 100%, 50%), hsl(156, 100%, 48%), hsl(187, 93%, 43%), hsl(193, 100%, 50%))",
              }}
            />
            
            {/* Inner Card */}
            <div className="relative rounded-3xl p-8 sm:p-12 backdrop-blur-xl bg-white/20">
              {/* Logo Transition */}
              <motion.div
                className="flex justify-center mb-8"
                animate={{
                  scale: phase >= 3 ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 2 }}
              >
                <motion.div
                  animate={{
                    rotateY: phase >= 3 ? 180 : 0,
                  }}
                  transition={{ duration: 1.5 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-24 h-24"
                >
                  {/* Fluid Networks Logo */}
                  <motion.div
                    animate={{ opacity: phase >= 4 ? 0 : 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-fn flex items-center justify-center glow-fn">
                      <span className="text-white text-3xl font-bold">FN</span>
                    </div>
                  </motion.div>

                  {/* Complete IT Logo */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase >= 4 ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-cit flex items-center justify-center glow-cit">
                      <span className="text-white text-3xl font-bold">CIT</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Main Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white mb-4 leading-tight"
                  animate={{
                    backgroundImage: phase >= 4
                      ? "linear-gradient(135deg, hsl(239, 84%, 80%), hsl(263, 70%, 80%), hsl(330, 81%, 80%))"
                      : "linear-gradient(135deg, hsl(193, 100%, 80%), hsl(156, 100%, 80%))",
                  }}
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "white",
                  }}
                >
                  Fluid Networks is becoming
                  <br />
                  <span className="text-white">your Complete IT provider!</span>
                </motion.h2>

                {/* Progress Ring */}
                <div className="flex justify-center my-8">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full progress-ring" viewBox="0 0 100 100">
                      {/* Background Ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="4"
                      />
                      {/* Progress Ring */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#progressGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={264}
                        strokeDashoffset={264 - (264 * progress) / 100}
                      />
                      <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={phase >= 4 ? "#6366F1" : "#00C9FF"} />
                          <stop offset="100%" stopColor={phase >= 4 ? "#EC4899" : "#00F5A0"} />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Percentage */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {Math.round(progress)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 2 ? 1 : 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/80 text-lg"
                >
                  {phase < 5
                    ? "Elevating your technology partnership..."
                    : "Redirecting you to our new platform..."}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Flash Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 6 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-white z-20"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionOverlay;
