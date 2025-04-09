
import { 
  Code, 
  LineChart, 
  Smartphone, 
  Zap, 
  Shield, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-10 h-10 text-blue-500" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance. Your websites load in milliseconds, not seconds."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-500" />,
    title: "Fully Responsive",
    description: "Designs that look perfect on every device, from desktop monitors to mobile phones."
  },
  {
    icon: <Code className="w-10 h-10 text-blue-500" />,
    title: "No Coding Required",
    description: "Our visual builder makes it easy for anyone to create professional websites without code."
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-500" />,
    title: "Built-in Analytics",
    description: "Understand your visitors with comprehensive analytics and insights."
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-500" />,
    title: "Rock Solid Security",
    description: "Enterprise-grade security to keep your website and data protected."
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global CDN",
    description: "Content delivery network ensures fast loading times worldwide."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-navy-950">
            Powerful Features That <span className="gradient-text">Set Us Apart</span>
          </h2>
          <p className="text-lg text-gray-600">
            Build websites that stand out with our comprehensive set of features designed to give you the edge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center">
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
