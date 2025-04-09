
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "NovaStudio has completely transformed our online presence. The websites we build now are not only beautiful but convert at twice the rate of our old site.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5
  },
  {
    quote: "The ease of use is incredible. I was able to build our company website in a single afternoon despite having no design experience.",
    author: "Michael Chen",
    role: "Founder, GreenStart",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    stars: 5
  },
  {
    quote: "Customer support is top-notch. Any time we've had a question, the team has been incredibly responsive and helpful.",
    author: "Emily Rodriguez",
    role: "Operations Manager, Craft Collective",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5
  },
  {
    quote: "The analytics dashboard gives us insights we never had before. Now we understand our customers and can build better products.",
    author: "David Kim",
    role: "Product Lead, Innovate Inc",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    stars: 4
  },
  {
    quote: "We've tried many website builders, but NovaStudio is in a league of its own. The features and flexibility are unmatched.",
    author: "Jessica Patel",
    role: "Designer, CreativeWorks",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5
  },
  {
    quote: "Our e-commerce conversions increased by 35% after switching to a NovaStudio-built website. The ROI has been incredible.",
    author: "Robert Wilson",
    role: "E-commerce Manager, Fashion Forward",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-navy-950">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what people are saying about their experience with NovaStudio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
