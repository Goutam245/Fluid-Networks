import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        fn: "bg-gradient-fn text-white shadow-glow-fn hover:shadow-[0_15px_50px_hsla(193,100%,50%,0.4)] hover:-translate-y-0.5 active:translate-y-0",
        cit: "bg-gradient-cit text-white shadow-glow-cit hover:shadow-[0_15px_50px_hsla(239,84%,67%,0.4)] hover:-translate-y-0.5 active:translate-y-0",
        outline: "border-2 border-fn-primary text-fn-primary bg-transparent hover:bg-fn-primary/10",
        outlineCit: "border-2 border-cit-primary text-cit-primary bg-transparent hover:bg-cit-primary/10",
        glass: "glass text-foreground hover:bg-white/80 shadow-glass",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "fn",
      size: "default",
    },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };
