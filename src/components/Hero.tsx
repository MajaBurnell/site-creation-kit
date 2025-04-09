
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 xl:gap-20 md:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                New feature: Advanced AI Integration
              </span>
              <h1 className="mb-4 text-navy-950">
                Elevate Your Digital <span className="gradient-text">Presence</span> With Stunning Websites
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Create beautiful, responsive websites with our intuitive platform. No coding required.
                Get started in minutes and watch your ideas come to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto" size="lg">
                  Get started for free
                </Button>
                <Button variant="outline" className="w-full sm:w-auto group" size="lg">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-5">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                        alt="User" 
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>4.9/5 rating</span>
                  </div>
                  <span className="text-xs text-gray-500">from over 2,000 reviews</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl shadow-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop"
                  alt="Web development" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30"></div>
              </div>
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-20">
                <div className="bg-white shadow-lg border rounded-lg p-4 w-64">
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                    <span className="text-sm text-gray-600 font-medium">Website Analytics</span>
                  </div>
                  <div className="h-24 flex items-end justify-between space-x-2">
                    {[30, 60, 45, 80, 65, 75, 50].map((height, i) => (
                      <div key={i} className="w-6 bg-gradient-to-t from-blue-500 to-blue-300 rounded-md" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
                <div className="bg-white shadow-lg border rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full h-12 w-12 bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">New website launched!</p>
                      <p className="text-sm text-gray-500">Just now</p>
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
