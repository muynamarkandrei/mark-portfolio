import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="animate-in-view container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-card border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-card border-border focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              rows={5}
              className="bg-card border-border focus:border-primary"
            />
            <Button type="submit" className="rounded-full px-8 font-display glow">
              <Send className="h-4 w-4 mr-2" /> Send Message
            </Button>
          </form>

          {/* Links */}
          <div className="flex flex-col justify-center gap-6">
            <a
              href="https://github.com/muynamarkandrei"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground">github.com/muynamarkandrei</p>
              </div>
            </a>
            <p className="text-xs text-muted-foreground mt-4">Open to internship opportunities and freelance projects</p>
            <a
              href="mailto:markandreimuyna31@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">markandreimuyna31@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
