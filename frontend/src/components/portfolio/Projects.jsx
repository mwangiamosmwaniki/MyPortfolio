import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../data/project";
import { Skeleton } from "../ui/skeleton";
import {
  ExternalLink,
  Github,
  AlertCircle,
  Star,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/Alert";

const categories = ["all", "web", "mobile", "desktop", "ai", "data analysis"];

const fallbackProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Docker",
    ],
    image_url:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    github_url: "https://github.com",
    live_url: "https://example.com",
    featured: true,
    category: "web",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    image_url:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    github_url: "https://github.com",
    live_url: "https://example.com",
    featured: true,
    category: "mobile",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (projectsData && Array.isArray(projectsData)) {
        setProjects(projectsData);
      } else {
        throw new Error("Invalid project data format");
      }
    } catch (err) {
      console.error("Error loading projects:", err);
      setError("Failed to load projects. Showing fallback projects.");
      setProjects(fallbackProjects);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative px-4 py-24 overflow-hidden sm:px-6 lg:px-8 bg-neutral-950">
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-orange-600/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 bg-orange-500/10">
            Portfolio
          </span>
          <h2
            className="mb-5 text-5xl font-black leading-none tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Projects &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Work
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-base leading-relaxed text-neutral-400">
            A curated collection of things I've built — from management
            platforms to polished client sites. Each project solves a real
            problem.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`capitalize px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-transparent border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Error Banner */}
        {error && (
          <Alert className="mb-8 bg-amber-500/10 border-amber-500/30">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <AlertDescription className="text-amber-300">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Loading Skeletons */}
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="p-5 border bg-neutral-900 rounded-2xl border-neutral-800"
                >
                  <Skeleton className="w-full mb-4 h-44 rounded-xl bg-neutral-800" />
                  <Skeleton className="w-3/4 h-5 mb-3 bg-neutral-800" />
                  <Skeleton className="w-full h-3 mb-2 bg-neutral-800" />
                  <div className="flex flex-col gap-2 mb-4">
                    {Array(3)
                      .fill(0)
                      .map((_, j) => (
                        <Skeleton
                          key={j}
                          className="w-full h-3 bg-neutral-800"
                        />
                      ))}
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="flex-1 h-8 rounded-lg bg-neutral-800" />
                    <Skeleton className="flex-1 h-8 rounded-lg bg-neutral-800" />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center"
              >
                <p className="text-lg text-neutral-500">
                  No projects in this category yet.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section label + count */}
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 shrink-0">
                    All Projects
                  </h3>
                  <div className="flex-1 h-px bg-neutral-800" />
                  <span className="font-mono text-xs text-neutral-700 shrink-0">
                    {filteredProjects.length} total
                  </span>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
                      className="relative flex flex-col overflow-hidden transition-all duration-300 border group rounded-xl border-neutral-800 bg-neutral-900 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />

                        {/* Featured badge */}
                        {project.featured && (
                          <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400/20 border border-amber-400/30 text-amber-300 backdrop-blur-sm">
                            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                            Featured
                          </span>
                        )}

                        {/* Hover arrow */}
                        <div className="absolute flex items-center justify-center transition-opacity duration-200 border rounded-full opacity-0 top-3 right-3 w-7 h-7 bg-white/10 backdrop-blur-sm border-white/20 group-hover:opacity-100">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5">
                        <h3 className="mb-1.5 text-base font-bold text-white group-hover:text-orange-300 transition-colors duration-200 leading-snug">
                          {project.title}
                        </h3>
                        <p className="mb-4 text-xs leading-relaxed text-neutral-500 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Values / features list with check icons */}
                        {project.technologies?.length > 0 && (
                          <ul className="mb-5 space-y-1.5">
                            {project.technologies.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs text-neutral-400"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Links — always visible at bottom */}
                        <div className="flex gap-2 pt-3 mt-auto border-t border-neutral-800">
                          {project.live_url ? (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 hover:text-orange-200 text-xs font-medium border border-orange-500/20 hover:border-orange-500/40 transition-all duration-200"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Live Demo
                            </a>
                          ) : (
                            <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-800/50 text-neutral-600 text-xs font-medium border border-neutral-800 cursor-not-allowed select-none">
                              <ExternalLink className="w-3 h-3" />
                              No Demo
                            </span>
                          )}

                          {project.github_url ? (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 text-xs font-medium border border-neutral-700 transition-all duration-200"
                            >
                              <Github className="w-3 h-3" />
                              Source
                            </a>
                          ) : (
                            <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-800/50 text-neutral-600 text-xs font-medium border border-neutral-800 cursor-not-allowed select-none">
                              <Github className="w-3 h-3" />
                              Private
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
