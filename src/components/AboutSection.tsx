
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy-50">
      <div className="container">
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="mb-4 text-navy-950">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be done
              </p>
              <p className="text-lg text-gray-600 mb-6">
                To be done
              </p>
              <Button size="lg">To be done</Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-tr from-bessify-green-600 to-bessify-blue-600 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-white text-xl font-bold">
                  Placeholder Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
