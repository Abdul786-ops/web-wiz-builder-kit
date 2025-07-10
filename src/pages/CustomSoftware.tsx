
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, CheckCircle, ArrowRight, Settings, Database, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomSoftware = () => {
  const features = [
    "Requirement Analysis & Planning",
    "Custom Architecture Design",
    "Agile Development Process",
    "Quality Assurance & Testing",
    "Deployment & Integration",
    "Ongoing Support & Maintenance"
  ];

  const benefits = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Tailored Solutions",
      description: "Software built specifically for your business processes and requirements"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability standards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-8 mx-auto">
            <Code className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Custom Software Development
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with tailored software solutions designed to meet your unique requirements and drive growth.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
            <Link to="/contact" className="flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Deliver</h2>
            <p className="text-xl text-gray-300">
              Comprehensive custom software development services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Custom Software?</h2>
            <p className="text-xl text-gray-300">
              Benefits of tailored software solutions for your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-center">
                <CardHeader>
                  <div className="text-blue-400 flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-white">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Custom Solution?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project requirements and create a tailored solution for your business
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

export default CustomSoftware;
