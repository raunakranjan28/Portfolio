import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Video, Play, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces using Canva and modern design principles",
      icon: Palette,
      features: [
        "Modern Interface Design",
        "Brand Identity Creation",
        "Responsive Layouts",
        "User Experience Optimization"
      ],
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      title: "Video Editing Services",
      description: "Professional video editing for Instagram Reels and promotional content",
      icon: Video,
      features: [
        "Instagram Reels",
        "Promotional Videos",
        "Travel Content",
        "Music Synchronization"
      ],
      color: "text-accent",
      bgColor: "bg-accent/20"
    },
    {
      title: "Content Creation",
      description: "End-to-end content production from concept to final delivery",
      icon: Play,
      features: [
        "Storytelling & Scripts",
        "Shooting & Production",
        "Post-Production Editing",
        "Social Media Optimization"
      ],
      color: "text-primary",
      bgColor: "bg-primary/20"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive creative solutions for your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 backdrop-blur-sm card-hover group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-spring`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;