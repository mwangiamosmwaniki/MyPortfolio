import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import displayImage from "../../assets/images/dp.jpeg";
import CV from "../../assets/Downloads/Amos_Mwaniki_Mwangi_CV.pdf"

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
            : currentFullTitle.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle]);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="text-purple-300 text-lg mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Amos Mwangi
            </motion.h1>

            <div className="h-16 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl"
            >
              I craft beautiful, functional, and user-centered digital
              experiences. With experience in modern web technologies, I bring
              ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to={createPageUrl("Projects")}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
                  View My Work
                </Button>
              </Link>
              <a
                href={CV}
                download
              >
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-3 rounded-full"
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
              className="flex gap-6 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 animate-pulse" />
              <img
                src={displayImage}
                alt="Developer"
                className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-3xl" />
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-purple-400 transition-colors"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
