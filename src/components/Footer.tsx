
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-heading font-bold text-2xl">
              <span className="text-accent">Data</span>Sci
            </h3>
            <p className="mt-2 text-background/70 max-w-md">
              Translating complex data into actionable insights to drive business value and innovation.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/ssemujju-william-63b44727b" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/SsemujjuWilliam" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-background/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:ssemujjuwilliam@gmail.com" 
              className="p-2 rounded-full hover:bg-background/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="h-px bg-background/20 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/70">
            &copy; {currentYear} Ssemujju William. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-background/70 hover:text-background">Privacy Policy</a>
            <a href="#" className="text-sm text-background/70 hover:text-background">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
