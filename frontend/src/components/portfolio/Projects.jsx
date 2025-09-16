import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectsData from "../../data/project.json";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { ExternalLink, Github, Filter, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/Alert";

const categories = ["all", "web", "mobile", "desktop", "ai", "data analysis"];

// ✅ Fallback data in case JSON fails
const fallbackProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and real-time inventory tracking.",
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
    github_url: "#",
    live_url: "#",
    featured: true,
    category: "web",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project analytics. Built with React Native for cross-platform mobile experience.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    image_url:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    github_url: "#",
    live_url: "#",
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
      // ✅ Load projects from JSON
      if (projectsData && Array.isArray(projectsData)) {
        setProjects(projectsData);
      } else {
        throw new Error("Invalid project data format");
      }
    } catch (err) {
      console.error("Error loading projects:", err);
      setError("Failed to load projects. Showing fallback projects.");
      setProjects(fallbackProjects); // fallback
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            A showcase of my recent work. Each project represents a unique
            challenge and demonstrates different aspects of my skills.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`capitalize ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "border-purple-500/30 text-gray-300 hover:bg-purple-600/20"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <Alert className="mb-8 border-orange-500/50 bg-orange-500/10">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-orange-200">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-slate-800/50 rounded-2xl p-6">
                  <Skeleton className="h-48 w-full mb-4 rounded-xl bg-slate-700" />
                  <Skeleton className="h-6 w-3/4 mb-2 bg-slate-700" />
                  <Skeleton className="h-4 w-full mb-4 bg-slate-700" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16 rounded-full bg-slate-700" />
                    <Skeleton className="h-6 w-20 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-20 bg-slate-700" />
                    <Skeleton className="h-8 w-20 bg-slate-700" />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-white mb-8">
                  Featured Work
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id || index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies?.slice(0, 6).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-row gap-3">
                          {project.live_url && (
                            <Button
                              asChild
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <>
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </>
                            </Button>
                          )}

                          {project.github_url && (
                            <Button
                              asChild
                              size="md"
                              variant="outline"
                              className="bg-black border-purple-500/30 text-gray-300 hover:bg-purple-600/20"
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <>
                                <Github className="w-4 h-4" />
                                Code
                              </>
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">
                  More Projects
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={project.id || index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies?.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          {project.live_url && project.live_url !== "#" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-purple-500/30 text-gray-300 hover:bg-purple-600/20"
                              asChild
                            >
                              <a
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.github_url && project.github_url !== "#" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-purple-500/30 text-gray-300 hover:bg-purple-600/20"
                              asChild
                            >
                              <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-3 h-3 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">
                  No projects found for this category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
