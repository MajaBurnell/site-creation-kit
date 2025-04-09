
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Former tech lead at Google with 15+ years of experience in web development."
  },
  {
    name: "Jessica Chen",
    role: "Chief Design Officer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Award-winning designer with a passion for creating beautiful, functional interfaces."
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    bio: "Full-stack developer and architect who loves solving complex technical challenges."
  },
  {
    name: "Sophia Rodriguez",
    role: "Head of Customer Success",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    bio: "Dedicated to ensuring customers get the most out of our platform with exceptional support."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-navy-950">
            The <span className="gradient-text">Team</span> Behind NovaStudio
          </h2>
          <p className="text-lg text-gray-600">
            We're a passionate group of designers, developers, and digital enthusiasts committed to making web design accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full aspect-square object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="mb-4 text-navy-950">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At NovaStudio, we believe that creating a professional online presence should be accessible to everyone, regardless of technical skill. 
                We're on a mission to democratize web design and empower businesses of all sizes to thrive online.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Since our founding in 2020, we've helped over 10,000 businesses establish their digital presence, with a focus on 
                beautiful design, powerful functionality, and exceptional user experience.
              </p>
              <Button size="lg">Learn more about us</Button>
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
                  <span className="font-bold">Our Values</span>
                </div>
                <ul className="text-sm">
                  <li className="mb-1">• Innovation First</li>
                  <li className="mb-1">• Customer Success</li>
                  <li>• Design Excellence</li>
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
