import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import profileImage from "@/assets/raunak-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-secondary opacity-50">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Raunak Ranjan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-glow animate-float border-4 border-primary/20 object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Raunak Ranjan</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
            Video Editor | Frontend Developer | Storyteller
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting compelling visual narratives through creative cuts, smooth transitions, 
            and impactful visuals that connect emotionally with audiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-4 text-lg transition-spring hover:scale-105 hover:shadow-glow"
            >
              Let's Work Together
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={scrollToPortfolio}
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-4 text-lg transition-spring hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;