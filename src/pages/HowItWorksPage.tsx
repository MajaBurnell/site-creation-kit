
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Battery, Bolt, Lightbulb, Zap, Sun, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bessify-green-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Battery className="w-16 h-16 mx-auto mb-6 text-bessify-green-600" />
              <h1 className="mb-6 text-gray-900">How <span className="gradient-text">BESS</span> Works</h1>
              <p className="text-xl text-gray-600 mb-8">
                Understanding Battery Energy Storage Systems and their crucial role in our sustainable energy future.
              </p>
            </div>
          </div>
        </section>

        {/* What is BESS Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-gray-900">What is a BESS?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  A Battery Energy Storage System (BESS) is an advanced technology solution that captures electricity, stores it in specialized high-capacity batteries, and delivers that power when needed most.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  BESS systems act as energy reservoirs, enabling users to store electricity when it's abundant or inexpensive and use it during peak demand periods or when renewable sources like solar and wind aren't actively generating.
                </p>
                <p className="text-lg text-gray-600">
                  Modern BESS solutions utilize sophisticated battery chemistry—primarily lithium-ion technology—paired with advanced power electronics and intelligent control systems to provide safe, reliable, and efficient energy management.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-tr from-bessify-green-600 to-bessify-blue-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-xl font-bold">
                    BESS System Diagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How BESS Works Section */}
        <section className="py-16 bg-bessify-green-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 text-gray-900">How <span className="gradient-text">BESS</span> Works</h2>
              <p className="text-lg text-gray-600">
                BESS systems operate through a sophisticated yet straightforward energy management process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-bessify-green-200">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-bessify-green-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-bessify-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">1. Energy Capture</h3>
                  <p className="text-gray-600">
                    The BESS collects electricity from various sources—grid power during off-peak hours, solar panels, wind turbines, or other generation methods. A power conversion system (PCS) converts incoming AC electricity to DC for battery storage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-bessify-green-200">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-bessify-green-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <Battery className="w-8 h-8 text-bessify-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">2. Energy Storage</h3>
                  <p className="text-gray-600">
                    Energy is stored in advanced battery modules—typically lithium-ion cells arranged in scalable configurations. The Battery Management System (BMS) continuously monitors temperature, voltage, and state of charge to ensure safe and efficient operation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-bessify-green-200">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-bessify-green-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <Bolt className="w-8 h-8 text-bessify-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">3. Energy Delivery</h3>
                  <p className="text-gray-600">
                    When electricity is needed, the stored DC power is converted back to AC by the inverter component of the PCS. The system's Energy Management System (EMS) intelligently controls when and how much stored energy to release based on demand patterns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why BESS is Important */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 text-gray-900">Why BESS is <span className="gradient-text">Critical</span></h2>
              <p className="text-lg text-gray-600">
                Battery Energy Storage Systems are becoming essential components of modern energy infrastructure for several key reasons:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex">
                <div className="rounded-full bg-bessify-green-100 p-3 mr-4 h-12 w-12 flex items-center justify-center shrink-0">
                  <Sun className="h-6 w-6 text-bessify-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Renewable Integration</h3>
                  <p className="text-gray-600">
                    BESS solves the intermittency challenge of renewable energy by storing excess solar and wind power for use when these sources aren't producing, making clean energy more reliable and grid-compatible.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="rounded-full bg-bessify-green-100 p-3 mr-4 h-12 w-12 flex items-center justify-center shrink-0">
                  <ChartBar className="h-6 w-6 text-bessify-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Grid Stability</h3>
                  <p className="text-gray-600">
                    BESS provides essential grid services including frequency regulation, voltage support, and peak shaving that maintain electrical system stability and prevent outages during high demand periods.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="rounded-full bg-bessify-green-100 p-3 mr-4 h-12 w-12 flex items-center justify-center shrink-0">
                  <Lightbulb className="h-6 w-6 text-bessify-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Energy Independence</h3>
                  <p className="text-gray-600">
                    For businesses and homeowners, BESS enables greater energy autonomy by reducing reliance on grid power, providing backup during outages, and creating opportunities for participation in energy markets.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="rounded-full bg-bessify-green-100 p-3 mr-4 h-12 w-12 flex items-center justify-center shrink-0">
                  <Bolt className="h-6 w-6 text-bessify-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cost Reduction</h3>
                  <p className="text-gray-600">
                    BESS allows users to purchase electricity when rates are lowest and avoid consumption during peak pricing periods, significantly reducing energy costs over time.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="rounded-full bg-bessify-green-100 p-3 mr-4 h-12 w-12 flex items-center justify-center shrink-0">
                  <Zap className="h-6 w-6 text-bessify-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Carbon Reduction</h3>
                  <p className="text-gray-600">
                    By enabling greater renewable energy adoption and reducing the need for fossil fuel "peaker plants," BESS plays a direct role in decreasing carbon emissions and combating climate change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-bessify-green-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-white">Ready to transform your energy future?</h2>
              <p className="text-xl text-bessify-green-100 mb-8">
                Contact our experts to learn how a Bessify BESS solution can be customized for your specific energy needs.
              </p>
              <Button className="bg-white text-bessify-green-700 hover:bg-bessify-green-50" size="lg">
                Request Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
