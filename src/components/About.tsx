
import { Award, BookOpen, Code, Database, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { 
      icon: <Database />, 
      title: "Data Analysis", 
      description: "Proficient in statistical analysis, data cleansing, and insight generation with Python & SQL." 
    },
    { 
      icon: <LineChart />, 
      title: "Machine Learning", 
      description: "Expert in developing predictive models using supervised and unsupervised learning techniques." 
    },
    { 
      icon: <Code />, 
      title: "Data Engineering", 
      description: "Experience building robust data pipelines and architectures for large-scale data processing." 
    },
    { 
      icon: <BookOpen />, 
      title: "Research", 
      description: "Published research in the field of natural language processing and computer vision." 
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              With 7+ years of experience in the data science field, I've helped organizations 
              make data-driven decisions and implement AI solutions that drive business value.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">My Journey</h3>
            <p className="text-foreground/70 mb-4">
              I began my data science journey after completing my Master's in Applied Mathematics. 
              Since then, I've worked with startups and Fortune 500 companies across finance, 
              healthcare, and e-commerce industries.
            </p>
            <p className="text-foreground/70 mb-4">
              My passion lies in solving complex problems through data analysis and building 
              machine learning models that provide actionable insights.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Award size={20} />
              <span className="font-medium">PhD in Computer Science, Stanford University</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Data analysis visualization"
              className="rounded-lg shadow-md max-h-80 object-cover"
            />
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-heading font-semibold text-center mb-8">Core Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full data-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-foreground/70">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
