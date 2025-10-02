import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Code, Camera, Palette, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Video Editing",
      level: 95,
      icon: Video,
      description: "Professional video editing with smooth transitions and storytelling"
    },
    {
      name: "Frontend Development",
      level: 88,
      icon: Code,
      description: "Modern web development with React, TypeScript, and responsive design"
    },
    {
      name: "Photography",
      level: 85,
      icon: Camera,
      description: "Creative photography and visual composition for compelling content"
    },
    {
      name: "Motion Graphics",
      level: 82,
      icon: Zap,
      description: "Dynamic animations and motion graphics for engaging visuals"
    },
    {
      name: "UI/UX Design",
      level: 78,
      icon: Palette,
      description: "User-centered design principles and modern interface creation"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining technical proficiency with creative vision
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const chartData = [
              { name: 'completed', value: skill.level },
              { name: 'remaining', value: 100 - skill.level }
            ];
            
            return (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-40 h-40">
                      <ChartContainer
                        config={{
                          completed: {
                            label: skill.name,
                            color: "hsl(var(--primary))",
                          },
                          remaining: {
                            label: "Remaining",
                            color: "hsl(var(--muted))",
                          },
                        }}
                        className="w-full h-full"
                      >
                        <PieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={70}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                          >
                            <Cell fill="hsl(var(--primary))" />
                            <Cell fill="hsl(var(--muted))" />
                          </Pie>
                        </PieChart>
                      </ChartContainer>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="p-2 rounded-xl bg-primary/20 inline-block mb-1">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-2xl font-bold gradient-text">{skill.level}%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <CardTitle className="text-lg mb-2">{skill.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
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

export default Skills;