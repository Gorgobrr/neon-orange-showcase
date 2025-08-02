import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye, ExternalLink, Pause } from "lucide-react";

const VideoProjectsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videoProjects = [
    {
      id: 1,
      title: "Brand Campaign 2024",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      views: "125K",
      platform: "Instagram",
      description: "Creative brand campaign showcasing innovative design solutions"
    },
    {
      id: 2,
      title: "Product Launch Video",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      views: "89K",
      platform: "TikTok",
      description: "Dynamic product showcase with motion graphics and animations"
    },
    {
      id: 3,
      title: "Social Media Series",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      views: "203K",
      platform: "YouTube",
      description: "Multi-part series featuring lifestyle and design content"
    },
    {
      id: 4,
      title: "Event Highlights",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      views: "67K",
      platform: "Instagram",
      description: "Event coverage with creative editing and sound design"
    },
    {
      id: 5,
      title: "Tutorial Series",
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      views: "156K",
      platform: "YouTube",
      description: "Educational content with step-by-step design tutorials"
    },
    {
      id: 6,
      title: "Client Testimonials",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      views: "42K",
      platform: "LinkedIn",
      description: "Professional testimonial videos with clean aesthetic"
    }
  ];

  const toggleVideo = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const formatViews = (views: string) => {
    return views;
  };

  return (
    <section id="video-projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Video Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Social media video content with engaging storytelling and professional production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-stagger">
          {videoProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="neon"
                      size="icon"
                      className="w-16 h-16 rounded-full"
                      onClick={() => toggleVideo(project.id)}
                    >
                      {playingVideo === project.id ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </Button>
                  </div>

                  {/* Views Counter */}
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-black/70 px-2 py-1 rounded-full">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-white text-sm font-medium">
                      {formatViews(project.views)}
                    </span>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-3 right-3 bg-primary/90 px-2 py-1 rounded-full">
                    <span className="text-primary-foreground text-xs font-medium">
                      {project.platform}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button variant="neonOutline" size="sm" className="flex-1">
                      <Play className="w-4 h-4" />
                      Play
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoProjectsSection;