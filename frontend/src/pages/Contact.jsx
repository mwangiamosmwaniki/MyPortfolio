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

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading" });

    try {
      const res = await fetch(`${apiUrl}/contact`, {
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-neutral-950 via-white dark:via-neutral-950 to-neutral-100 dark:to-neutral-900\">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-neutral-950 dark:text-white">
            Let's Work Together
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Method Cards */}
            <div className="space-y-4">
              <div className="p-6 transition-all duration-300 border bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-500/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-900 dark:bg-white">
                    <Mail className="w-6 h-6 text-white dark:text-neutral-950" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href="mailto:mwangiamos703@gmail.com"
                      className="font-medium transition-colors text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
                    >
                      mwangiamos703@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-all duration-300 border bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-500/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-900 dark:bg-white">
                    <Phone className="w-6 h-6 text-white dark:text-neutral-950" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
                      Phone
                    </p>
                    <a
                      href="tel:+254110930439"
                      className="font-medium transition-colors text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
                    >
                      +254 110 930 439
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-all duration-300 border bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-500/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-900 dark:bg-white">
                    <MapPin className="w-6 h-6 text-white dark:text-neutral-950" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
                      Location
                    </p>
                    <p className="font-medium text-neutral-700 dark:text-neutral-300">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/mwangiamosmwaniki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-lg bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-700 group"
                >
                  <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amos-mwangi-108575382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-lg bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-700 group"
                >
                  <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href="https://www.facebook.com/Amoh15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-lg bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-700 group"
                >
                  <Facebook className="w-5 h-5 transition-transform group-hover:scale-110" />
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
            <div className="sticky p-8 border bg-neutral-100 dark:bg-neutral-900/30 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 rounded-2xl top-24">
              <h2 className="mb-2 text-2xl font-bold text-neutral-950 dark:text-white">
                Send a Message
              </h2>
              <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      Name{" "}
                      <span className="text-neutral-500 dark:text-neutral-400">
                        *
                      </span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="transition-colors bg-white border dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 focus:border-neutral-600 dark:focus:border-neutral-400 focus:ring-1 focus:ring-neutral-600/50 dark:focus:ring-neutral-400/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      Email{" "}
                      <span className="text-neutral-500 dark:text-neutral-400">
                        *
                      </span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="transition-colors bg-white border dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 focus:border-neutral-600 dark:focus:border-neutral-400 focus:ring-1 focus:ring-neutral-600/50 dark:focus:ring-neutral-400/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    Subject{" "}
                    <span className="text-neutral-500 dark:text-neutral-400">
                      *
                    </span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="transition-colors bg-white border dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 focus:border-neutral-600 dark:focus:border-neutral-400 focus:ring-1 focus:ring-neutral-600/50 dark:focus:ring-neutral-400/50"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    Message{" "}
                    <span className="text-neutral-500 dark:text-neutral-400">
                      *
                    </span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="transition-colors bg-white border resize-none dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 focus:border-neutral-600 dark:focus:border-neutral-400 focus:ring-1 focus:ring-neutral-600/50 dark:focus:ring-neutral-400/50"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center font-medium ${
                      status.type === "success"
                        ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-500/30"
                        : status.type === "error"
                          ? "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-500/30"
                          : "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full gap-2 py-3 font-semibold text-white transition-all duration-200 rounded-lg bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed dark:text-neutral-950"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
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
