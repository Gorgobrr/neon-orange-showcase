import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Upload, FileText, Image, Download, Eye, Plus } from "lucide-react";

const DesignsSection = () => {
  const [designs, setDesigns] = useState([
    {
      id: 1,
      title: "Brand Identity Package",
      type: "PDF",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      fileUrl: "#", // Replace with actual file URL
      description: "Complete brand identity design including logo variations, color palette, and typography guidelines."
    },
    {
      id: 2,
      title: "Social Media Templates",
      type: "PNG",
      thumbnail: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      fileUrl: "#", // Replace with actual file URL
      description: "Collection of social media post templates for Instagram and Facebook campaigns."
    },
    {
      id: 3,
      title: "Website Mockups",
      type: "PDF",
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      fileUrl: "#", // Replace with actual file URL
      description: "Responsive website design mockups with user interface components and layouts."
    },
    {
      id: 4,
      title: "Print Campaign",
      type: "PNG",
      thumbnail: "https://images.unsplash.com/photo-1611224923583-ae78c1d9c050?w=400&h=300&fit=crop",
      fileUrl: "#", // Replace with actual file URL
      description: "Print advertisement designs for magazine and billboard campaigns."
    },
    {
      id: 5,
      title: "Mobile App UI",
      type: "PDF",
      thumbnail: "https://images.unsplash.com/photo-1611262588019-db6cc2032da3?w=400&h=300&fit=crop",
      fileUrl: "#", // Replace with actual file URL
      description: "Mobile application user interface design with interactive prototypes."
    },
    {
      id: 6,
      title: "Logo Collection",
      type: "PNG",
      thumbnail: "https://images.unsplash.com/photo-1611224923856-09e83a69b6a4?w=400&h=300&fit=crop",
      fileUrl: "#", // Replace with actual file URL
      description: "Various logo designs created for different clients and industries."
    }
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Handle file upload logic here
      console.log("Files selected:", files);
      // You would typically upload to a server and update the designs state
    }
  };

  const getFileIcon = (type: string) => {
    return type === "PDF" ? FileText : Image;
  };

  return (
    <section id="designs" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Design Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Static design work including branding, UI/UX, and print materials
          </p>
          
          {/* Upload Button */}
          <div className="flex justify-center">
            <label htmlFor="file-upload" className="cursor-pointer">
              <Button variant="neon" size="lg" className="group">
                <Upload className="w-5 h-5 group-hover:animate-bounce" />
                Upload New Design
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {designs.map((design, index) => {
            const FileIcon = getFileIcon(design.type);
            
            return (
              <Card 
                key={design.id}
                className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Design Preview */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={design.thumbnail}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="neon" size="icon">
                              <Eye className="w-5 h-5" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl bg-card border-border">
                            <img
                              src={design.thumbnail}
                              alt={design.title}
                              className="w-full h-auto rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                        
                        <Button variant="neonOutline" size="icon">
                          <Download className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    {/* File Type Badge */}
                    <div className="absolute top-3 right-3 flex items-center space-x-1 bg-primary/90 px-2 py-1 rounded-full">
                      <FileIcon className="w-4 h-4 text-primary-foreground" />
                      <span className="text-primary-foreground text-xs font-medium">
                        {design.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {design.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {design.description}
                    </p>
                    
                    <div className="flex space-x-2">
                      <Button variant="neonOutline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Add New Design Card */}
          <Card className="bg-card/50 border-dashed border-2 border-border hover:border-primary transition-all duration-300 group cursor-pointer">
            <CardContent className="p-0">
              <label htmlFor="file-upload-card" className="cursor-pointer">
                <div className="aspect-[4/3] flex flex-col items-center justify-center p-6">
                  <Plus className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4" />
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    Click to upload a new design
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    PNG, JPG, PDF files
                  </p>
                </div>
                <input
                  id="file-upload-card"
                  type="file"
                  multiple
                  accept=".png,.jpg,.jpeg,.pdf"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DesignsSection;