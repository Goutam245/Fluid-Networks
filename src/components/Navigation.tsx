import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GradientButton } from "./ui/GradientButton";

interface NavigationProps {
  variant?: "fn" | "cit";
}

const Navigation = ({ variant = "fn" }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = variant === "fn" 
    ? ["Services", "Solutions", "Cloud Office™", "About", "Blog"]
    : ["Services", "Solutions", "Industries", "Partners", "Company"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            {variant === "fn" ? (
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-fn flex items-center justify-center ${variant === "fn" ? "pulse-glow-fn" : ""}`}>
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-xl font-bold font-heading gradient-text-fn hidden sm:block">
                  Fluid Networks
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-cit flex items-center justify-center pulse-glow-cit">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-xl font-bold font-heading gradient-text-cit hidden sm:block">
                  Complete IT
                </span>
              </div>
            )}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className={`text-sm font-medium transition-colors relative group ${
                  variant === "fn" 
                    ? "text-foreground/80 hover:text-fn-primary" 
                    : "text-foreground/80 hover:text-cit-primary"
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  variant === "fn" ? "bg-gradient-fn" : "bg-gradient-cit"
                }`} />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <GradientButton variant={variant} size="sm">
                Get Started
              </GradientButton>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass border-t border-border"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground/80 hover:text-foreground py-2 transition-colors"
                >
                  {item}
                </a>
              ))}
              <GradientButton variant={variant} className="w-full mt-2">
                Get Started
              </GradientButton>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
