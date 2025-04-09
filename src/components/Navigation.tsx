
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-navy-950">
              <span className="text-brand-600">Nova</span>Studio
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
          
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden container py-4 fixed inset-x-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm">Log in</Button>
              <Button size="sm">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
