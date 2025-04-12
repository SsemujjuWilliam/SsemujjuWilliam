
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Breast Cancer Prediction",
      description: "Machine learning model to predict breast cancer diagnosis (malignant/benign) with high accuracy using Wisconsin Diagnostic dataset and various ML algorithms.",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Scikit-Learn", "Medical AI", "Classification"],
      githubLink: "https://github.com/SsemujjuWilliam/breast-cancer-prediction",
      liveLink: "https://github.com/SsemujjuWilliam/breast-cancer-prediction"
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed a predictive model to identify customers likely to churn, helping businesses implement targeted retention strategies and reduce customer loss.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Machine Learning", "Business Analytics", "XGBoost"],
      githubLink: "https://github.com/SsemujjuWilliam/customer-churn-prediction",
      liveLink: "https://github.com/SsemujjuWilliam/customer-churn-prediction"
    },
    {
      title: "Stock Price Prediction",
      description: "Time series analysis and prediction model for stock prices using LSTM neural networks, integrating market sentiment analysis for improved accuracy.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Deep Learning", "LSTM", "Financial Analysis"],
      githubLink: "https://github.com/SsemujjuWilliam/stock-price-prediction",
      liveLink: "https://github.com/SsemujjuWilliam/stock-price-prediction"
    },
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
    }
  ];
  
  return (
    <section id="projects" className="py-12 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of my data science projects showcasing data analysis, 
            data visualizations, and analytical solutions to real-world problems with a focus on the Ugandan context.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="h-full">
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
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="no-underline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="no-underline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="https://github.com/SsemujjuWilliam" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="outline" className="no-underline">
              View More Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
