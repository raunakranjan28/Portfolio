import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know the person behind the camera and code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bio Card */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm card-hover">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate video editor with experience in creating engaging reels, 
                travel videos, and promotional content. I specialize in storytelling through 
                creative cuts, smooth transitions, and impactful visuals. My focus is to 
                deliver content that not only looks professional but also connects emotionally 
                with the audience.
              </p>
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  "Every frame tells a story, every cut creates emotion, 
                  and every transition builds connection."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm card-hover">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold mb-2">
                    B.Tech in Computer Science Engineering
                  </h4>
                  <p className="text-primary font-medium mb-2">Class of 2025</p>
                  <p className="text-muted-foreground">
                    Combining technical expertise with creative vision to bridge 
                    the gap between technology and storytelling.
                  </p>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-accent">Key Focus Areas</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Frontend Development & UI/UX Design</li>
                    <li>• Digital Media Production</li>
                    <li>• Creative Technology Solutions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;