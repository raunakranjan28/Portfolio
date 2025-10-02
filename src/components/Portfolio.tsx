import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Mountain, Briefcase } from "lucide-react";
const Portfolio = () => {
  const projects = [{
    title: "Travel Video Series",
    category: "Video Content",
    description: "Cinematic travel reels showcasing local destinations with drone and GoPro footage",
    type: "Travel Content",
    icon: Mountain,
    tags: ["Drone", "GoPro", "Cinematic", "Travel"],
    color: "from-blue-500 to-purple-500"
  }, {
    title: "Brand Logo Animations",
    category: "Motion Graphics",
    description: "Animated logo designs for two growing companies with modern motion graphics",
    type: "Logo Animation",
    icon: Briefcase,
    tags: ["Logo Design", "Animation", "Branding", "Motion Graphics"],
    color: "from-purple-500 to-pink-500"
  }, {
    title: "Instagram Reel Series",
    category: "Social Media",
    description: "Engaging product reels and promotional content with modern transitions",
    type: "Social Content",
    icon: Play,
    tags: ["Instagram", "Reels", "Music Sync", "Transitions"],
    color: "from-pink-500 to-orange-500"
  }, {
    title: "NGO Documentary Content",
    category: "Documentary",
    description: "Educational content highlighting slum kids education program impact",
    type: "Documentary",
    icon: Play,
    tags: ["Documentary", "Education", "Social Impact", "Storytelling"],
    color: "from-orange-500 to-red-500"
  }, {
    title: "Promotional Campaign",
    category: "Commercial",
    description: "Multi-platform promotional content for clothing startup",
    type: "Commercial",
    icon: Briefcase,
    tags: ["Commercial", "Fashion", "Promo", "Multi-platform"],
    color: "from-red-500 to-purple-500"
  }];
  return <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of creative projects and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
          const IconComponent = project.icon;
          return <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm card-hover group overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-spring">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => <Badge key={tagIndex} variant="outline" className="text-xs border-primary/30 text-foreground">
                          {tag}
                        </Badge>)}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gradient-primary text-white hover:scale-105 transition-spring">
                      <Play className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    {/* <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary/10">
                      <ExternalLink className="h-4 w-4" />
                    </Button> */}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Portfolio;