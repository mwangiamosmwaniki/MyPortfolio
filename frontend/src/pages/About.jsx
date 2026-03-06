import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Coffee } from "lucide-react";
import { Badge } from "../components/ui/badge";
import displayImage from "../assets/images/dp.png";

const experiences = [
  {
    year: "May 2024 – August 2024",
    role: "IT Attaché",
    company: "Ministry of ICT",
    description:
      "Supported system configuration, software installation, and troubleshooting to improve system reliability and uptime. Maintained technical documentation for systems, workflows, and updates. Collaborated with IT and communications teams to document digital workflows and system processes.",
  },
  {
    year: "September 2024 – Present",
    role: "Personal Projects",
    company: "Independent Remote",
    description:
      "Develop and deploy web applications using React, Node.js, and JavaScript. Build and consume RESTful APIs, manage databases, and troubleshoot application issues. Perform testing, debugging, documentation, and post-deployment support to ensure system reliability. Use Git/GitHub for version control.",
  },
];

const achievements = ["Power BI Certification – Exodus Experts (2024)"];

export default function About() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-neutral-950 via-white dark:via-neutral-950 to-neutral-100 dark:to-neutral-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-neutral-950 dark:text-white">
            About Me
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
            Learn about my professional journey, experience, and the passion
            that drives me to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-3">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="p-8 text-center transition-all duration-300 border bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-neutral-300 dark:hover:border-neutral-700">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-400 dark:from-neutral-600 to-neutral-300 dark:to-neutral-700 blur-lg opacity-20" />
                  <img
                    src={displayImage}
                    alt="Amos Mwangi"
                    className="relative object-cover w-full h-full border-2 rounded-full contain border-neutral-300 dark:border-neutral-700"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-neutral-950 dark:text-white">
                  Amos Mwangi
                </h3>
                <p className="mb-6 font-semibold text-neutral-700 dark:text-neutral-400">
                  Full Stack Developer
                </p>
                <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                    Nairobi, Kenya
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                    Recent Graduate
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Coffee className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                    Tech Enthusiast
                  </div>
                </div>
                <div className="flex justify-center gap-3 mt-6">
                  <a
                    href="https://github.com/mwangiamosmwaniki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-all border rounded-lg bg-slate-700/50 border-orange-500/30 hover:border-orange-400 hover:text-orange-400 group"
                  >
                    Profiles
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12 lg:col-span-2"
          >
            {/* Story */}
            <div>
              <h2 className="flex items-center gap-3 mb-4 text-3xl font-bold text-neutral-950 dark:text-white">
                <div className="w-1 h-8 rounded-full bg-gradient-to-b from-neutral-700 dark:from-neutral-300 to-neutral-600 dark:to-neutral-400" />
                My Story
              </h2>
              <div className="space-y-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                <p className="text-lg">
                  My journey into software development began during my
                  Information Technology studies, where I discovered my passion
                  for creating digital solutions that solve real-world problems.
                  What started as curiosity about how websites work evolved into
                  a career dedicated to crafting exceptional user experiences.
                </p>
                <p>
                  Over the past few years, I've had the privilege of working
                  with diverse teams on projects ranging from web applications
                  to complex distributed systems. Each project has reinforced my
                  commitment to writing clean, maintainable code and designing
                  intuitive user interfaces.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or staying
                  updated with industry trends. I believe in continuous learning
                  and pushing the boundaries of what's possible in web
                  development.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h2 className="flex items-center gap-3 mb-4 text-3xl font-bold text-neutral-950 dark:text-white">
                <div className="w-1 h-8 rounded-full bg-gradient-to-b from-neutral-700 dark:from-neutral-300 to-neutral-600 dark:to-neutral-400" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 transition-all border-l-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600"
                  >
                    <div className="absolute -left-3.5 top-1 w-6 h-6 bg-neutral-900 dark:bg-white rounded-full border-2 border-white dark:border-neutral-950" />
                    <div className="p-6 transition-all border bg-neutral-100 dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-500/10">
                      <Badge
                        variant="outline"
                        className="mb-3 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800"
                      >
                        {exp.year}
                      </Badge>
                      <h3 className="mb-1 text-xl font-bold text-neutral-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="mb-3 font-semibold text-neutral-700 dark:text-neutral-400">
                        {exp.company}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-500">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h2 className="flex items-center gap-3 mb-4 text-3xl font-bold text-neutral-950 dark:text-white">
                <div className="w-1 h-8 rounded-full bg-gradient-to-b from-neutral-700 dark:from-neutral-300 to-neutral-600 dark:to-neutral-400" />
                Certifications & Achievements
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-5 transition-all border bg-neutral-100 dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-500/10"
                  >
                    <Award className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
