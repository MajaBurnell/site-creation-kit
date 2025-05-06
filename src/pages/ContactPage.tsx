import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect } from "react";


const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bessify-green-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-gray-900">
                Company <span className="gradient-text">Details</span>
              </h1>
              <p className="text-xl text-gray-600">
                Get in touch or visit us at our headquarters in Estonia.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              <div className="rounded-2xl overflow-hidden h-64 md:h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2344.6065366349895!2d24.836354!3d59.3542181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692e212c62d6be3%3A0x3e04015ebc23fbbc!2sRingi%20tee%2013%2C%2075301%20J%C3%BCri%2C%20Harju%20maakond%2C%20Estonia!5e0!3m2!1sen!2see!4v1715000000000"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bessify Location"
                ></iframe>
              </div>

              <div className="bg-bessify-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Company Details</h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                      <MapPin className="h-6 w-6 text-bessify-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-gray-600">
                        Ringi tee 13<br />
                        75301 Jüri, Rae vald<br />
                        Harju maakond, Estonia
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                      <Phone className="h-6 w-6 text-bessify-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Mobile Phone</h4>
                      <p className="text-gray-600">+372 55569166</p>
                      <p className="text-gray-600">+44  7717333111</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                      <Mail className="h-6 w-6 text-bessify-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">info@bessify.com</p>
                    </div>
                  </div>
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

export default ContactPage;
