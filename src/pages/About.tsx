
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Target, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      experience: "15+ years",
      expertise: "Strategic Leadership"
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      experience: "12+ years",
      expertise: "Technology Innovation"
    },
    {
      name: "Michael Chen",
      position: "Lead Developer",
      experience: "10+ years",
      expertise: "Full-Stack Development"
    },
    {
      name: "Emma Wilson",
      position: "Project Manager",
      experience: "8+ years",
      expertise: "Project Delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Genetech Technologies
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Founded in 2014, we've been at the forefront of technological innovation, 
            helping businesses transform their digital presence and achieve their goals.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and success in the digital age.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">
                  To be the leading technology partner that transforms businesses through 
                  cutting-edge solutions and exceptional service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">
                  Innovation, integrity, excellence, and customer satisfaction are at the 
                  core of everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
          </div>
          <div className="text-gray-300 space-y-6 text-lg">
            <p>
              Genetech Technologies was founded in 2014 with a simple yet powerful vision: 
              to bridge the gap between complex technology and business success. What started 
              as a small team of passionate developers has grown into a comprehensive IT 
              solutions provider serving clients worldwide.
            </p>
            <p>
              Over the years, we've evolved with the rapidly changing technology landscape, 
              consistently staying ahead of trends and adopting emerging technologies to 
              benefit our clients. From web development to cloud solutions, from mobile 
              apps to cybersecurity, we've expanded our expertise to meet the diverse 
              needs of modern businesses.
            </p>
            <p>
              Today, we're proud to have completed over 200 successful projects and 
              maintained long-term partnerships with clients across various industries. 
              Our commitment to excellence, innovation, and customer satisfaction continues 
              to drive our growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-blue-400">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-2">
                    {member.experience}
                  </Badge>
                  <p className="text-gray-300 text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
