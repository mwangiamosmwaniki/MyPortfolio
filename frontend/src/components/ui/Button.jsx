// src/components/ui/button.jsx
import React from "react";

export function Button({
  children,
  asChild = false,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-x-2 rounded-md font-medium transition-all duration-200";

  const variants = {
    default: "bg-purple-600 hover:bg-purple-700 text-white shadow-md",
    ghost: "bg-transparent hover:bg-white/10 text-white",
    outline: "border border-purple-500/30 text-gray-300 hover:bg-purple-600/20",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  const Comp = asChild ? "a" : "button";

  return (
    <Comp
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
