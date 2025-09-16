import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import {
  Menu,
  X,
  Code,
  Home,
  User,
  Briefcase,
  Mail,
  Facebook,
  Github,
  Linkedin,
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <style>{`
        :root {
          --primary: 168 85% 55%;
          --primary-foreground: 0 0% 98%;
          --background: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
        }
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to={createPageUrl("Portfolio")}
              className="flex items-center gap-3"
            >
              <img
                src={Logo}
                alt="DevPortfolio Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-purple-500/20 text-purple-300"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === item.url
                        ? "bg-purple-500/20 text-purple-300"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
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

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-purple-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Logo + Tagline */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src={Logo}
                alt="Logo"
                className="w-20 h-14 rounded-lg shadow-lg"
              />
              <p className="text-gray-400 max-w-sm">
                Crafting sleek, modern, and functional digital experiences with
                passion 🚀
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-white font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/about"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-white font-semibold text-lg">Connect</h3>
              <div className="flex gap-5">
                <a
                  href="https://github.com/mwangiamosmwaniki"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amos-mwangi-108575382"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/Amoh15"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-500/70 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
            <span>© 2025 All rights reserved</span>
            <span className="font-medium text-gray-300 mt-2 sm:mt-0">
              Made with ❤️ by <span className="text-purple-400">DevAmos</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
