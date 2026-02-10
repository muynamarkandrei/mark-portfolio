import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/profile.png"
            alt="Mark Andrei B. Muyna"
            className="h-40 w-40 rounded-full border-4 border-primary/30 object-cover shadow-2xl"
          />
        </div>

        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
          Aspiring Web Developer
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Mark Andrei{" "}
          <span className="gradient-text">B. Muyna</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Building modern web experiences with clean code and curious mind.
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
          BSIT student at PUP Santa Maria • Available for internships • Frontend focus with interest in UI/UX & cybersecurity
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 font-display glow">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-display border-border hover:border-primary">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default HeroSection;
