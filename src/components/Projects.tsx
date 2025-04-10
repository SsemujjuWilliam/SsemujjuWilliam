
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Total Data Analysis",
      description: "Data analysis and visualization project for medical data, demonstrating skills in data preprocessing, exploration, and insights generation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Pandas", "Data Analysis", "NumPy"],
      githubLink: "https://github.com/SsemujjuWilliam/Total-data-analysis",
      liveLink: "https://github.com/SsemujjuWilliam/Total-data-analysis"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive visualization dashboard for HR data analysis, providing insights into employee performance and organizational metrics.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Matplotlib", "Data Visualization", "HR Analytics"],
      githubLink: "https://github.com/SsemujjuWilliam/data_viz_dash",
      liveLink: "https://github.com/SsemujjuWilliam/data_viz_dash"
    },
    {
      title: "COVID-19 Data Analysis",
      description: "Analysis of COVID-19 data to identify patterns and insights, with visualizations of case trends across different regions.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Data Analysis", "Healthcare Analytics", "Visualization"],
      githubLink: "https://github.com/SsemujjuWilliam/COVID-19",
      liveLink: "https://github.com/SsemujjuWilliam/COVID-19"
    },
    {
      title: "General Data Analysis",
      description: "Comprehensive data analysis project showcasing data cleaning, preprocessing, and visualization techniques for varied datasets.",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Pandas", "Data Science", "Statistical Analysis"],
      githubLink: "https://github.com/SsemujjuWilliam/GENERAL-DATA-ANALYSIS",
      liveLink: "https://github.com/SsemujjuWilliam/GENERAL-DATA-ANALYSIS"
    }
  ];
  
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of my data science projects showcasing data analysis, 
            data visualizations, and analytical solutions to real-world problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden data-card">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline">+{project.tags.length - 3}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" as="a" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" as="a" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" as="a" href="https://github.com/SsemujjuWilliam" target="_blank" rel="noopener noreferrer">
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
