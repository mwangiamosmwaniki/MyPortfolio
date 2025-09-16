import React from "react";

export function Alert({ children, variant = "default", className = "" }) {
  const base = "w-full rounded-lg border px-4 py-3 flex items-start gap-3";

  const variants = {
    default: "bg-gray-800 border-gray-700 text-gray-200",
    success: "bg-green-800/30 border-green-600 text-green-200",
    warning: "bg-yellow-800/30 border-yellow-600 text-yellow-200",
    error: "bg-red-800/30 border-red-600 text-red-200",
    info: "bg-blue-800/30 border-blue-600 text-blue-200",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function AlertDescription({ children, className = "" }) {
  return <p className={`text-sm leading-relaxed ${className}`}>{children}</p>;
}
