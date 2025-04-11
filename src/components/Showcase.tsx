import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const showcaseItems = [{
  title: "About Me",
  description: "My journey into data science began with a passion for solving problems and understanding patterns in data.",
  image: "/lovable-uploads/ea36f03d-5995-4f43-8fcd-97be89bfa083.png",
  alt: "Personal portrait photo"
}, {
  title: "Academic Achievement",
  description: "Graduated with honors, ready to apply my knowledge in AI and data science to real-world challenges.",
  image: "/lovable-uploads/25edd7ef-80b5-407b-82b1-97846ad4ac55.png",
  alt: "Graduation day photo"
}, {
  title: "Early Coding Days",
  description: "One of my first programs at age 16 - a simple algorithm to find the largest and smallest numbers in a list.",
  image: "/lovable-uploads/172f9e44-fdbd-4fee-ae06-c5c47ac1e82d.png",
  alt: "Early Python code screenshot"
}, {
  title: "Team Collaboration",
  description: "I believe in the power of teamwork to tackle complex data challenges and create innovative solutions.",
  image: "/lovable-uploads/60b9d967-8f7b-47c2-89e6-55ce3aeaefed.png",
  alt: "Team photo with colleagues"
}, {
  title: "Friends & Support",
  description: "Building a strong network of peers who share my passion for technology and innovation.",
  image: "/lovable-uploads/44519701-15af-4fa1-ba72-faea0b8a24eb.png",
  alt: "With friends photo"
}, {
  title: "Nature Lover",
  description: "Finding inspiration in nature's patterns and complexity - a perfect complement to data science thinking.",
  image: "/lovable-uploads/56d02a3c-f858-4f14-a715-d650b22d4e9b.png",
  alt: "Nature exploration photo"
}, {
  title: "Community Outreach",
  description: "Sharing knowledge and spreading positive impact through community engagement and outreach programs.",
  image: "/lovable-uploads/ea2ac6fa-e375-402e-9e39-4cfac564ec27.png",
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