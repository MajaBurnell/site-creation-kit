import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Battery, 
  Zap, 
  Building2, 
  Home, 
  Factory, 
  ArrowRight, 
  Check,
  Building,
  Download,
  BarChart3
} from "lucide-react";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Product category definitions
const productCategories = [
  {
    id: "residential",
    name: "Residential",
    icon: <Home className="w-5 h-5" />,
    description: "Energy storage solutions for homes"
  },
  {
    id: "commercial",
    name: "Commercial",
    icon: <Building2 className="w-5 h-5" />,
    description: "Medium-scale systems for businesses"
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: <Factory className="w-5 h-5" />,
    description: "Large-scale energy storage for industrial applications"
  },
  {
    id: "utility",
    name: "Utility",
    icon: <Building className="w-5 h-5" />,
    description: "Grid-scale solutions for energy providers"
  }
];

// Product definitions
const products = {
  residential: [
    {
      id: "bess-home-compact",
      name: "BESS Home Compact",
      image: "https://images.unsplash.com/photo-1560170412-0f11dc121318?q=80&w=2148&auto=format&fit=crop",
      capacity: "10 kWh",
      power: "5 kW",
      dimensions: "650 × 450 × 200 mm",
      warranty: "10 years",
      description: "Perfect for small to medium homes looking to reduce energy bills and provide backup power during outages.",
      features: [
        "Wall-mounted design saves space",
        "Seamless integration with solar panels",
        "Smartphone app for monitoring and control",
        "Quiet operation (<35dB)",
        "Indoor or outdoor installation"
      ],
      price: "From $5,999"
    },
    {
      id: "bess-home-plus",
      name: "BESS Home Plus",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
      capacity: "15 kWh (expandable to 30 kWh)",
      power: "7.5 kW",
      dimensions: "950 × 500 × 250 mm",
      warranty: "12 years",
      description: "A flexible solution for larger homes with higher energy demands or those looking to maximize solar self-consumption.",
      features: [
        "Modular design allows for capacity expansion",
        "Whole-home backup capability",
        "Advanced energy management system",
        "Remote diagnostics and updates",
        "Compatible with all major solar inverters"
      ],
      price: "From $8,499"
    }
  ],
  commercial: [
    {
      id: "bess-business",
      name: "BESS Business",
      image: "https://images.unsplash.com/photo-1497618891100-ac2f06bef939?q=80&w=2070&auto=format&fit=crop",
      capacity: "50 kWh (modular)",
      power: "25 kW",
      dimensions: "Rack mounted, 42U cabinet",
      warranty: "10 years",
      description: "Designed for small to medium businesses seeking to reduce demand charges and enhance energy resilience.",
      features: [
        "Peak shaving capability",
        "Demand charge reduction",
        "Emergency backup for critical systems",
        "Scalable from 50 kWh to 200 kWh",
        "Multi-level safety systems"
      ],
      price: "From $25,000"
    },
    {
      id: "bess-commercial-pro",
      name: "BESS Commercial Pro",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
      capacity: "100 kWh - 500 kWh",
      power: "50 kW - 250 kW",
      dimensions: "Custom installation",
      warranty: "15 years available",
      description: "Enterprise-grade energy storage for large commercial facilities with substantial power requirements.",
      features: [
        "Revenue generation through grid services",
        "Advanced energy trading capabilities",
        "Microgrid functionality",
        "Integrated EMS (Energy Management System)",
        "24/7 monitoring and technical support"
      ],
      price: "Custom pricing"
    }
  ],
  industrial: [
    {
      id: "bess-industrial",
      name: "BESS Industrial",
      image: "https://images.unsplash.com/photo-1517482359597-b3f5ba0d52ce?q=80&w=2070&auto=format&fit=crop",
      capacity: "500 kWh - 2 MWh",
      power: "250 kW - 1 MW",
      dimensions: "Container-based solution",
      warranty: "15 years with service plan",
      description: "High-capacity energy storage for manufacturing facilities, data centers, and other industrial applications.",
      features: [
        "Frequency regulation capability",
        "Black start functionality",
        "Advanced thermal management",
        "Customizable power-to-energy ratio",
        "Integrated fire suppression"
      ],
      price: "Custom pricing"
    },
    {
      id: "bess-industrial-max",
      name: "BESS Industrial Max",
      image: "https://images.unsplash.com/photo-1484712401471-05c7215830eb?q=80&w=2070&auto=format&fit=crop",
      capacity: "1 MWh - 5 MWh",
      power: "500 kW - 2.5 MW",
      dimensions: "Multiple container configuration",
      warranty: "Up to 20 years available",
      description: "Our most powerful industrial solution, designed for heavy industrial applications with massive energy demands.",
      features: [
        "Multi-container scalable architecture",
        "Full microgrid capability",
        "Grid-independent operation mode",
        "Redundant safety systems",
        "Turnkey installation and commissioning"
      ],
      price: "Custom pricing"
    }
  ],
  utility: [
    {
      id: "bess-grid",
      name: "BESS Grid",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
      capacity: "5 MWh - 100 MWh",
      power: "1 MW - 50 MW",
      dimensions: "Custom utility installation",
      warranty: "Performance guarantees available",
      description: "Grid-scale energy storage solution for utilities seeking to enhance grid stability and integrate renewable energy sources.",
      features: [
        "Ancillary services capability",
        "Renewable energy time-shifting",
        "Transmission and distribution deferral",
        "Congestion relief",
        "Fully customizable configuration"
      ],
      price: "Project-based pricing"
    }
  ]
};

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("residential");
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bessify-green-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Battery className="w-16 h-16 mx-auto mb-6 text-bessify-green-600" />
              <h1 className="mb-6 text-gray-900">BESS <span className="gradient-text">Solutions</span></h1>
              <p className="text-xl text-gray-600 mb-8">
                Advanced Battery Energy Storage Systems designed for every scale - from homes to utility grids.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-bessify-green-600 hover:bg-bessify-green-700" size="lg">
                  Request a Quote
                </Button>
                <Button variant="outline" className="border-bessify-green-600 text-bessify-green-600 hover:bg-bessify-green-50" size="lg">
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container">
            <Tabs defaultValue="residential" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-center mb-8">Choose Your <span className="gradient-text">BESS Solution</span></h2>
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                  {productCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id}
                      value={category.id}
                      className="flex flex-col items-center py-4 data-[state=active]:bg-bessify-green-100 data-[state=active]:text-bessify-green-800"
                    >
                      <div className="h-12 w-12 rounded-full bg-bessify-green-50 flex items-center justify-center mb-2 data-[state=active]:bg-bessify-green-200">
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.name}</span>
                      <span className="text-xs text-gray-500">{category.description}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {Object.keys(products).map((category) => (
                <TabsContent key={category} value={category} className="mt-0 animate-in fade-in-50">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                    {products[category].map((product) => (
                      <div key={product.id} className="flex flex-col">
                        <div className="h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="bg-gray-50 p-3 rounded-md text-center">
                            <div className="text-xs text-gray-500">Capacity</div>
                            <div className="font-semibold">{product.capacity}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-md text-center">
                            <div className="text-xs text-gray-500">Power</div>
                            <div className="font-semibold">{product.power}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-md text-center">
                            <div className="text-xs text-gray-500">Warranty</div>
                            <div className="font-semibold">{product.warranty}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-md text-center">
                            <div className="text-xs text-gray-500">Price</div>
                            <div className="font-semibold">{product.price}</div>
                          </div>
                        </div>
                        
                        <h4 className="font-medium mb-3">Key Features:</h4>
                        <ul className="space-y-2 mb-6">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 mr-2 text-bessify-green-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
                          <Button className="bg-bessify-green-600 hover:bg-bessify-green-700">
                            Request Quote
                          </Button>
                          <Button variant="outline" className="border-bessify-green-600 text-bessify-green-600 hover:bg-bessify-green-50">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-bessify-green-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 text-gray-900">
                BESS <span className="gradient-text">Applications</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our battery energy storage systems can be deployed across multiple applications to provide value and enhance energy resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-bessify-green-600" />,
                  title: "Peak Shaving",
                  description: "Reduce demand charges by using stored energy during peak consumption periods, lowering your electricity bills."
                },
                {
                  icon: <BarChart3 className="w-10 h-10 text-bessify-green-600" />,
                  title: "Load Shifting",
                  description: "Store energy during low-cost periods and use it during high-cost periods to optimize energy expenses."
                },
                {
                  icon: <Battery className="w-10 h-10 text-bessify-green-600" />,
                  title: "Backup Power",
                  description: "Ensure continuous operation during grid outages, protecting critical operations and providing peace of mind."
                },
                {
                  icon: <Building className="w-10 h-10 text-bessify-green-600" />,
                  title: "Microgrids",
                  description: "Create self-sufficient energy systems that can operate independently from the main grid when necessary."
                },
                {
                  icon: <Factory className="w-10 h-10 text-bessify-green-600" />,
                  title: "Renewable Integration",
                  description: "Smooth out the intermittent nature of renewable energy sources like solar and wind for reliable power."
                },
                {
                  icon: <Building2 className="w-10 h-10 text-bessify-green-600" />,
                  title: "Frequency Regulation",
                  description: "Provide grid services by helping to maintain the balance between electricity supply and demand."
                }
              ].map((app, index) => (
                <div key={index} className="bessify-card">
                  <div className="bessify-icon-container">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="bg-bessify-blue-900 text-white rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Future?</h2>
                  <p className="text-lg text-bessify-blue-100 mb-8">
                    Our team of energy experts is ready to help you find the perfect BESS solution for your specific needs. Get in touch today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-bessify-green-600 hover:bg-bessify-green-700 text-white" size="lg">
                      Schedule a Consultation
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                      View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block relative">
                  <img 
                    src="https://images.unsplash.com/photo-1548693706-2ef380cb3f5f?q=80&w=2070&auto=format&fit=crop"
                    alt="Bessify BESS installation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bessify-blue-900/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
