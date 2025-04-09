
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Building, 
  Factory, 
  Home,
  Globe,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "residential",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "residential",
      message: ""
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bessify-green-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 text-bessify-green-600" />
              <h1 className="mb-6 text-gray-900">Get in <span className="gradient-text">Touch</span></h1>
              <p className="text-xl text-gray-600 mb-8">
                Have questions about our BESS solutions? Reach out to our team of energy experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and one of our energy specialists will get back to you within 24 hours to discuss your energy storage needs.
                </p>

                {formSubmitted && (
                  <div className="bg-bessify-green-50 border border-bessify-green-200 rounded-lg p-4 mb-8 flex items-start">
                    <CheckCircle className="text-bessify-green-600 h-5 w-5 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-bessify-green-800">Message Sent Successfully!</h4>
                      <p className="text-bessify-green-700">Thank you for reaching out. We'll be in touch shortly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company/Organization</label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">I'm interested in: *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <label className={`flex items-center gap-2 p-3 rounded-md cursor-pointer border ${formData.interest === 'residential' ? 'bg-bessify-green-50 border-bessify-green-200' : 'border-gray-200 hover:bg-gray-50'}`}>
                        <input
                          type="radio"
                          name="interest"
                          value="residential"
                          checked={formData.interest === 'residential'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Home className="h-4 w-4 text-bessify-green-600" />
                        <span className="text-sm">Residential</span>
                      </label>
                      
                      <label className={`flex items-center gap-2 p-3 rounded-md cursor-pointer border ${formData.interest === 'commercial' ? 'bg-bessify-green-50 border-bessify-green-200' : 'border-gray-200 hover:bg-gray-50'}`}>
                        <input
                          type="radio"
                          name="interest"
                          value="commercial"
                          checked={formData.interest === 'commercial'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Building className="h-4 w-4 text-bessify-green-600" />
                        <span className="text-sm">Commercial</span>
                      </label>
                      
                      <label className={`flex items-center gap-2 p-3 rounded-md cursor-pointer border ${formData.interest === 'industrial' ? 'bg-bessify-green-50 border-bessify-green-200' : 'border-gray-200 hover:bg-gray-50'}`}>
                        <input
                          type="radio"
                          name="interest"
                          value="industrial"
                          checked={formData.interest === 'industrial'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Factory className="h-4 w-4 text-bessify-green-600" />
                        <span className="text-sm">Industrial</span>
                      </label>
                      
                      <label className={`flex items-center gap-2 p-3 rounded-md cursor-pointer border ${formData.interest === 'utility' ? 'bg-bessify-green-50 border-bessify-green-200' : 'border-gray-200 hover:bg-gray-50'}`}>
                        <input
                          type="radio"
                          name="interest"
                          value="utility"
                          checked={formData.interest === 'utility'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Globe className="h-4 w-4 text-bessify-green-600" />
                        <span className="text-sm">Utility</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry"
                      required
                      className="min-h-32 border-gray-300"
                    />
                  </div>
                  
                  <Button type="submit" className="bg-bessify-green-600 hover:bg-bessify-green-700">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
              
              <div>
                <div className="rounded-2xl overflow-hidden mb-8 h-64 md:h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937585!2d-122.33401302349232!3d47.615630071828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901532c3d02525%3A0x8aec3192df1b8491!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1712747231209!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bessify Location"
                  ></iframe>
                </div>
                
                <div className="bg-bessify-green-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                        <MapPin className="h-6 w-6 text-bessify-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p className="text-gray-600">
                          123 Energy Park Drive<br />
                          Seattle, WA 98101<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                        <Phone className="h-6 w-6 text-bessify-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p className="text-gray-600">
                          Main: (206) 555-0123<br />
                          Support: (206) 555-0124<br />
                          Toll-free: 1-800-BESSIFY
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                        <Mail className="h-6 w-6 text-bessify-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-gray-600">
                          General Inquiries: info@bessify.com<br />
                          Sales: sales@bessify.com<br />
                          Support: support@bessify.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                        <Clock className="h-6 w-6 text-bessify-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Hours of Operation</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                          Saturday: 9:00 AM - 3:00 PM PST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-bessify-green-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 text-gray-900">Frequently Asked <span className="gradient-text">Questions</span></h2>
              <p className="text-lg text-gray-600">
                Find quick answers to common questions about our BESS solutions and services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "What is a BESS system?",
                  answer: "A Battery Energy Storage System (BESS) stores electrical energy and delivers it when needed. It captures energy from various sources like solar panels or the grid during low-demand periods and releases it during high-demand times or power outages."
                },
                {
                  question: "How long do your BESS systems last?",
                  answer: "Our BESS systems are designed for long-term operation, with most residential and commercial systems rated for 10-15 years of service life. Industrial systems typically have a 15-20 year lifespan. All systems come with comprehensive warranties."
                },
                {
                  question: "Can I integrate BESS with my existing solar system?",
                  answer: "Yes, our BESS solutions are designed to integrate seamlessly with existing solar installations. Our team will assess your current setup and recommend the most compatible system for optimal performance."
                },
                {
                  question: "What maintenance is required for BESS systems?",
                  answer: "Our BESS systems require minimal maintenance. Most residential and commercial systems only need an annual inspection. We offer maintenance plans that include remote monitoring, regular check-ups, and priority service if issues arise."
                },
                {
                  question: "How quickly can a BESS system be installed?",
                  answer: "Installation timelines vary by system size and complexity. Residential installations typically take 1-2 days, commercial systems 3-5 days, and industrial or utility-scale projects several weeks to months, depending on scope."
                },
                {
                  question: "Are there incentives or rebates for installing BESS?",
                  answer: "Yes, many regions offer incentives for battery storage installations, including tax credits, rebates, and special utility rates. Our team stays current on available incentives and can help you maximize your savings opportunities."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
