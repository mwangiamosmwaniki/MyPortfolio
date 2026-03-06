import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  Briefcase,
  Users,
  Smile,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    accent: "from-sky-500 to-blue-600",
    glow: "group-hover:shadow-sky-500/20",
    badge:
      "bg-sky-500/10 text-sky-300 border-sky-500/20 group-hover:border-sky-400/40",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    accent: "from-emerald-500 to-teal-600",
    glow: "group-hover:shadow-emerald-500/20",
    badge:
      "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 group-hover:border-emerald-400/40",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Design",
    icon: Palette,
    accent: "from-pink-500 to-rose-600",
    glow: "group-hover:shadow-pink-500/20",
    badge:
      "bg-pink-500/10 text-pink-300 border-pink-500/20 group-hover:border-pink-400/40",
    skills: [
      "Figma",
      "Adobe XD",
      "UI/UX",
      "Prototyping",
      "Design Systems",
      "Framer",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    accent: "from-orange-500 to-orange-600",
    glow: "group-hover:shadow-orange-500/20",
    badge:
      "bg-orange-500/10 text-orange-300 border-orange-500/20 group-hover:border-orange-400/40",
    skills: [
      "React Native",
      "Flutter",
      "iOS",
      "Android",
      "PWA",
      "Responsive Design",
    ],
  },
  {
    title: "DevOps",
    icon: Globe,
    accent: "from-amber-500 to-orange-600",
    glow: "group-hover:shadow-amber-500/20",
    badge:
      "bg-amber-500/10 text-amber-300 border-amber-500/20 group-hover:border-amber-400/40",
    skills: [
      "AWS",
      "Docker",
      "Render",
      "Kubernetes",
      "Vercel",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools",
    icon: Zap,
    accent: "from-orange-500 to-orange-600",
    glow: "group-hover:shadow-orange-500/20",
    badge:
      "bg-orange-500/10 text-orange-300 border-orange-500/20 group-hover:border-orange-400/40",
    skills: ["Git", "VS Code", "Postman", "Notion", "Linear", "Slack"],
  },
];

const stats = [
  { number: "10+", label: "Projects Completed", icon: CheckCircle },
  { number: "2+", label: "Years Experience", icon: Briefcase },
  { number: "10+", label: "Happy Clients", icon: Users },
  { number: "100%", label: "Satisfaction Rate", icon: Smile },
];

export default function Skills() {
  return (
    <section className="relative px-4 py-24 overflow-hidden sm:px-6 lg:px-8 bg-neutral-950">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orange-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 bg-orange-500/10">
            Expertise
          </span>
          <h2
            className="mb-5 text-5xl font-black leading-none tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Toolbox
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-neutral-400">
            A diverse set of technologies I use to build fast, beautiful, and
            functional digital products — from pixel to production.
          </p>
        </motion.div>

        {/* ── Skill Cards ── */}
        <div className="grid gap-5 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-2xl ${category.glow}`}
            >
              {/* Faint gradient bleed in top-left corner */}
              <div
                className={`pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.accent} mb-5 shadow-lg`}
              >
                <category.icon className="w-5 h-5 text-white" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-bold tracking-tight text-white">
                {category.title}
              </h3>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full border transition-colors duration-200 ${category.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
              className="relative flex flex-col items-center justify-center p-6 overflow-hidden text-center transition-all duration-300 border group rounded-2xl border-neutral-800 bg-neutral-900 hover:border-orange-500/40 hover:bg-neutral-800/60"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 transition-colors duration-300 pointer-events-none rounded-2xl bg-orange-500/0 group-hover:bg-orange-500/5" />

              <div className="flex items-center justify-center w-10 h-10 mb-3 transition-colors duration-200 border rounded-xl bg-orange-500/10 border-orange-500/20 group-hover:border-orange-400/40">
                <stat.icon className="w-4 h-4 text-orange-400" />
              </div>

              <span
                className="mb-1 text-3xl font-black leading-none text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.number}
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-neutral-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
