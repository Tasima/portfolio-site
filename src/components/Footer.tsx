import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              Developer by trade. </span>
              <span className="text-primary ml-1">Adversary by mindset.</span>
          
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed & Developed by yours truly
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              This portfolio showcases my journey as a Computer Science student and developer.
              <br />
              <span className="text-primary">Open to opportunities</span> • 
              <span className="text-secondary ml-1">Ready to contribute</span> • 
              <span className="text-accent ml-1">Eager to learn</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;