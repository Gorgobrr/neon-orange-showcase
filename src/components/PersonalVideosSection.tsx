import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Upload, Pause, Trash2, Plus } from "lucide-react";

const PersonalVideosSection = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Creative Process Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      description: "A glimpse into my creative process and workspace setup for design projects.",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Design Inspiration & Mood Board",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      description: "How I gather inspiration and create mood boards for client projects.",
      duration: "5:12"
    },
    {
      id: 3,
      title: "Time-lapse: Logo Design",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      description: "Complete logo design process from concept to final execution.",
      duration: "2:30"
    },
    {
      id: 4,
      title: "Color Theory in Practice",
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      description: "Applying color theory principles in real design projects.",
      duration: "7:20"
    },
    {
      id: 5,
      title: "Typography Experiments",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      description: "Exploring different typography styles and their impact on design.",
      duration: "4:15"
    },
    {
      id: 6,
      title: "Client Project Walkthrough",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
      videoUrl: "#", // Replace with actual video URL
      description: "Step-by-step breakdown of a complete client project from brief to delivery.",
      duration: "8:45"
    }
  ]);

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Handle video upload logic here
      console.log("Videos selected:", files);
      // You would typically upload to a server and update the videos state
    }
  };

  const toggleVideo = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const removeVideo = (videoId: number) => {
    setVideos(videos.filter(video => video.id !== videoId));
  };

  return (
    <section id="personal-videos" className="py-20">
      <div className="container mx-auto px-8 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Personal Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Behind-the-scenes content and personal projects not featured on social media
          </p>
          
          {/* Upload Button */}
          <div className="flex justify-center">
            <label htmlFor="video-upload" className="cursor-pointer">
              <Button variant="neon" size="lg" className="group">
                <Upload className="w-5 h-5 group-hover:animate-bounce" />
                Upload New Video
              </Button>
              <input
                id="video-upload"
                type="file"
                multiple
                accept="video/*"
                className="hidden"
                onChange={handleVideoUpload}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <Card 
              key={video.id}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="neon"
                      size="icon"
                      className="w-16 h-16 rounded-full"
                      onClick={() => toggleVideo(video.id)}
                    >
                      {playingVideo === video.id ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </Button>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">
                      {video.duration}
                    </span>
                  </div>

                  {/* Delete Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="destructive"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => removeVideo(video.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  
                  <Button variant="neonOutline" size="sm" className="w-full">
                    <Play className="w-4 h-4" />
                    Watch Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add New Video Card */}
          <Card className="bg-card/50 border-dashed border-2 border-border hover:border-primary transition-all duration-300 group cursor-pointer">
            <CardContent className="p-0">
              <label htmlFor="video-upload-card" className="cursor-pointer">
                <div className="aspect-video flex flex-col items-center justify-center p-6">
                  <Plus className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4" />
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    Click to upload a new video
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    MP4, MOV, AVI files
                  </p>
                </div>
                <input
                  id="video-upload-card"
                  type="file"
                  multiple
                  accept="video/*"
                  className="hidden"
                  onChange={handleVideoUpload}
                />
              </label>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalVideosSection;