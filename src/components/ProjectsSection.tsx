import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveDemo?: string;
}

const projects: Project[] = [
  {
    title: "HandsMen Threads",
    subtitle: "Salesforce E-Commerce Platform",
    description:
      "Developed a comprehensive Salesforce-based e-commerce platform for HandsMen Threads with advanced features and automation. Successfully delivered a fully functional platform that streamlines order management, provides real-time insights, and enhances customer experience through intelligent automation.",
    highlights: [
      "Custom objects for product catalog & order management",
      "Lightning Web Components for interactive UI",
      "Apex-powered automated receipt generation",
      "AI assistant for user guidance & support",
      "Real-time dashboards & inventory monitoring",
      "Data privacy & security compliance",
    ],
    tech: ["Salesforce", "LWC", "Apex", "SOQL", "AI Integration"],
  },
  {
    title: "NovaTech PH",
    subtitle: "Full-Stack PC E-Commerce",
    description:
      "Developed a full-stack web-based e-commerce platform for PC component sales with interactive 3D model builder, AI assistance, and receipt generation. An innovative platform combining cutting-edge 3D visualization with intelligent AI assistance for an immersive shopping experience.",
    highlights: [
      "Interactive 3D model builder using Three.js",
      "React frontend with seamless backend integration",
      "Nova AI assistant with intelligent recommendations",
      "Automated receipt generation & order management",
      "Simulated transaction processing",
      "Data privacy & secure transaction handling",
    ],
    tech: ["React", "Three.js", "Node.js", "MongoDB", "AI Integration", "JavaScript"],
    liveDemo: "https://egie-ecommerce.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 hover:glow transition-all duration-500"
            >
              <p className="text-primary text-xs font-display uppercase tracking-widest mb-2">
                {project.subtitle}
              </p>
              <h3 className="font-display text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-primary hover:underline"
                >
                  → Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
