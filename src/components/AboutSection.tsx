import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm Mark Andrei, a BSIT student at the Polytechnic University of the Philippines — Santa Maria, Bulacan campus. I'm passionate about crafting intuitive, modern web applications and exploring technologies like Salesforce, React, Three.js, and AI integration. I love turning ideas into real, functional digital products.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
