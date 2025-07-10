
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, CheckCircle, ArrowRight, Server, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BackendDevelopment = () => {
  const features = [
    "RESTful API Development",
    "Database Design & Optimization",
    "Server Architecture & Setup",
    "Cloud Integration & Deployment",
    "Authentication & Authorization",
    "Performance Monitoring & Scaling"
  ];

  const technologies = [
    "Node.js, Python, Java, .NET",
    "Express, Django, Spring Boot",
    "PostgreSQL, MongoDB, Redis",
    "AWS, Azure, Google Cloud",
    "Docker, Kubernetes",
    "GraphQL, Microservices"
  ];

  const benefits = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Scalable Architecture",
      description: "Robust server solutions that grow with your business needs"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and data protection standards"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      description: "Optimized for speed and efficiency with advanced caching strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white mb-8 mx-auto">
            <Database className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            Back-End Development
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Robust server-side solutions and database architectures that power scalable, secure applications.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600">
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
              <h2 className="text-4xl font-bold text-white mb-8">Core Services</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Technologies & Frameworks</h2>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Back-End Development?</h2>
            <p className="text-xl text-gray-300">
              Powerful server solutions built for performance and scalability
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-center">
                <CardHeader>
                  <div className="text-red-400 flex justify-center mb-4">{benefit.icon}</div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Powerful Back-End Solutions?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's create a robust server architecture that supports your application's growth
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
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

export default BackendDevelopment;
