import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import VideoProjectsSection from "@/components/VideoProjectsSection";
import DesignsSection from "@/components/DesignsSection";
import PersonalVideosSection from "@/components/PersonalVideosSection";

const Index = () => {
  useEffect(() => {
    // Add scroll animations on page load
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AboutSection />
      <CollaborationsSection />
      <VideoProjectsSection />
      <DesignsSection />
      <PersonalVideosSection />
    </div>
  );
};

export default Index;
