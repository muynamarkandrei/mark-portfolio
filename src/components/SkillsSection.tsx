import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Code2, FileCode, Braces, Atom, Server, Database,
  Cloud, Zap, SearchCode, Box, Cpu, Sparkles,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: FileCode },
  { name: "JavaScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Salesforce", icon: Cloud },
  { name: "LWC", icon: Zap },
  { name: "Apex", icon: Cpu },
  { name: "SOQL", icon: SearchCode },
  { name: "Three.js", icon: Box },
  { name: "AI Integration", icon: Sparkles },
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon }, i) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:glow transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
