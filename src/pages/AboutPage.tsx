
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Battery, Award, Users, Lightbulb, ChartBar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: "Former energy grid specialist with 15+ years of experience in renewable energy systems."
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      bio: "Electrical engineer specializing in advanced battery technology and energy management systems."
    },
    {
      name: "Aisha Patel",
      role: "VP of Operations",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "Supply chain expert focused on sustainable manufacturing and operational efficiency."
    },
    {
      name: "James Wilson",
      role: "Chief Sustainability Officer",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      bio: "Environmental scientist passionate about renewable energy adoption and carbon reduction."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Bessify was established with a mission to accelerate sustainable energy adoption."
    },
    {
      year: "2019",
      title: "First BESS Prototype",
      description: "Developed our first 250kW battery energy storage system prototype."
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "Secured $12M in funding to scale production and expand R&D efforts."
    },
    {
      year: "2021",
      title: "Commercial Launch",
      description: "Released first commercial BESS product line for industrial applications."
    },
    {
      year: "2022",
      title: "Utility Partnerships",
      description: "Formed key partnerships with 5 major utility companies for grid-scale projects."
    },
    {
      year: "2023",
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to serve growing global demand."
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
                  Founded in 2018 by a team of engineers and clean energy enthusiasts, Bessify emerged from a shared vision: to create battery technology that makes renewable energy more reliable, efficient, and accessible.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What began as a small R&D project in a university lab has grown into a leading provider of Battery Energy Storage Systems (BESS) serving customers across industrial, commercial, and utility sectors.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're proud to be at the forefront of the energy transition, with over 100MW of installed capacity helping to balance grids, integrate renewables, and reduce carbon emissions worldwide.
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

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 text-gray-900">Our <span className="gradient-text">Team</span></h2>
              <p className="text-lg text-gray-600">
                Meet the passionate experts leading our mission to transform energy storage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bessify-card overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover object-center rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-bessify-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
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

        {/* CTA Section */}
        <section className="py-20 bg-bessify-blue-900 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="mb-6">Join Our Mission for a <span className="text-bessify-green-400">Sustainable Future</span></h2>
              <p className="text-xl mb-8 text-bessify-blue-100">
                We're looking for talented individuals passionate about clean energy to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-bessify-green-600 hover:bg-bessify-green-700 text-white" size="lg">
                  View Open Positions
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
