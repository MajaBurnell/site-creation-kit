
import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, Sparkles, Leaf, Bolt, Layers, Settings2, Cpu, PiggyBank, Wallet, Wallet2, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white to-bessify-green-50">
      <div className="container">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 xl:gap-20 md:items-center">
            <div className="animate-on-scroll">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-bessify-green-100 text-bessify-green-800 mb-4">
                <Sparkles className="w-3 h-3" /> Innovative Energy Solutions
              </span>
              <h1 className="mb-4 text-gray-900">
                Powering a <span className="gradient-text">Sustainable</span> Future with Energy Storage
              </h1>
              <p className="text-lg text-gray-600 mb-8">
              Bessify designs and manufactures next-generation battery systems with a scalable architecture — efficient, safe, and built in Europe
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to='/how-it-works'>
                  <Button className="w-full sm:w-auto bg-bessify-green-600 hover:bg-bessify-green-700" size="lg">
                    What is BESS?
                  </Button>
                </Link>

                <Link to="/why-bessify">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto group border-bessify-green-600 text-bessify-green-600 hover:bg-bessify-green-50"
                    size="lg"
                  >
                    Why Bessify?
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Layers className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">Scalability</span>
                  <span className="text-xs text-center text-gray-500">Design a scalable Battery Energy Storage System </span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Settings2 className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">Automation</span>
                  <span className="text-xs text-center text-gray-500">Ensure fully automated manufacturing capabilities</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Euro className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">Economical</span>
                  <span className="text-xs text-center text-gray-500">Maintain cost efficiency</span>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="aspect-square bg-gradient-to-tr from-bessify-green-600 to-bessify-blue-600 rounded-xl shadow-2xl overflow-hidden relative">
                <div className="flex items-center justify-center w-full h-full text-white text-xl font-bold">
                  Placeholder Image
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
