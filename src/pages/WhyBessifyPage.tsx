
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Wrench, 
  Shield, 
  Snowflake, 
  Zap, 
  Bolt, 
  Layers, 
  Settings, 
  Battery,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

interface InnovationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  index: number;
}

const InnovationCard = ({ icon, title, description, benefits, index }: InnovationCardProps) => {
  return (
    <motion.div 
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-bessify-green-100 hover:border-bessify-green-300">
        <CardHeader className="pb-2">
          <div className="rounded-full bg-bessify-green-100 w-16 h-16 flex items-center justify-center mb-4">
            {icon}
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-gray-700 mb-4">
            {description}
          </p>
          <ul className="space-y-2 pl-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <span className="text-bessify-green-600 mr-2">
                  <ChevronRight className="h-5 w-5" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const WhyBessifyPage = () => {
  const innovations = [
    {
      icon: <Settings className="h-8 w-8 text-bessify-green-600" />,
      title: "Single Monoblock Battery Design",
      description: "Traditional modular battery systems introduce risks like chemical imbalance and uneven thermal performance. Bessify eliminates this by using a streamlined monoblock architecture:",
      benefits: [
        "Reduces wiring complexity and failure points",
        "Ensures consistent chemistry throughout the pack",
        "Enables cell-level quality control for EU compliance and long-term reliability"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-bessify-green-600" />,
      title: "Smart, Custom-Built Enclosure",
      description: "Our enclosure is more than a box — it's a safety and efficiency powerhouse:",
      benefits: [
        "Built in-house for precision and adaptability",
        "No side doors, maximizing MW per m² on-site",
        "Supports full automation and arrives fully assembled",
        "Uses recyclable materials to meet long-term sustainability goals"
      ]
    },
    {
      icon: <Snowflake className="h-8 w-8 text-bessify-green-600" />,
      title: "Advanced Thermal Management",
      description: "We use air, not liquids — reducing fire risks and maintenance demands:",
      benefits: [
        "Uniform airflow design eliminates hotspots",
        "Real-time temperature control and monitoring",
        "Minimizes thermal stress, extending battery life and uptime"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-bessify-green-600" />,
      title: "Targeted Water Suppression System",
      description: "Forget \"let it burn.\" In case of thermal runaway:",
      benefits: [
        "Only the battery compartment floods — not the whole unit",
        "Neutralizes toxic gas release, protects adjacent systems, and is safe for responders",
        "Critical components can be reused in new enclosures, lowering costs"
      ]
    },
    {
      icon: <Battery className="h-8 w-8 text-bessify-green-600" />,
      title: "Custom Inverter & Power Room Design",
      description: "Most BESS companies buy off-the-shelf inverters — not Bessify:",
      benefits: [
        "In-house inverter design ensures tight integration and better energy conversion",
        "Power room is fireproof, EMC-certified, and optimized for future cost shifts"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-bessify-green-600" />,
      title: "Multi-Duration, Multi-Inverter Architecture",
      description: "Our BESS can operate across 1–4 hour durations, dynamically adapting to project needs:",
      benefits: [
        "Four inverters per 4MWh unit = built-in redundancy",
        "Supports fast-response market shifts (e.g. \"duck curve\" events)",
        "Enables flexible discharge profiles for a range of energy markets"
      ]
    },
    {
      icon: <Bolt className="h-8 w-8 text-bessify-green-600" />,
      title: "Fully Automated, Scalable Manufacturing",
      description: "We've designed our entire production process for efficiency and scale:",
      benefits: [
        "Enclosures and internals are built for robotic assembly",
        "Optimized for cost-effective, high-volume production",
        "Modular and adaptable for different scales and geographies"
      ]
    },
    {
      icon: <Layers className="h-8 w-8 text-bessify-green-600" />,
      title: "Integrated Software & SaaS",
      description: "Performance doesn't end at the hardware. Our optimization layer includes:",
      benefits: [
        "Performance-linked SaaS model tied to real system outputs",
        "Initial rollout via white-labeled software, with potential for full in-house development",
        "Unified experience for monitoring, diagnostics, and control across hardware and software"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section with Gradient Background */}
        <section className="py-24 bg-gradient-to-b from-bessify-green-50 via-white to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center p-2 bg-bessify-green-100 rounded-full mb-6">
                <Wrench className="w-10 h-10 text-bessify-green-600" />
              </div>
              <h1 className="mb-6 text-gray-900">
                Why <span className="gradient-text">Bessify</span> Leads The Industry
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section with Image and Text Side by Side */}
        <section className="py-16 bg-white relative">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side - Image */}
                <div className="rounded-lg overflow-hidden shadow-md">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/placeholder.svg" 
                      alt="Battery energy storage system" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                
                {/* Right side - Text */}
                <div className="bg-gradient-to-r from-bessify-green-50 to-bessify-blue-50 p-8 rounded-2xl shadow-sm">
                  <h2 className="text-3xl font-bold mb-6">Reimagining Battery Energy Storage</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    At Bessify, we've reimagined battery energy storage from the ground up — not by tweaking what exists, but by starting fresh. Our approach integrates hardware, software, safety, and manufacturing into a fully unified system, designed for a new generation of scalable, cost-efficient, and future-proof energy infrastructure.
                  </p>
                  <p className="text-lg text-gray-700">
                    We believe innovation isn't just about features — it's about building smarter systems that are easier to manufacture, safer to operate, and more valuable over time. Here's how we're doing that:
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Innovations Section with Card Grid */}
        <section className="py-16 bg-bessify-green-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Innovations</h2>
              <div className="w-24 h-1 bg-bessify-green-600 mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {innovations.map((innovation, index) => (
                <InnovationCard 
                  key={index}
                  icon={innovation.icon}
                  title={innovation.title}
                  description={innovation.description}
                  benefits={innovation.benefits}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient Background */}
        <section className="py-20 bg-gradient-to-r from-bessify-green-600 to-bessify-blue-600 text-white">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Energy Future?</h2>
              <p className="text-xl mb-8">
                Learn how our innovative BESS solutions can help your organization achieve its energy goals.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default WhyBessifyPage;
