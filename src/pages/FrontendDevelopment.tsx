
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, CheckCircle, ArrowRight, Palette, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FrontendDevelopment = () => {
  const features = [
    "React, Angular, Vue.js Development",
    "Responsive Web Design",
    "Cross-Browser Compatibility",
    "Performance Optimization",
    "Component-Based Architecture",
    "Modern JavaScript (ES6+)"
  ];

  const tools = [
    "HTML5, CSS3, JavaScript",
    "TypeScript, SASS/SCSS",
    "Webpack, Vite, Parcel",
    "Jest, Cypress, Testing Library",
    "Figma, Adobe XD Integration",
    "Git, CI/CD Workflows"
  ];

  const benefits = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Beautiful Interfaces",
      description: "Stunning, intuitive user interfaces that engage and delight users"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast & Responsive",
      description: "Lightning-fast loading times and smooth interactions across all devices"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centered",
      description: "Designed with user experience as the top priority for maximum engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-8 mx-auto">
            <Monitor className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            Front-End Development
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create stunning, responsive user interfaces that provide exceptional user experiences across all devices.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
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
              <h2 className="text-4xl font-bold text-white mb-8">What We Build</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Tools & Technologies</h2>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center text-gray-300 bg-slate-700/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-pink-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Front-End Development?</h2>
            <p className="text-xl text-gray-300">
              Creating exceptional user experiences through modern development practices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-center">
                <CardHeader>
                  <div className="text-purple-400 flex justify-center mb-4">{benefit.icon}</div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing User Interfaces?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's build a front-end that engages your users and drives conversions
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
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

export default FrontendDevelopment;
