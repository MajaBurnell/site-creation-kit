
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
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=3270&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-bold">To be done</span>
                </div>
                <ul className="text-sm">
                  <li className="mb-1">• To be done</li>
                  <li className="mb-1">• To be done</li>
                  <li>• To be done</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
