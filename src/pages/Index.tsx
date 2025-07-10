
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Globe, Smartphone, Database, Shield, Users, Star, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description: "Scalable database design and management for enterprise applications."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management services."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "IT Consulting",
      description: "Strategic IT consulting to optimize your business processes."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      text: "Genetech delivered exceptional results. Their team's expertise and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Innovations",
      text: "Outstanding service and support. They transformed our digital infrastructure completely.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      company: "StartupXYZ",
      text: "Professional, reliable, and innovative. Genetech is our go-to partner for all tech needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/37cd7e9c-1d1b-4835-a858-12048792c8de.png" 
              alt="Genetech Technologies Logo" 
              className="h-32 mx-auto mb-8 filter brightness-110"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Genetech Technologies
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Innovative IT Solutions for Modern Businesses. We transform ideas into digital reality with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3">
              <Link to="/services" className="flex items-center">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Genetech?</h2>
              <div className="space-y-4">
                {[
                  "Expert team with 10+ years experience",
                  "Cutting-edge technology solutions",
                  "24/7 customer support",
                  "Proven track record of success",
                  "Competitive pricing"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-purple-100">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-green-100">Support</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-600 to-red-500 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-orange-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 text-base">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Link to="/contact" className="flex items-center">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
