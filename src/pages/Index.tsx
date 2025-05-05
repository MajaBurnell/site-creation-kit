
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Zap, Battery, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Simple animation on scroll functionality
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check on page load
    
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        
        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="mb-4 text-gray-900">
                Why Choose <span className="gradient-text">Bessify</span>
              </h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional energy storage solutions with industry-leading performance, reliability, and service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop"
                  alt="Bessify BESS installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6 animate-on-scroll">
                <div className="flex">
                  <div className="rounded-full bg-bessify-green-100 p-3 mr-4">
                    <ShieldCheck className="h-6 w-6 text-bessify-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industry-Leading Safety</h3>
                    <p className="text-gray-600">
                      Our multi-layered safety systems include advanced thermal management, sophisticated monitoring, 
                      and built-in fire suppression to ensure the highest level of protection.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="rounded-full bg-bessify-green-100 p-3 mr-4">
                    <Battery className="h-6 w-6 text-bessify-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Superior Performance</h3>
                    <p className="text-gray-600">
                      Our BESS systems deliver optimal charging efficiency, higher energy density, and longer cycle life 
                      than competitive solutions, maximizing your return on investment.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="rounded-full bg-bessify-green-100 p-3 mr-4">
                    <LineChart className="h-6 w-6 text-bessify-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                    <p className="text-gray-600">
                      Our proprietary energy management software provides real-time insights, predictive maintenance, 
                      and optimization strategies to maximize your energy savings.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="rounded-full bg-bessify-green-100 p-3 mr-4">
                    <Zap className="h-6 w-6 text-bessify-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
                    <p className="text-gray-600">
                      We work closely with you to design a BESS solution tailored to your specific energy needs, 
                      site requirements, and financial goals.
                    </p>
                  </div>
                </div>
                
                <div>
                  <Link to="/products">
                    <Button className="mt-4 bg-bessify-green-600 hover:bg-bessify-green-700">
                      Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Banner */}
        <section className="py-10 bg-bessify-green-600 text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold">Ready to start your journey toward energy independence?</h3>
                <p className="text-bessify-green-100">Schedule a free consultation with our energy experts.</p>
              </div>
              <Link to="/contact">
                <Button className="bg-white text-bessify-green-700 hover:bg-bessify-green-50" size="lg">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
