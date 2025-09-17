// Import images so bundler (Vite, CRA) processes them
import mesm1 from "../assets/images/mesm1.JPG";
import topex from "../assets/images/topex.JPG";
import topmax from "../assets/images/topmax.JPG";
import sales from "../assets/images/sales.JPG";

const projects = [
  {
    title: "Business website",
    description: "A modern website built with React, Node Js and Tailwind CSS.",
    technologies: ["React", "Tailwind", "Node Js", "Vite"],
    image_url: mesm1,
    github_url: "https://github.com/mwangiamosmwaniki/Mesm_new",
    live_url: "https://mesm.netlify.app",
    featured: true,
    category: "web",
  },
  {
    title: "School Website",
    description: "A Django based project for managing student and staff data.",
    technologies: ["Django", "Javascript", "SQLite"],
    image_url: topex,
    github_url: "https://github.com/mwangiamosmwaniki/Topex",
    live_url: "https://momax.pythonanywhere.com",
    featured: true,
    category: "web",
  },
  {
    title: "Landing page",
    description: "A modern website built with React, Node Js and Tailwind CSS.",
    technologies: ["React", "Tailwind", "Node Js", "Vite"],
    image_url: topmax,
    github_url: "https://github.com/amosmwanikimwangi",
    live_url: "",
    featured: true,
    category: "web",
  },
  {
    title: "Sales Analysis",
    description: "A Business Intelligence analysis aimed at enhancing decision making",
    technologies: ["Microsoft Power Bi", "Power Query"],
    image_url: sales,
    github_url: "",
    live_url: "",
    featured: true,
    category: "data analysis",
  },
];

export default projects;
