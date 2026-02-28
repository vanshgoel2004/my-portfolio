import { ArrowRight, ExternalLink, Github } from "lucide-react";
import macbookImg from "@/assets/macbook.png";
import stylenestImg from "@/assets/stylenest.png";
import xomaniaImg from "@/assets/xomania.png";

const projects = [
  {
    id: 1,
    title: "MacBook Pro Animation Clone",
    description:
      "A high-performance, scroll-driven Apple-style landing page with 3D model interactions and cinematic animations.",
    image: macbookImg,
    tags: ["React", "Three.js", "GSAP", "Tailwind"],
    features: ["3D Model Viewer", "Scroll Animations", "High FPS Performance"],
    demoUrl: "https://github.com/vanshgoel2004/Macbook-app",
    githubUrl: "https://github.com/vanshgoel2004/Macbook-app",
  },
  {
    id: 2,
    title: "StyleNest E-Commerce",
    description:
      "A full-stack MERN e-commerce platform with authentication, cart, and order management system.",
    image: stylenestImg,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Auth System", "Cart & Orders", "Full Stack"],
    demoUrl: "https://github.com/vanshgoel2004/E-Commerce",
    githubUrl: "https://github.com/vanshgoel2004/E-Commerce",
  },
  {
    id: 3,
    title: "XO Mania Game",
    description:
      "An interactive Tic Tac Toe game with sound effects, animations, and responsive gameplay.",
    image: xomaniaImg,
    tags: ["React", "JavaScript"],
    features: ["Game Logic", "Animations", "Sound Effects"],
    demoUrl: "https://github.com/vanshgoel2004/Tic-Tac-Toe",
    githubUrl: "https://github.com/vanshgoel2004/Tic-Tac-Toe",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of projects where I focused on performance, interactivity, and real-world functionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card/60 backdrop-blur-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="hover:text-primary transition"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="hover:text-primary transition"
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  {/* <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition"
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github CTA */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button flex items-center gap-2 mx-auto w-fit"
            target="_blank"
            href="https://github.com/vanshgoel2004"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};