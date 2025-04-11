
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const showcaseItems = [
  {
    title: "Deep Learning Journey",
    description: "Exploring neural networks and advanced AI architectures to solve complex problems.",
    imagePlaceholder: "/placeholder.svg",
    alt: "Deep Learning Visualization"
  },
  {
    title: "Data Analysis in Action",
    description: "Transforming raw data into actionable insights through statistical analysis and visualization.",
    imagePlaceholder: "/placeholder.svg",
    alt: "Data Analysis Dashboard"
  },
  {
    title: "Machine Learning Models",
    description: "Building and training robust models that drive predictive analytics and decision making.",
    imagePlaceholder: "/placeholder.svg",
    alt: "Machine Learning Model Diagram"
  },
  {
    title: "Ugandan Data Science",
    description: "Applying data science techniques to local problems and creating impact in Uganda.",
    imagePlaceholder: "/placeholder.svg",
    alt: "Uganda-focused Data Project"
  },
  {
    title: "Collaborative Research",
    description: "Working with teams to push the boundaries of AI research and implementation.",
    imagePlaceholder: "/placeholder.svg",
    alt: "Research Collaboration"
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My Data Science <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A glimpse into what I'm currently learning and my life as a data scientist, combining
            technical expertise with real-world applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {showcaseItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="data-card h-full">
                    <CardContent className="p-0">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img 
                          src={item.imagePlaceholder} 
                          alt={item.alt} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-foreground/70">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 italic">
            "The goal is to turn data into information, and information into insight." – Carly Fiorina
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
