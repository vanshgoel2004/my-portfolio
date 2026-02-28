import { useState } from "react";
import { cn } from "@/lib/util";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiBootstrap,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const skills = {
  frontend: [
    { name: "React", icon: <FaReact />, desc: "Built interactive UI & animations" },
    { name: "Next.js", icon: <SiNextdotjs />, desc: "Optimized SSR apps & routing" },
    { name: "JavaScript", icon: <FaJs />, desc: "Core logic & async handling" },
    { name: "TypeScript", icon: <SiTypescript />, desc: "Type-safe scalable apps" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, desc: "Modern responsive UI" },
    { name: "Bootstrap", icon: <SiBootstrap />, desc: "Quick UI prototyping" },
  ],

  backend: [
    { name: "Node.js", icon: <FaNodeJs />, desc: "Server-side APIs & logic" },
    { name: "Express.js", icon: <SiExpress />, desc: "REST API development" },
  ],

  languages: [
    { name: "Java", icon: <FaJava />, desc: "DSA & problem solving" },
    { name: "Python", icon: <FaPython />, desc: "Scripting & fundamentals" },
    { name: "SQL", icon: <SiMysql />, desc: "Database queries & joins" },
  ],

  database: [
    { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL data modeling" },
    { name: "PostgreSQL", icon: <SiPostgresql />, desc: "Relational database design" },
    { name: "MySQL", icon: <SiMysql />, desc: "Structured data handling" },
  ],

  tools: [
    { name: "Git", icon: <FaGitAlt />, desc: "Version control & collaboration" },
    { name: "Postman", icon: <SiPostman />, desc: "API testing & debugging" },
    { name: "Vercel", icon: <SiVercel />, desc: "Deployment & hosting" },
    { name: "VS Code", icon: <FaHtml5 />, desc: "Primary development environment" },
  ],
};

const categories = ["all", "frontend", "backend", "languages", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getSkills = () => {
    if (activeCategory === "all") {
      return Object.values(skills).flat();
    }
    return skills[activeCategory];
  };

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Tech Stack</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies I’ve worked with to build scalable, performant, and user-friendly applications.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full border capitalize transition-all",
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-md"
                  : "border-muted text-muted-foreground hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {getSkills().map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-lg border border-border hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Icon */}
              <div className="text-4xl mb-3 text-primary group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="font-medium">{skill.name}</h3>

              {/* Hover Description */}
              <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.desc}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-primary/5 blur-xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};