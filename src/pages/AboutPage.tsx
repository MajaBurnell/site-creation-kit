
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Battery, Award, Users, Lightbulb, ChartBar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const milestones = [
    {
      year: "2022",
      title: "R&D Initiated",
      description: "Initiated research into BESS technology to pioneer next-generation energy storage solutions."
    },
    {
      year: "2022–2023",
      title: "Custom System Design",
      description: "Identified the need for bespoke inverters and battery modules; began in-house hardware design focused on manufacturability."
    },
    {
      year: "2023",
      title: "Software & Hardware Control",
      description: "Committed to complete in-house control of all software systems and custom-built hardware for operational precision."
    },
    {
      year: "2023",
      title: "Global Sourcing Strategy",
      description: "Temporarily sourced battery cells from Asia while developing plans for local partnerships to support future scalability."
    },
    {
      year: "2024 Q1",
      title: "Prototype Success",
      description: "Built and tested an 11kW prototype system that exceeded performance expectations, validating the BESS concept."
    },
    {
      year: "2024 Q2",
      title: "Scale-Up to 1.2MWh",
      description: "Proceeded directly to a 1.2 MWh grid-scale system based on successful prototype results and operational readiness."
    }
  ];
  

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bessify-green-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Battery className="w-16 h-16 mx-auto mb-6 text-bessify-green-600" />
              <h1 className="mb-6 text-gray-900">About <span className="gradient-text">Bessify</span></h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to accelerate the global transition to sustainable energy through innovative battery storage solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="mb-6 text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                Bessify OÜ is a pioneering Estonian startup at the forefront of designing and manufacturing
                grid-sized Battery Energy Storage Systems (BESS). Our approach integrates holistic design principles
                with a highly vertical manufacturing process. Our operations are rooted in Tallinn, Estonia,
                where we engage in both research & development and manufacturing. As we expand,
                our vision is to scale these activities across multiple European locations, enhancing our capacity to support
                 the continent's energy transition.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                Central to our mission is the commitment to local sourcing and manufacturing. We prioritize the use of recycled 
                materials and strive to keep our supply chain as close to home as possible. While renewable sectors like wind, 
                hydro, and solar have historically received governmental support, battery storage has not — making our mission clear:
                to deliver solutions that are not only sustainable but economically viable.
      
                </p>
                <p className="text-lg text-gray-600">
                <strong>Our mission:</strong> Design cutting-edge storage systems which are leading in efficiency and functionality while setting a new benchmark for price per MW — all while using the most sustainable technologies and methodologies.
                
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497440001374-f10ef3dea18f?q=80&w=2068&auto=format&fit=crop"
                  alt="Bessify team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-bessify-green-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 text-gray-900">Our <span className="gradient-text">Values</span></h2>
              <p className="text-lg text-gray-600">
                These core principles guide our work and shape our approach to creating sustainable energy solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bessify-card flex flex-col items-center text-center">
                <div className="bessify-icon-container">
                  <Lightbulb className="w-8 h-8 text-bessify-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">We push the boundaries of what's possible in energy storage technology.</p>
              </div>
              
              <div className="bessify-card flex flex-col items-center text-center">
                <div className="bessify-icon-container">
                  <Target className="w-8 h-8 text-bessify-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">Environmental responsibility is at the core of everything we do.</p>
              </div>
              
              <div className="bessify-card flex flex-col items-center text-center">
                <div className="bessify-icon-container">
                  <Award className="w-8 h-8 text-bessify-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">We're committed to the highest standards of quality and performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 bg-bessify-green-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 text-gray-900">Our <span className="gradient-text">Journey</span></h2>
              <p className="text-lg text-gray-600">
                Key milestones in Bessify's growth and impact on the energy landscape.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bessify-green-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="md:w-1/2 flex justify-center">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 md:max-w-md">
                        <div className="flex items-center mb-3">
                          <span className="text-xl font-bold text-bessify-green-600 mr-2">{milestone.year}</span>
                          <div className="h-px bg-bessify-green-200 flex-grow"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-bessify-green-500 hidden md:block"></div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default AboutPage;
