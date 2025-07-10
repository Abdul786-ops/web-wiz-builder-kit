
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Database, Shield, Globe, Users, Zap, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies.",
      features: ["React/Angular/Vue.js", "Node.js/Python/PHP", "Responsive Design", "E-commerce Solutions"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "iOS/Android Native", "App Store Deployment"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Database Solutions",
      description: "Scalable database design, optimization, and management services.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Analytics & Reporting"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Security Training"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management for scalable solutions.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps/CI-CD", "Monitoring & Support"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "IT Consulting",
      description: "Strategic IT consulting to optimize your business processes.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Technical Training"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const additionalServices = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "System Integration",
      description: "Seamlessly connect your existing systems and tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive technology solutions designed to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    <Link to="/contact" className="flex items-center justify-center w-full">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300">
              More ways we can help your business succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-400">{service.icon}</div>
                    <div>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">
              How we deliver exceptional results for our clients
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your needs and goals" },
              { step: "02", title: "Planning", description: "Create detailed project roadmap" },
              { step: "03", title: "Development", description: "Build and test your solution" },
              { step: "04", title: "Deployment", description: "Launch and provide ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and how we can help you achieve your goals
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Link to="/contact" className="flex items-center">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
