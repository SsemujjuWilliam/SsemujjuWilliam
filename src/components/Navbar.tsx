
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <a href="#home" className="font-heading font-bold text-xl">
          <span className="gradient-text">DataSci</span>Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-accent font-medium text-sm transition duration-200"
            >
              {item.label}
            </a>
          ))}
          <Button variant="default" size="sm">Resume</Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-16 left-0 right-0 bg-background border-b border-border transition-all duration-300 md:hidden",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-accent font-medium py-2 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="default">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
