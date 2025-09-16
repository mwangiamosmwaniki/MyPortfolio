// src/components/ui/input.jsx
import React from "react";

export function Input({ type = "text", className = "", ...props }) {
  const base =
    "w-full px-4 py-2 rounded-lg border border-gray-700 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition";

  return <input type={type} className={`${base} ${className}`} {...props} />;
}
