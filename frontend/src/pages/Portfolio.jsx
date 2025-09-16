import React from "react";
import Hero from "../components/portfolio/Hero";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}