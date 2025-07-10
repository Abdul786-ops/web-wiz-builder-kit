
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Linkedin, Github, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Full-Stack Developer",
      bio: "10+ years of experience in software development and team leadership. Specializes in scalable web applications and project management.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Frontend Developer",
      bio: "React and Vue.js expert with a passion for creating beautiful, responsive user interfaces. 8 years of frontend development experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      bio: "Creative designer with expertise in user experience and visual design. Focuses on creating intuitive and engaging digital experiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      bio: "Node.js and Python specialist with extensive experience in database design and API development. Passionate about clean, efficient code.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Jessica Taylor",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure and deployment expert. Specializes in AWS, Docker, and CI/CD pipelines to ensure smooth and scalable deployments.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Alex Thompson",
      role: "Mobile Developer",
      bio: "React Native and Flutter developer with a focus on creating cross-platform mobile applications with native performance.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-8 mx-auto">
            <Users className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Meet the talented professionals who bring your digital vision to life with expertise, creativity, and passion.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardHeader>
                <CardTitle className="text-white">Innovation</CardTitle>
                <CardDescription className="text-gray-300">
                  We stay at the forefront of technology to deliver cutting-edge solutions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardHeader>
                <CardTitle className="text-white">Collaboration</CardTitle>
                <CardDescription className="text-gray-300">
                  We work closely with our clients to understand and exceed their expectations
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardHeader>
                <CardTitle className="text-white">Quality</CardTitle>
                <CardDescription className="text-gray-300">
                  We maintain the highest standards in every project we deliver
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work with Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's collaborate to bring your next project to life with our expertise and passion
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

export default Team;
