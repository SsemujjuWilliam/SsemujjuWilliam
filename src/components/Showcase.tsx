
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const showcaseItems = [{
  title: "About Me",
  description: "My journey into data science began with a passion for solving problems and understanding patterns in data.",
  image: "/lovable-uploads/1d4ca3ce-e1df-4c31-bf9a-d806675a3eab.png",
  alt: "Personal portrait photo"
}, {
  title: "Academic Achievement",
  description: "Graduated with honors, ready to apply my knowledge in AI and data science to real-world challenges.",
  image: "/lovable-uploads/5f31383b-fa6e-4d88-b50c-a9c2e4c9bea1.png",
  alt: "Graduation day photo"
}, {
  title: "Early Coding Days",
  description: "One of my first programs at age 16 - a simple algorithm to find the largest and smallest numbers in a list.",
  image: "/lovable-uploads/0aa0bdec-b4a1-46a6-83b4-fe8e105aa6f8.png",
  alt: "Early Python code screenshot"
}, {
  title: "Team Collaboration",
  description: "I believe in the power of teamwork to tackle complex data challenges and create innovative solutions.",
  image: "/lovable-uploads/4cac54f0-f04c-4197-a35b-1d2053246cc4.png",
  alt: "Team photo with colleagues"
}, {
  title: "Friends & Support",
  description: "Building a strong network of peers who share my passion for technology and innovation.",
  image: "/lovable-uploads/0096b56b-86f7-4ccd-bb4b-357a0b65a4a9.png",
  alt: "With friends photo"
}, {
  title: "Nature Lover",
  description: "Finding inspiration in nature's patterns and complexity - a perfect complement to data science thinking.",
  image: "/lovable-uploads/1212257e-cde2-4bc9-9208-73dad8cff367.png",
  alt: "Nature exploration photo"
}, {
  title: "Community Outreach",
  description: "Sharing knowledge and spreading positive impact through community engagement and outreach programs.",
  image: "/lovable-uploads/5893fa89-5199-4b8e-96fe-80cd9d4e372a.png",
  alt: "Community outreach photo"
}];

const Showcase = () => {
  return <section id="showcase" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My Data Science <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A glimpse into what I'm currently learning and my life as a data scientist, combining
            technical expertise with real-world applications.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="mt-12">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent>
              {showcaseItems.map((item, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="data-card h-full">
                    <CardContent className="p-0">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img src={item.image} alt={item.alt} className="w-full h-full transition-transform hover:scale-105 object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-foreground/70">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <div className="hidden md:flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="mt-12 text-center">
          <p className="text-foreground/70 italic">
            "The goal is to turn data into information, and information into insight." – Carly Fiorina
          </p>
        </motion.div>
      </div>
    </section>;
};

export default Showcase;
