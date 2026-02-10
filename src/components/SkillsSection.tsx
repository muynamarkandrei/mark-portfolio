import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Code2, FileCode, Braces, Atom, Server, Database,
  Cloud, Zap, SearchCode, Box, Cpu, Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend (Proficient)",
    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: FileCode },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Atom },
    ]
  },
  {
    title: "3D & Interactive (Comfortable)",
    skills: [
      { name: "Three.js", icon: Box },
      { name: "React", icon: Atom },
    ]
  },
  {
    title: "Backend Foundations (Learning)",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "SQL", icon: Database },
      { name: "MongoDB", icon: Database },
    ]
  },
  {
    title: "Salesforce Ecosystem (Hands-on)",
    skills: [
      { name: "Salesforce", icon: Cloud },
      { name: "LWC", icon: Zap },
      { name: "Apex", icon: Cpu },
      { name: "SOQL", icon: SearchCode },
    ]
  },
  {
    title: "Design & UX (Developing)",
    skills: [
      { name: "Figma", icon: Box },
      { name: "Responsive Design", icon: FileCode },
      { name: "Prototyping", icon: Sparkles },
    ]
  },
  {
    title: "Security & Tools (Interested)",
    skills: [
      { name: "Troubleshooting", icon: Cpu },
      { name: "Debugging", icon: SearchCode },
      { name: "Git & VSCode", icon: Code2 },
      { name: "Secure Coding", icon: Zap },
    ]
  },
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <div className="space-y-8">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-primary mb-4">{group.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.skills.map(({ name, icon: Icon }, i) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:glow transition-all duration-300"
                    style={{ transitionDelay: `${(groupIndex * 4 + i) * 30}ms` }}
                  >
                    <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
