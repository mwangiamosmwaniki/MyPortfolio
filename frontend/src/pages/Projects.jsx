import React from "react";
import { motion } from "framer-motion";
import Projects from "../components/portfolio/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my portfolio of web applications, mobile apps, and creative experiments. 
            Each project tells a story of problem-solving and innovation.
          </p>
        </motion.div>
      </div>
      <Projects />
    </div>
  );
}