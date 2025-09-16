import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Coffee } from "lucide-react";
import { Badge } from "../components/ui/badge";
import displayImage from "../assets/images/dp.jpeg"

const experiences = [
  {
    year: "May, 2024 - August, 2024",
    role: "IT Officer",
    company: "Directorate of Public communications",
    description:
      "Took part in the development of scalable web applications using React, Node.js, and AWS. Improved team productivity by 40%.",
  },
];

const achievements = [
  "Microsoft Power Bi Certificate",
];

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-gray-300 text-lg">
            Get to know more about my journey, experience, and what drives me as
            a developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
                <img
                  src={displayImage}
                  alt="Amos Mwangi"
                  className="h-fit w-fit rounded-full mx-auto mb-6 border-4 border-purple-500/80"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Amos Mwangi
                </h3>
                <p className="text-purple-300 mb-4">Full Stack Developer</p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    Nairobi, Kenya
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    Recent Graduate
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Coffee className="w-4 h-4 text-purple-400" />
                    Tech Enthusiast
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Story */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My journey into software development began during my Information
                  Technology studies, where I discovered my passion for creating
                  digital solutions that solve real-world problems. What started
                  as curiosity about how websites work evolved into a career
                  dedicated to crafting exceptional user experiences.
                </p>
                <p>
                  Over the past few years, I've had the privilege of working with
                  diverse teams, from innovative startups to
                  established enterprises. Each project has taught me valuable
                  lessons about the importance of clean code, user-centered
                  design, and collaborative development.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying a good cup of coffee while reading about the latest
                  industry trends. I believe in continuous learning and staying
                  ahead of the curve in this rapidly evolving field.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l border-purple-500/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-slate-900" />
                    <div className="bg-slate-800/30 border border-purple-500/20 rounded-xl p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge
                          variant="outline"
                          className="text-purple-300 border-purple-500/30"
                        >
                          {exp.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-purple-300 mb-3">{exp.company}</p>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-slate-800/30 border border-purple-500/20 rounded-lg p-4"
                  >
                    <Award className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
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
