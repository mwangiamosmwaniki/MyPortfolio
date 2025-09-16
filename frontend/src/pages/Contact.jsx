import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading" });

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "✅ Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "❌ Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "⚠️ Something went wrong. Try later.",
      });
    }

    setIsSubmitting(false);

    // Auto-hide message after 5s
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Let's Talk
              </h2>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll do my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">mwangiamos703.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+2541 10 930 439</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mwangiamosmwaniki"
                  target="_blank"
                  className="w-10 h-10 bg-slate-800 border border-purple-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amos-mwangi-108575382"
                  target="_blank"
                  className="w-10 h-10 bg-slate-800 border border-purple-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/Amoh15"
                  target="_blank"
                  className="w-10 h-10 bg-slate-800 border border-purple-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                      placeholder="your@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {status.message && (
                    <p
                      className={`mt-2 text-center transition-opacity duration-500 ${
                        status.type === "success"
                          ? "text-white"
                          : status.type === "error"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
