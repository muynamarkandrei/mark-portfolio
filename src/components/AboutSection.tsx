import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
          <p>
            I'm Mark Andrei, a BSIT student at the Polytechnic University of the Philippines — Santa Maria, Bulacan campus, actively pursuing an internship to apply my skills and grow as a developer.
          </p>
          <p>
            I focus on frontend development with proficiency in HTML, CSS, JavaScript, and React, with growing experience in 3D visualization (Three.js) and UI/UX design principles. I'm also exploring cybersecurity fundamentals and secure coding practices to build more resilient applications.
          </p>
          <p>
            With basic hands-on experience in backend technologies (Node.js, SQL, MongoDB) and Salesforce development, combined with strong troubleshooting and debugging skills, I'm eager to contribute to meaningful projects while continuously learning and improving my craft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
