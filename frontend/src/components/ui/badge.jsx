import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const base =
    "inline-flex items-center px-2 py-1 text-xs font-semibold rounded-md";

  const variants = {
    default: "bg-purple-600 text-white",
    secondary: "bg-gray-700 text-gray-200",
    outline: "border border-purple-600 text-purple-600",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
