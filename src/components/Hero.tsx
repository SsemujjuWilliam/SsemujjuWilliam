
import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </div>
          
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent blur-md opacity-70"></div>
              <div className="relative bg-card rounded-full overflow-hidden border border-border w-64 h-64 md:w-80 md:h-80">
                <img
                  src="/lovable-uploads/1e89e731-c5e8-44e6-9116-0776cb50e99a.png"
                  alt="William Ssemujju Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about"
            className="animate-bounce rounded-full w-10 h-10 flex items-center justify-center border border-border"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
