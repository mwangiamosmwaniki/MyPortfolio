import Topex from "../assets/images/topexSchool.png";
import Maguru from "../assets/images/maguru.png";
import Medicare from "../assets/images/medicare.png";
import Mesm from "../assets/images/mesm.png";
import Jr from "../assets/images/jrphotography.png";
import TopexTraders from "../assets/images/topexTraders.png";

const projects = [
  {
    id: "1",
    image_url: Topex,
    title: "Topex School Management",
    description:
      "Comprehensive school management system built for Topex School, streamlining student administration, academic tracking, and parent communication.",
    technologies: [
      "Student Management Portal",
      "Academic Performance Tracking",
      "Attendance & Discipline Records",
      "Parent Communication System",
      "Report Card Generation",
    ],
    featured: true,
    category: "web",
    github_url: "https://github.com/mwangiamosmwaniki/Topex",
    live_url: "https://momax.pythonanywhere.com/",
  },
  {
    id: "2",
    image_url: Maguru,
    title: "Maguru Automotive Website",
    description:
      "Custom business management platform for Maguru, optimizing operations with integrated inventory, sales, and customer management tools.",
    technologies: [
      "Sales Management System",
      "Inventory Tracking",
      "Customer Database",
      "Sales Reports & Analytics",
      "Automated Billing System",
    ],
    featured: true,
    category: "web",
    github_url: "https://github.com/mwangiamosmwaniki/maguruautomobile",
    live_url: "https://maguruautomobile.pages.dev/",
  },
  {
    id: "3",
    image_url: Medicare,
    title: "Medicare Clinic System",
    description:
      "Advanced healthcare management system for Medicare, enabling efficient patient care, appointment scheduling, and medical records management.",
    technologies: [
      "Patient Management",
      "Appointment Scheduling",
      "Medical Records Storage",
      "Prescription Management",
      "Billing & Insurance Integration",
    ],
    featured: true,
    category: "web",
    github_url: "https://github.com/mwangiamosmwaniki/medicare",
    live_url: "https://medi-safe-care.netlify.app/",
  },
  {
    id: "4",
    image_url: Mesm,
    title: "MESM Construction Management Portal",
    description:
      "A comprehensive construction management platform for MESM that streamlines project coordination, workforce management, and resource tracking across construction sites.",
    technologies: [
      "Project Management Dashboard",
      "Site Workforce Management",
      "Equipment & Material Tracking",
      "Project Documentation & Reports",
      "Client & Contractor Communication",
    ],
    featured: false,
    category: "web",
    github_url: "https://github.com/mwangiamosmwaniki/Mesm_new",
    live_url: "https://mesm.netlify.app/",
  },
  {
    id: "5",
    image_url: TopexTraders,
    title: "Topex Traders Platform",
    description:
      "A simple and intuitive online trading platform for Topex Traders, allowing users to browse products, place orders, and manage basic transactions securely.",
    technologies: [
      "Product Listing & Browsing",
      "Secure Checkout",
      "Order Management",
      "Basic Customer Feedback",
      "Sales Overview",
    ],
    featured: false,
    category: "web",
    github_url: "https://github.com/mwangiamosmwaniki/topex_traders",
    live_url: "https://topextraders.netlify.app/",
  },
  {
    id: "6",
    image_url: Jr,
    title: "JR Photography Portfolio",
    description:
      "Professional photography portfolio website for JR Photography, showcasing galleries, services, and enabling online bookings and inquiries.",
    technologies: [
      "Professional Gallery Display",
      "Service Showcase",
      "Online Booking System",
      "Client Testimonials",
      "SEO Optimized for Discovery",
    ],
    featured: false,
    category: "web",
    github_url: "https://github.com/mwangiamosmwaniki/Photograhy_site",
    live_url: "https://jr-photography.onrender.com/",
  },
];

export default projects;
