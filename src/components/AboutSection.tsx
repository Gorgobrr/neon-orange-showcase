import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Mail, Instagram, Linkedin, Github } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const AboutSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-8 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary neon-glow animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text animate-fade-in-up">
            Your Name
          </h1>

          {/* Position */}
          <p className="text-xl md:text-2xl text-primary mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Creative Digital Designer & Video Producer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Passionate about creating stunning visual experiences and compelling video content. 
            I specialize in digital design, social media collaboration, and video production 
            that brings brands to life through innovative storytelling and cutting-edge design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="neon" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button variant="neonOutline" size="lg" className="group">
                  <Mail className="w-5 h-5 group-hover:animate-pulse" />
                  Contact Me
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-primary">Contact Information</DialogTitle>
                  <DialogDescription>
                    Get in touch with me through any of these channels.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 text-primary text-center">📱</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            {socialLinks.map((social, index) => (
              <Button
                key={social.label}
                variant="social"
                size="icon"
                className="w-12 h-12 rounded-full"
                onClick={() => window.open(social.href, "_blank")}
              >
                <social.icon className="w-6 h-6" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;