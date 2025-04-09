
import { 
  Battery, 
  BarChart3, 
  Zap, 
  Cpu, 
  Shield, 
  Globe,
  LightbulbOff,
  Leaf
} from "lucide-react";

const features = [
  {
    icon: <Battery className="w-10 h-10 text-bessify-green-600" />,
    title: "High-Capacity Storage",
    description: "Our BESS systems deliver industry-leading energy storage capacity with compact design and long cycle life."
  },
  {
    icon: <Zap className="w-10 h-10 text-bessify-green-600" />,
    title: "Rapid Response",
    description: "Millisecond response times ensure immediate power delivery when you need it most, perfect for grid stabilization."
  },
  {
    icon: <Cpu className="w-10 h-10 text-bessify-green-600" />,
    title: "Smart Management",
    description: "Advanced battery management system optimizes charging cycles and extends the lifespan of your investment."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-bessify-green-600" />,
    title: "Energy Analytics",
    description: "Comprehensive monitoring and reporting tools help you track performance and maximize your energy efficiency."
  },
  {
    icon: <Shield className="w-10 h-10 text-bessify-green-600" />,
    title: "Safety First Design",
    description: "Multiple layers of protection with thermal management and advanced fire suppression systems."
  },
  {
    icon: <LightbulbOff className="w-10 h-10 text-bessify-green-600" />,
    title: "Blackout Protection",
    description: "Ensure continuous operation during power outages with our reliable backup systems."
  },
  {
    icon: <Leaf className="w-10 h-10 text-bessify-green-600" />,
    title: "Eco-Friendly",
    description: "Designed with sustainability in mind, our systems help reduce carbon emissions and support clean energy transition."
  },
  {
    icon: <Globe className="w-10 h-10 text-bessify-green-600" />,
    title: "Scalable Solutions",
    description: "From residential to utility-scale, our modular design allows your energy storage to grow with your needs."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-bessify-green-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="mb-4 text-gray-900">
            Advanced <span className="gradient-text">BESS Solutions</span> for Sustainable Energy
          </h2>
          <p className="text-lg text-gray-600">
            Our Battery Energy Storage Systems provide cutting-edge technology for reliable, sustainable energy management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bessify-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bessify-icon-container">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
