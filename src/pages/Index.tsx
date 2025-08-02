import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import VideoProjectsSection from "@/components/VideoProjectsSection";
import DesignsSection from "@/components/DesignsSection";
import PersonalVideosSection from "@/components/PersonalVideosSection";

const Index = () => {
  useEffect(() => {
    // Enhanced scroll animations with stagger support
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
          entry.target.setAttribute('data-animated', 'true');
          const element = entry.target as HTMLElement;
          
          // Handle regular sections
          if (element.tagName === 'SECTION') {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
          
          // Handle stagger animations
          const staggerElements = element.querySelectorAll('.animate-stagger');
          staggerElements.forEach((staggerEl) => {
            staggerEl.classList.add('visible');
          });
        }
      });
    }, observerOptions);

    // Observe sections and set initial state
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const element = section as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(40px)';
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(section);
    });

    // Also observe stagger containers directly
    const staggerContainers = document.querySelectorAll('.animate-stagger');
    staggerContainers.forEach((container) => {
      observer.observe(container);
    });

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
