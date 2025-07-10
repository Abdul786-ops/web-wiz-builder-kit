
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, CheckCircle, ArrowRight, Users, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UIUXDesign = () => {
  const features = [
    "User Research & Analysis",
    "Wireframing & Prototyping",
    "Visual Design & Branding",
    "Usability Testing",
    "Responsive Design Systems",
    "Accessibility Optimization"
  ];

  const tools = [
    "Figma, Adobe XD, Sketch",
    "Adobe Creative Suite",
    "InVision, Marvel, Principle",
    "Miro, FigJam for Collaboration",
    "Zeplin, Abstract for Handoff",
    "User Testing Platforms"
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centered Design",
      description: "Designs based on real user needs and behaviors for optimal engagement"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Visual Excellence",
      description: "Beautiful, modern interfaces that reflect your brand and captivate users"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Conversion Focused",
      description: "Strategic design decisions that drive user actions and business goals"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-8 mx-auto">
            <Palette className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
            UI/UX Design
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            User-centered design solutions that combine beautiful aesthetics with intuitive functionality to create exceptional experiences.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600">
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
              <h2 className="text-4xl font-bold text-white mb-8">Design Process</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-indigo-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Design Tools</h2>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{tool}</span>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our UI/UX Design?</h2>
            <p className="text-xl text-gray-300">
              Creating meaningful experiences that users love and businesses succeed with
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-center">
                <CardHeader>
                  <div className="text-indigo-400 flex justify-center mb-4">{benefit.icon}</div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Exceptional User Experiences?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's design interfaces that your users will love and that drive your business forward
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
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

export default UIUXDesign;
