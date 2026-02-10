import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          <button
            onClick={() => handleCopy("09998136163", "Phone")}
            className="flex items-center gap-4 group w-full hover:opacity-80 transition-opacity text-left cursor-pointer"
          >
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors flex-shrink-0">
              <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phone</p>
              <p className="text-xs text-muted-foreground">{copied === "Phone" ? "Copied!" : "09998136163"}</p>
            </div>
          </button>

          <button
            onClick={() => handleCopy("markandreimuyna31@gmail.com", "Email")}
            className="flex items-center gap-4 group w-full hover:opacity-80 transition-opacity text-left cursor-pointer"
          >
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors flex-shrink-0">
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">{copied === "Email" ? "Copied!" : "markandreimuyna31@gmail.com"}</p>
            </div>
          </button>

          <a
            href="https://github.com/muynamarkandrei"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group w-full hover:opacity-80 transition-opacity"
          >
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors flex-shrink-0">
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">github.com/muynamarkandrei</p>
            </div>
          </a>

          <p className="text-xs text-muted-foreground mt-6">Open to internship opportunities and freelance projects</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
