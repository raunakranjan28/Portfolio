import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Raunak Ranjan</h3>
            <p className="text-muted-foreground">Video Editor | Frontend Developer | Storyteller</p>
          </div>
          
          <div className="flex items-center justify-center text-muted-foreground text-sm">
            <span>© {currentYear} Raunak Ranjan. Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>and creativity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;