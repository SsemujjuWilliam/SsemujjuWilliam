
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out 
            and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="data-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
