
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", value: 95 },
    { name: "R", value: 85 },
    { name: "SQL", value: 90 },
    { name: "Machine Learning", value: 92 },
    { name: "Deep Learning", value: 80 },
    { name: "Data Visualization", value: 88 },
    { name: "Statistical Analysis", value: 85 },
    { name: "Big Data Tools", value: 75 }
  ];
  
  const libraries = [
    { name: "Pandas", value: 90 },
    { name: "Scikit-learn", value: 88 },
    { name: "TensorFlow", value: 82 },
    { name: "PyTorch", value: 78 },
    { name: "NumPy", value: 92 },
    { name: "Matplotlib", value: 85 },
    { name: "Seaborn", value: 80 },
    { name: "NLTK", value: 75 }
  ];

  const tools = [
    { name: "Jupyter", value: 40 },
    { name: "Git", value: 35 },
    { name: "Docker", value: 25 },
    { name: "Tableau", value: 30 },
    { name: "Power BI", value: 20 },
    { name: "AWS", value: 28 },
    { name: "Azure ML", value: 22 }
  ];

  const COLORS = ['#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#4cc9f0', '#560bad', '#480ca8'];
  
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My technical expertise spans across various data science technologies, 
            tools and methodologies that I've mastered over the years.
          </p>
        </motion.div>
        
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="technical">Skills</TabsTrigger>
            <TabsTrigger value="libraries">Libraries</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-6">Core Technical Proficiencies</h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-foreground/70">{skill.value}%</span>
                      </div>
                      <Progress value={skill.value} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={technicalSkills}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        innerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name }) => name}
                      >
                        {technicalSkills.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'Proficiency']}
                        labelFormatter={(index) => technicalSkills[index].name}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="libraries">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-6">Data Science Libraries & Frameworks</h3>
                <div className="space-y-6">
                  {libraries.map((library, index) => (
                    <motion.div
                      key={library.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{library.name}</span>
                        <span className="text-foreground/70">{library.value}%</span>
                      </div>
                      <Progress value={library.value} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={libraries} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Proficiency']} 
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {libraries.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="tools">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-6">Development & Visualization Tools</h3>
                <div className="space-y-6">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{tool.name}</span>
                        <span className="text-foreground/70">{tool.value}%</span>
                      </div>
                      <Progress value={tool.value} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tools}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name }) => name}
                      >
                        {tools.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'Usage']}
                        labelFormatter={(index) => tools[index].name}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
