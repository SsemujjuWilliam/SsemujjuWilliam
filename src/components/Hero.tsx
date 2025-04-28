
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div>
              <p className="text-accent font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                William Ssemujju
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6">
                Artificial Intelligence <span className="gradient-text font-semibold">Engineer</span> & Data Scientist
              </h2>
              <p className="text-foreground/70 max-w-md mb-8">
                Business professional leveraging AI, ML, and Deep Learning for impactful business decisions, particularly within the Ugandan context. 
                Specializing in building robust and scalable machine learning solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </a>
                <a href="https://github.com/SsemujjuWilliam" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-card rounded-full overflow-hidden border border-border w-64 h-64 md:w-80 md:h-80">
                <img
                  src="/lovable-uploads/1e89e731-c5e8-44e6-9116-0776cb50e99a.png"
                  alt="William Ssemujju Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
