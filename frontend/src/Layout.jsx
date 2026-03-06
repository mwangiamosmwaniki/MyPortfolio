import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Facebook,
  Github,
  Linkedin,
  ChevronUp,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/button";
import Logo from "../src/assets/images/developer.png";

const navigationItems = [
  { title: "Home", url: createPageUrl("Portfolio"), icon: Home },
  { title: "About", url: createPageUrl("About"), icon: User },
  { title: "Projects", url: createPageUrl("Projects"), icon: Briefcase },
  { title: "Contact", url: createPageUrl("Contact"), icon: Mail },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Dark is the default — only switch to light if user explicitly saved "light"
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    return stored !== "light"; // anything other than explicit "light" → dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-neutral-950">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              to={createPageUrl("Portfolio")}
              className="flex items-center gap-3"
            >
              <img
                src={Logo}
                alt="DevPortfolio Logo"
                className="object-contain w-auto h-10"
              />
            </Link>

            {/* Desktop Nav + Theme Toggle */}
            <div className="items-center hidden gap-6 md:flex">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    location.pathname === item.url
                      ? "bg-neutral-900 dark:bg-white/10 text-white dark:text-white"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Link>
              ))}

              {/* Theme toggle pill — desktop */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative transition-colors duration-300 border rounded-full w-14 h-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 bg-neutral-200 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700"
              >
                <Sun className="absolute left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-500 transition-opacity duration-300 dark:opacity-30 opacity-100" />
                <Moon className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-400 transition-opacity duration-300 dark:opacity-100 opacity-30" />
                <motion.span
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-colors duration-300 ${
                    isDark
                      ? "left-[calc(100%-1.625rem)] bg-orange-500"
                      : "left-0.5 bg-white"
                  }`}
                />
              </button>
            </div>

            {/* Mobile: theme icon + hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 transition-colors duration-200 border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-orange-500" />
                )}
              </button>

              <Button
                variant="ghost"
                size="icon"
                className="text-neutral-700 dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t md:hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-neutral-200 dark:border-neutral-800"
            >
              <div className="px-4 py-4 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                      location.pathname === item.url
                        ? "bg-neutral-900 dark:bg-white/10 text-white dark:text-white"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed z-40 p-3 text-white transition-all duration-200 rounded-full shadow-lg bottom-6 right-6 bg-neutral-900 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-110"
        disabled={!showScrollToTop}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      {/* Footer */}
      <footer className="mt-20 transition-colors duration-300 border-t bg-neutral-100 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
            
            <div className="flex flex-col items-center gap-4 md:items-start">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 rounded-lg shadow-lg w-22"
              />
              <p className="max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                Crafting sleek, modern, and functional digital experiences with
                passion
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center gap-3 md:items-start">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li>
                  <Link
                    to={createPageUrl("About")}
                    className="transition-colors hover:text-orange-500 dark:hover:text-orange-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Projects")}
                    className="transition-colors hover:text-orange-500 dark:hover:text-orange-400"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Contact")}
                    className="transition-colors hover:text-orange-500 dark:hover:text-orange-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-3 md:items-start">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Connect
              </h3>
              <div className="flex gap-5">
                <a
                  href="https://github.com/mwangiamosmwaniki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amos-mwangi-108575382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/Amoh15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between pt-6 mt-10 text-sm border-t border-neutral-200 dark:border-neutral-700 sm:flex-row">
            <span className="text-neutral-500 dark:text-neutral-400">
              © {new Date().getFullYear()} All rights reserved.
            </span>

            <span className="mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-0">
              Crafted and maintained by{" "}
              <span className="font-semibold tracking-wide text-orange-500 dark:text-orange-400">
                DevAmos
              </span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
