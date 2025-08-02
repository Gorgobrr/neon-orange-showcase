import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Heart } from "lucide-react";

const CollaborationsSection = () => {
  const collaborations = [
    {
      id: 1,
      username: "@creative_studio",
      displayName: "Creative Studio",
      profilePic: "https://images.unsplash.com/photo-1494790108755-2616b169a1b7?w=100&h=100&fit=crop&crop=face",
      followers: "125K",
      description: "Digital design & branding studio",
      verified: true,
      posts: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=300&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      username: "@lifestyle_brand",
      displayName: "Lifestyle Brand",
      profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      followers: "89K",
      description: "Sustainable lifestyle & wellness",
      verified: false,
      posts: [
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556228842-f6ac08fcd5e2?w=300&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      username: "@tech_innovators",
      displayName: "Tech Innovators",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      followers: "200K",
      description: "Innovation & technology solutions",
      verified: true,
      posts: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop"
      ]
    }
  ];

  return (
    <section id="collaborations" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partnerships with amazing brands and creators that showcase our collaborative work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-stagger">
          {collaborations.map((collab, index) => (
            <Card 
              key={collab.id} 
              className="bg-card border-border hover:border-primary transition-all duration-300 neon-glow-on-hover"
            >
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={collab.profilePic}
                    alt={collab.displayName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-lg">{collab.displayName}</h3>
                      {collab.verified && (
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-primary text-sm">{collab.username}</p>
                    <p className="text-muted-foreground text-sm">{collab.description}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{collab.followers}</span>
                    <span className="text-muted-foreground">followers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">collaborated</span>
                  </div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {collab.posts.map((post, postIndex) => (
                    <div
                      key={postIndex}
                      className="aspect-square bg-cover bg-center rounded-lg border border-border hover:border-primary transition-colors duration-300 cursor-pointer group"
                      style={{ backgroundImage: `url(${post})` }}
                    >
                      <div className="w-full h-full bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Profile Button */}
                <Button variant="neonOutline" className="w-full">
                  <ExternalLink className="w-4 h-4" />
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;