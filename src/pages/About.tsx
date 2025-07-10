
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Target, Eye, Heart, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      experience: "15+ years",
      expertise: "Strategic Leadership & Business Development"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      experience: "12+ years",
      expertise: "Technology Innovation & Architecture"
    },
    {
      name: "Michael Chen",
      position: "Lead Software Engineer",
      experience: "10+ years",
      expertise: "Full-Stack Development & DevOps"
    },
    {
      name: "Emma Wilson",
      position: "Project Manager",
      experience: "8+ years",
      expertise: "Agile Project Delivery & Client Relations"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
      color: "bg-light-blue"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
      color: "bg-orange"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      color: "bg-navy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-light-gray">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-navy">
            About Genetech Technologies
          </h1>
          <p className="text-xl text-text-light mb-8 max-w-3xl mx-auto">
            Since 2014, we've been empowering businesses with innovative technology solutions. 
            Our passion for excellence and commitment to client success has made us a trusted 
            partner for companies looking to transform their digital landscape.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-light-blue mb-2">10+</div>
              <div className="text-text-light">Years of Excellence</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-orange mb-2">200+</div>
              <div className="text-text-light">Successful Projects</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-navy mb-2">150+</div>
              <div className="text-text-light">Satisfied Clients</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-light-blue mb-2">50+</div>
              <div className="text-text-light">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 bg-light-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${value.color} rounded-lg flex items-center justify-center text-white mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-navy">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-light text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-6">Our Journey</h2>
          </div>
          <div className="text-text-light space-y-6 text-lg leading-relaxed">
            <p>
              Genetech Technologies began as a vision to bridge the gap between cutting-edge 
              technology and practical business solutions. Founded in 2014 by a team of 
              passionate technologists, we started with a simple mission: to help businesses 
              harness the power of technology to achieve their goals.
            </p>
            <p>
              From our humble beginnings as a small development team, we've grown into a 
              comprehensive technology partner serving clients across diverse industries. 
              Our journey has been marked by continuous learning, adaptation, and an 
              unwavering commitment to excellence.
            </p>
            <p>
              Today, we're proud to be at the forefront of digital transformation, helping 
              organizations navigate the complexities of modern technology. Our success is 
              measured not just by the solutions we deliver, but by the lasting partnerships 
              we build and the tangible business impact we create for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-light-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-text-light">
              Experienced professionals driving innovation and excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-light-blue to-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-navy">{member.name}</CardTitle>
                  <CardDescription className="text-light-blue font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-3 bg-light-gray text-navy">
                    {member.experience}
                  </Badge>
                  <p className="text-text-light text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how our expertise can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-light-blue hover:bg-light-blue/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Get Started Today
            </a>
            <a href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-3 rounded-md font-medium transition-colors">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
