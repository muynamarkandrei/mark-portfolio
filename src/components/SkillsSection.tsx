"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Code2, FileCode, Braces, Atom, Server, Database,
  Cloud, Zap, SearchCode, Box, Cpu, Sparkles, Check,
} from "lucide-react";

interface Skill {
  name: string;
  icon: any;
}

interface SkillCategory {
  id: string;
  label: string;
  proficiency: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    proficiency: "Proficient",
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: FileCode },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Atom },
    ]
  },
  {
    id: "3d",
    label: "3D & Interactive",
    proficiency: "Comfortable",
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Three.js", icon: Box },
      { name: "WebGL", icon: Atom },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    proficiency: "Learning",
    color: "from-amber-500 to-amber-600",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "SQL", icon: Database },
      { name: "MongoDB", icon: Database },
    ]
  },
  {
    id: "salesforce",
    label: "Salesforce",
    proficiency: "Hands-on",
    color: "from-emerald-500 to-emerald-600",
    skills: [
      { name: "Salesforce", icon: Cloud },
      { name: "LWC", icon: Zap },
      { name: "Apex", icon: Cpu },
      { name: "SOQL", icon: SearchCode },
    ]
  },
  {
    id: "design",
    label: "Design & UX",
    proficiency: "Developing",
    color: "from-pink-500 to-pink-600",
    skills: [
      { name: "Figma", icon: Box },
      { name: "Responsive Design", icon: FileCode },
      { name: "Prototyping", icon: Sparkles },
    ]
  },
  {
    id: "security",
    label: "Security & Tools",
    proficiency: "Interested",
    color: "from-rose-500 to-rose-600",
    skills: [
      { name: "Troubleshooting", icon: Cpu },
      { name: "Debugging", icon: SearchCode },
      { name: "Git & VSCode", icon: Code2 },
      { name: "Secure Coding", icon: Zap },
    ]
  },
];

const getProficiencyColor = (proficiency: string) => {
  const colors: Record<string, string> = {
    "Proficient": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Comfortable": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Learning": "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "Hands-on": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "Developing": "bg-pink-500/20 text-pink-300 border-pink-500/30",
    "Interested": "bg-rose-500/20 text-rose-300 border-rose-500/30",
  };
  return colors[proficiency] || colors["Interested"];
};

const SkillsSection = () => {
  const ref = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("frontend");
  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-24 px-4 md:px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-sm md:text-base">
          Click tabs to explore different skill categories
        </p>

        {/* Tabs - Responsive */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === category.id
                  ? `bg-primary text-primary-foreground shadow-lg scale-105`
                  : `bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground`
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        {activeCategory && (
          <div className="space-y-6 animate-in">
            {/* Proficiency Badge */}
            <div className="flex justify-center mb-8">
              <div className={`px-4 py-2 rounded-full border ${getProficiencyColor(activeCategory.proficiency)}`}>
                <span className="text-sm md:text-base font-semibold flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  {activeCategory.proficiency}
                </span>
              </div>
            </div>

            {/* Skills Grid - Fully Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {activeCategory.skills.map(({ name, icon: Icon }, i) => (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-2 md:gap-3 rounded-xl border border-border bg-card p-4 md:p-6 hover:border-primary/50 hover:glow transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:scale-125 transition-transform" />
                  <span className="text-xs md:text-sm font-medium text-foreground text-center line-clamp-2">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* Skill Count */}
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                {activeCategory.skills.length} skill{activeCategory.skills.length !== 1 ? "s" : ""} in this category
              </p>
            </div>
          </div>
        )}

        {/* Total Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 pt-12 border-t border-border">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">Total Skills</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl md:text-3xl font-bold text-primary">{skillCategories.length}</p>
            <p className="text-xs md:text-sm text-muted-foreground">Categories</p>
          </div>
          <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
            <p className="text-2xl md:text-3xl font-bold text-primary">Actively Learning</p>
            <p className="text-xs md:text-sm text-muted-foreground">Always Growing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
