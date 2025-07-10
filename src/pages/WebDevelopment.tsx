
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle, ArrowRight, Smartphone, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WebDevelopment = () => {
  const features = [
    "Responsive Web Design",
    "E-commerce Solutions",
    "Content Management Systems",
    "Progressive Web Applications",
    "API Integration & Development",
    "Performance Optimization"
  ];

  const technologies = [
    "React, Angular, Vue.js",
    "Node.js, Python, PHP, .NET",
    "MongoDB, PostgreSQL, MySQL",
    "AWS, Azure, Google Cloud",
    "Docker, Kubernetes",
    "GraphQL, REST APIs"
  ];

  const benefits = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Responsive websites that work perfectly on all devices and screen sizes"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Performance",
      description: "Optimized for speed with modern performance best practices"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Built with security in mind and reliable hosting solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-8 mx-auto">
            <Globe className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Web Development
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Modern, scalable web applications built with the latest technologies to deliver exceptional user experiences.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600">
            <Link to="/contact" className="flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Services We Offer</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Technologies We Use</h2>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-gray-300">
              Modern web solutions designed for success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-center">
                <CardHeader>
                  <div className="text-green-400 flex justify-center mb-4">{benefit.icon}</div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Web Presence?</h2>
          <p className="text-xl text-green-100 mb-8">
            Let's create a powerful web solution that drives your business forward
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
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

export default WebDevelopment;
