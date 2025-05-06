
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Battery, Lightbulb, BarChart3, Info, Phone, BookOpen, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Battery className="h-8 w-8 text-bessify-green-600" />
            <span className="text-xl font-bold text-gray-900">
              <span className="text-bessify-green-600">Bessify</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1">
              <Lightbulb className="w-4 h-4" />
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1">
              <Info className="w-4 h-4" />
              About Us
            </Link>
            <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </Link>
            <Link to="/why-bessify" className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1">
              <Wrench className="w-4 h-4" />
              Why Bessify
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              How It Works
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1">
              <Phone className="w-4 h-4" />
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            
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
        <div className="md:hidden container py-4 fixed inset-x-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <Lightbulb className="w-4 h-4" />
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <Info className="w-4 h-4" />
              About Us
            </Link>
            <Link 
              to="/dashboard" 
              className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </Link>
            <Link 
              to="/why-bessify" 
              className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <Wrench className="w-4 h-4" />
              Why Bessify
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <BookOpen className="w-4 h-4" />
              How It Works
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium transition-colors hover:text-bessify-green-600 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <Phone className="w-4 h-4" />
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm" className="border-bessify-green-600 text-bessify-green-600 hover:bg-bessify-green-50">Request Demo</Button>
              <Button size="sm" className="bg-bessify-green-600 hover:bg-bessify-green-700">Get a Quote</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
