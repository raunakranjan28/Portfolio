import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Briefcase, Camera } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tntra",
      role: "Frontend Intern",
      type: "Software Company - Vadodara",
      description: "Built an e-commerce website using modern frontend technologies, focusing on user experience and responsive design.",
      skills: ["React", "JavaScript", "CSS", "E-commerce"],
      icon: Building,
      color: "text-primary"
    },
    {
      company: "Clothing Startup",
      role: "Content & Video Editor",
      type: "Creative Agency",
      description: "Created engaging product reels and promotional edits for Instagram, specializing in modern transitions and music syncing.",
      skills: ["Video Editing", "Instagram Reels", "Music Syncing", "Transitions"],
      icon: Briefcase,
      color: "text-accent"
    },
    {
      company: "NGO - Slum Kids Education",
      role: "Video Editor & Content Creator",
      type: "Non-Profit Organization",
      description: "Shot and edited reels highlighting NGO activities and festivals, significantly boosting social media engagement.",
      skills: ["Video Production", "Social Media", "Storytelling", "Community Impact"],
      icon: Users,
      color: "text-primary"
    },
    {
      company: "Good and Mad",
      role: "Videographer & Editor",
      type: "Travel Reel Series",
      description: "Shot with drone & GoPro, edited cinematic reels highlighting local travel spots, combining storytelling with visuals.",
      skills: ["Drone Photography", "GoPro", "Cinematic Editing", "Travel Content"],
      icon: Camera,
      color: "text-accent"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Experience & Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through creative projects and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 backdrop-blur-sm card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-secondary/50 ${exp.color} group-hover:scale-110 transition-spring`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                          {exp.company}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{exp.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="secondary" className="gradient-primary text-white">
                      {exp.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-foreground hover:bg-primary/10 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;