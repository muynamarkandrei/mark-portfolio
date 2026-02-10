import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
          <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-primary" />
          <div className="mb-2 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-bold">
              Bachelor of Science in Information Technology
            </h3>
          </div>
          <p className="text-primary text-sm font-medium mb-1">
            Polytechnic University of the Philippines — Santa Maria, Bulacan
          </p>
          <p className="text-muted-foreground text-sm">Currently enrolled</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
