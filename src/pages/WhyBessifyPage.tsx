
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Shield, 
  Snowflake, 
  Zap, 
  Robot, 
  Layers, 
  Settings, 
  Battery
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyBessifyPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bessify-green-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Wrench className="w-16 h-16 mx-auto mb-6 text-bessify-green-600" />
              <h1 className="mb-6 text-gray-900">Why <span className="gradient-text">Bessify</span></h1>
              <p className="text-xl text-gray-600 mb-8">
                Engineering the Future of Battery Storage
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                At Bessify, we've reimagined battery energy storage from the ground up — not by tweaking what exists, but by starting fresh. Our approach integrates hardware, software, safety, and manufacturing into a fully unified system, designed for a new generation of scalable, cost-efficient, and future-proof energy infrastructure.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe innovation isn't just about features — it's about building smarter systems that are easier to manufacture, safer to operate, and more valuable over time. Here's how we're doing that:
              </p>
            </div>
          </div>
        </section>

        {/* Innovations Section */}
        <section className="py-16 bg-bessify-green-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Innovation 1 */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Settings className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">1. Single Monoblock Battery Design</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Traditional modular battery systems introduce risks like chemical imbalance and uneven thermal performance. Bessify eliminates this by using a streamlined monoblock architecture:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Reduces wiring complexity and failure points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Ensures consistent chemistry throughout the pack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Enables cell-level quality control for EU compliance and long-term reliability</span>
                  </li>
                </ul>
              </div>

              {/* Innovation 2 */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Shield className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">2. Smart, Custom-Built Enclosure</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Our enclosure is more than a box — it's a safety and efficiency powerhouse:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Built in-house for precision and adaptability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>No side doors, maximizing MW per m² on-site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Supports full automation and arrives fully assembled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Uses recyclable materials to meet long-term sustainability goals</span>
                  </li>
                </ul>
              </div>

              {/* Innovation 3 */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Snowflake className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">3. Advanced Thermal Management</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We use air, not liquids — reducing fire risks and maintenance demands:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Uniform airflow design eliminates hotspots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Real-time temperature control and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Minimizes thermal stress, extending battery life and uptime</span>
                  </li>
                </ul>
              </div>

              {/* Innovation 4 */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Shield className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">4. Targeted Water Suppression System</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Forget "let it burn." In case of thermal runaway:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Only the battery compartment floods — not the whole unit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Neutralizes toxic gas release, protects adjacent systems, and is safe for responders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Critical components can be reused in new enclosures, lowering costs</span>
                  </li>
                </ul>
              </div>

              {/* Innovation 5 */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Battery className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">5. Custom Inverter & Power Room Design</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Most BESS companies buy off-the-shelf inverters — not Bessify:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>In-house inverter design ensures tight integration and better energy conversion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Power room is fireproof, EMC-certified, and optimized for future cost shifts (as battery prices drop and power electronics grow in value)</span>
                  </li>
                </ul>
              </div>

              {/* Innovation 6 */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Zap className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">6. Multi-Duration, Multi-Inverter Architecture</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Our BESS can operate across 1–4 hour durations, dynamically adapting to project needs:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Four inverters per 4MWh unit = built-in redundancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Supports fast-response market shifts (e.g. "duck curve" events)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Enables flexible discharge profiles for a range of energy markets</span>
                  </li>
                </ul>
              </div>

              {/* Innovation 7 */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Robot className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">7. Fully Automated, Scalable Manufacturing</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We've designed our entire production process for efficiency and scale:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Enclosures and internals are built for robotic assembly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Optimized for cost-effective, high-volume production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Modular and adaptable for different scales and geographies</span>
                  </li>
                </ul>
              </div>

              {/* Innovation 8 */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-bessify-green-100 p-4 mr-4">
                    <Layers className="h-8 w-8 text-bessify-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">8. Integrated Software & SaaS</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Performance doesn't end at the hardware. Our optimization layer includes:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Performance-linked SaaS model tied to real system outputs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Initial rollout via white-labeled software, with potential for full in-house development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bessify-green-600 font-bold mr-2">•</span>
                    <span>Unified experience for monitoring, diagnostics, and control across hardware and software</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your <span className="gradient-text">Energy Future?</span></h2>
              <p className="text-lg text-gray-700 mb-8">
                Learn how our innovative BESS solutions can help your organization achieve its energy goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-bessify-green-600 hover:bg-bessify-green-700">
                    Explore Our Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-bessify-green-600 text-bessify-green-600 hover:bg-bessify-green-50">
                    Contact Our Experts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyBessifyPage;
