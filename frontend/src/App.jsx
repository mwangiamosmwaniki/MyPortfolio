// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Pages
import Portfolio from "./pages/Portfolio";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <div className="text-white text-center py-20">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}
