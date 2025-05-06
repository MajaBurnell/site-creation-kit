
import { 
  Battery, 
  BarChart3, 
  Zap, 
  Cpu, 
  Snowflake
} from "lucide-react";

const features = [
  {
    icon: <Battery className="w-10 h-10 text-bessify-green-600" />,
    title: "Scalable BESS Architecture",
    description: "A flexible, containerised energy storage solution designed to scale with project needs"
  },
  {
    icon: <Zap className="w-10 h-10 text-bessify-green-600" />,
    title: "High-Efficiency Power Components",
    description: "Custom-designed inverters, switchgear, and BMS deliver peak performance and unmatched safety"
  },
  {
    icon: <Cpu className="w-10 h-10 text-bessify-green-600" />,
    title: "Smart System Software",
    description: "Proprietary OS and SCADA enable real-time control, monitoring and remote diagnostics"
  },
  {
    icon: <Snowflake className="w-10 h-10 text-bessify-green-600" />,
    title: "Advanced Cooling & Safety",
    description: "Air-cooled and multi-stage thermal protection systems keep performance safe and stable"
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
