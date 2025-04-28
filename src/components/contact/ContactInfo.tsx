
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: <Mail />, label: "Email", value: "SsemujjuWilliam@outlook.com" },
  { icon: <Phone />, label: "Phone", value: "+256 771 123456" },
  { icon: <MapPin />, label: "Location", value: "Kampala, Uganda" }
];

const socialLinks = [
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/william-ssemujju/", label: "LinkedIn" },
  { icon: <Github size={20} />, href: "https://github.com/SsemujjuWilliam", label: "GitHub" },
  { icon: <Twitter size={20} />, href: "https://twitter.com/SsemujjuWilliam", label: "Twitter" },
  { icon: <MessageSquare size={20} />, href: "https://wa.me/message/C6YVX7OIAJLVN1", label: "WhatsApp" }
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <div 
              key={item.label} 
              className="flex items-center gap-4 p-4 rounded-lg bg-white border border-border"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-foreground/60">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border border-border hover:bg-primary hover:text-white transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Office Location</h3>
        <div className="rounded-lg overflow-hidden border border-border h-60">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d32.5472257371521!3d0.3177049654069289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f8b19684d%3A0x8442ab898f916bdf!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1653697051747!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
