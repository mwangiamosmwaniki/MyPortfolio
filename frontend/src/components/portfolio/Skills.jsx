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
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-indigo-500 to-purple-500",
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
    color: "from-yellow-500 to-orange-500",
    skills: ["Git", "VS Code", "Postman", "Notion", "Linear", "Slack"],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I work with a diverse set of technologies to build exceptional
            digital experiences. Here's a breakdown of my technical skills and
            tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-purple-400/40 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600/50 group-hover:border-purple-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              number: "10+",
              label: "Projects",
              icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
            },
            {
              number: "2+ Years",
              label: "Experience in web technologies",
              icon: <Briefcase className="w-5 h-5 text-pink-400" />,
            },
            {
              number: "10+",
              label: "Clients",
              icon: <Users className="w-5 h-5 text-blue-400" />,
            },
            {
              number: "100%",
              label: "Satisfaction",
              icon: <Smile className="w-5 h-5 text-green-400" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl shadow-sm hover:bg-white/10 transition"
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-sm text-gray-200 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
