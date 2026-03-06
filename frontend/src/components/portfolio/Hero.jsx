import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import displayImage from "../../assets/images/dp.png";
import CV from "../../assets/Downloads/Amos_Mwaniki_Mwangi_CV.pdf";

const titles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Creative Coder",
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullTitle = titles[currentTitle];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullTitle.substring(0, displayText.length - 1)
            : currentFullTitle.substring(0, displayText.length + 1),
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle]);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-neutral-200 dark:bg-neutral-800/30 blur-3xl" />
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-neutral-200 dark:bg-neutral-800/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-neutral-200 dark:from-neutral-800/10 to-neutral-300 dark:to-neutral-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm font-semibold tracking-widest uppercase text-neutral-600 dark:text-neutral-400"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-neutral-950 dark:text-white"
            >
              Amos Mwangi
            </motion.h1>

            <div className="h-20 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-semibold text-transparent md:text-4xl bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 dark:from-neutral-300 dark:via-neutral-200 dark:to-neutral-300 bg-clip-text"
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-400"
            >
              I craft beautiful, functional, and user-centered digital
              experiences using modern technologies. Let's build something
              extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-8 lg:justify-start"
            >
              <Link to={createPageUrl("Projects")}>
                <Button className="px-8 py-3 font-semibold text-white transition-all duration-200 rounded-lg shadow-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 hover:shadow-xl">
                  Explore My Work
                </Button>
              </Link>
              <a href={CV} download>
                <Button
                  variant="outline"
                  className="px-8 py-3 font-semibold text-orange-300 transition-all duration-200 border-2 border-orange-400 rounded-lg hover:bg-orange-400/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-6 lg:justify-start"
            >
              <a
                href="https://github.com/mwangiamosmwaniki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-200 border rounded-lg bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 group"
              >
                <Github className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/amos-mwangi-108575382"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-200 border rounded-lg bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 group"
              >
                <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="mailto:mwangiamos703@gmail.com"
                className="p-3 transition-all duration-200 border rounded-lg bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 group"
              >
                <Mail className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden overflow-hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-neutral-300 dark:from-neutral-700 via-neutral-200 dark:via-neutral-800 to-neutral-300 dark:to-neutral-700 rounded-2xl blur-2xl opacity-20" />
              <div className="absolute overflow-hidden -inset-1 bg-gradient-to-r from-neutral-400 dark:from-neutral-600 to-neutral-300 dark:to-neutral-700 rounded-2xl opacity-10" />
              <img
                src={displayImage}
                alt="Developer Portfolio"
                className="relative w-full h-[550px] object-cover contain  rounded-2xl shadow-2xl ring-2 ring-neutral-300 dark:ring-neutral-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950/60 via-transparent to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        onClick={scrollToNext}
        className="absolute transition-colors transform -translate-x-1/2 bottom-8 left-1/2 text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-300"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
