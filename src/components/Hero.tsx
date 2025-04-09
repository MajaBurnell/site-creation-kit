
import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, Sparkles, Leaf, Bolt } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white to-bessify-green-50">
      <div className="container">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 xl:gap-20 md:items-center">
            <div className="animate-on-scroll">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-bessify-green-100 text-bessify-green-800 mb-4">
                <Sparkles className="w-3 h-3" /> Introducing NextGen BESS Technology
              </span>
              <h1 className="mb-4 text-gray-900">
                Powering a <span className="gradient-text">Sustainable</span> Future with Energy Storage
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Bessify delivers cutting-edge Battery Energy Storage Systems (BESS) designed to optimize renewable energy 
                integration, provide grid stability, and ensure energy security for businesses and utilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto bg-bessify-green-600 hover:bg-bessify-green-700" size="lg">
                  Explore Solutions
                </Button>
                <Button variant="outline" className="w-full sm:w-auto group border-bessify-green-600 text-bessify-green-600 hover:bg-bessify-green-50" size="lg">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Battery className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">99.9%</span>
                  <span className="text-xs text-center text-gray-500">Reliability</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Bolt className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">100MW+</span>
                  <span className="text-xs text-center text-gray-500">Installed</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Leaf className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">-40%</span>
                  <span className="text-xs text-center text-gray-500">CO₂ Emissions</span>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="aspect-square bg-gradient-to-tr from-bessify-green-600 to-bessify-blue-600 rounded-xl shadow-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                  alt="Battery Energy Storage System" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-bessify-green-600/30 to-bessify-blue-600/30"></div>
              </div>
              
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-6 md:translate-x-20">
                <div className="bg-white shadow-lg border rounded-lg p-4 w-48 md:w-64">
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 rounded-full bg-bessify-green-500 mr-1"></div>
                    <span className="text-sm text-gray-600 font-medium">Energy Output</span>
                  </div>
                  <div className="h-24 flex items-end justify-between space-x-2">
                    {[70, 80, 65, 90, 85, 95, 75].map((height, i) => (
                      <div key={i} 
                        className="w-5 md:w-6 bg-gradient-to-t from-bessify-green-600 to-bessify-green-400 rounded-md" 
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-6 md:-translate-x-12">
                <div className="bg-white shadow-lg border rounded-lg p-4 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full h-12 w-12 bg-bessify-green-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-bessify-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Grid Stabilization</p>
                      <p className="text-sm text-gray-500">Frequency regulation active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
