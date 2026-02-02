import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  "relative overflow-hidden rounded-2xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "glass shadow-card hover:shadow-card-hover",
        fn: "bg-white/80 backdrop-blur-xl border border-fn-primary/20 shadow-card hover:shadow-card-hover hover:border-fn-primary/40",
        cit: "bg-white/80 backdrop-blur-xl border border-cit-primary/20 shadow-card hover:shadow-card-hover hover:border-cit-primary/40",
        solid: "bg-card shadow-card hover:shadow-card-hover",
        gradient: "bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl shadow-card hover:shadow-card-hover",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1",
        scale: "hover:scale-[1.02]",
        glow: "",
      },
      padding: {
        none: "",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
    },
    compoundVariants: [
      {
        variant: "fn",
        hover: "glow",
        className: "hover:shadow-glow-fn",
      },
      {
        variant: "cit",
        hover: "glow",
        className: "hover:shadow-glow-cit",
      },
    ],
    defaultVariants: {
      variant: "default",
      hover: "lift",
      padding: "default",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, hover, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, hover, padding, className }))}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };
