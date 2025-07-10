
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
      technologies: ["React Native", "Firebase", "WebRTC", "HealthKit"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Financial Dashboard",
      category: "Web Application",
      description: "Real-time financial analytics dashboard with advanced charting, reporting, and data visualization.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IoT Management System",
      category: "IoT Solution",
      description: "Comprehensive IoT device management platform with real-time monitoring and automated controls.",
      technologies: ["React", "AWS IoT", "MQTT", "Python"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Learning Management System",
      category: "Education Platform",
      description: "Complete LMS with course creation, student tracking, assessment tools, and video conferencing.",
      technologies: ["Angular", "Django", "PostgreSQL", "WebRTC"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Supply Chain Tracker",
      category: "Enterprise Solution",
      description: "Blockchain-based supply chain tracking system with transparency and traceability features.",
      technologies: ["React", "Blockchain", "Solidity", "Web3"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore our successful projects and see how we've helped businesses achieve their digital transformation goals
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-blue-400 border-blue-400">
              All Projects
            </Badge>
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-gray-300 border-gray-500 hover:border-blue-400 hover:text-blue-400 cursor-pointer transition-colors">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:scale-105 transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs text-blue-400 border-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-500 text-gray-300 hover:bg-slate-600">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300">
              We work with the latest and most reliable technologies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Angular", "Vue.js", "Node.js", "Python", "Django",
              "React Native", "Flutter", "MongoDB", "PostgreSQL", "AWS", "Docker"
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all">
                <div className="text-white font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl text-gray-300 italic mb-8">
            "Genetech Technologies delivered an exceptional e-commerce platform that exceeded our expectations. 
            Their attention to detail and technical expertise is remarkable."
          </blockquote>
          <div className="text-white font-semibold">Sarah Johnson</div>
          <div className="text-blue-400">CEO, TechCorp Solutions</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
