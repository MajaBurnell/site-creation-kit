
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
                <Sparkles className="w-3 h-3" /> To be done
              </span>
              <h1 className="mb-4 text-gray-900">
                Powering a <span className="gradient-text">Sustainable</span> Future with Energy Storage
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                To be done
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto bg-bessify-green-600 hover:bg-bessify-green-700" size="lg">
                  To be done
                </Button>
                <Button variant="outline" className="w-full sm:w-auto group border-bessify-green-600 text-bessify-green-600 hover:bg-bessify-green-50" size="lg">
                  To be done
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Battery className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">To be done</span>
                  <span className="text-xs text-center text-gray-500">To be done</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Bolt className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">To be done</span>
                  <span className="text-xs text-center text-gray-500">To be done</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Leaf className="h-8 w-8 text-bessify-green-600 mb-2" />
                  <span className="text-xl font-bold">To be done</span>
                  <span className="text-xs text-center text-gray-500">To be done</span>
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
