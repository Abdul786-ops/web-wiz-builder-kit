
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Reviews = () => {
  const reviews = [
    {
      name: "Jennifer Martinez",
      company: "TechStart Inc.",
      role: "CEO",
      rating: 5,
      review: "Genetech delivered an exceptional web application that exceeded our expectations. Their team's attention to detail and technical expertise made the entire process smooth and professional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Chen",
      company: "E-Commerce Solutions",
      role: "CTO",
      rating: 5,
      review: "Working with Genetech was a game-changer for our business. They built a custom e-commerce platform that increased our sales by 40% within the first quarter of launch.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Williams",
      company: "Design Studio Pro",
      role: "Creative Director",
      rating: 5,
      review: "The UI/UX design work was outstanding. Genetech understood our brand vision and created designs that perfectly captured our aesthetic while improving user engagement.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Thompson",
      company: "FinTech Innovations",
      role: "Product Manager",
      rating: 5,
      review: "Their expertise in backend development and security was evident throughout our project. The scalable architecture they built has handled our rapid growth flawlessly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      company: "Healthcare Plus",
      role: "Operations Director",
      rating: 5,
      review: "Genetech transformed our outdated system into a modern, efficient platform. The custom software solution they developed has streamlined our operations significantly.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      company: "Mobile First Agency",
      role: "Founder",
      rating: 5,
      review: "The mobile app they developed for us received excellent user reviews and has been downloaded over 50,000 times. Their technical skills and project management were top-notch.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white mb-8 mx-auto">
            <Star className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
            Client Reviews
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover what our clients say about working with Genetech and the results we've delivered together.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Real feedback from real clients about their experience with Genetech
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-white text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-blue-400">
                        {review.role} at {review.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {renderStars(review.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-400/30 absolute -top-2 -left-2" />
                    <p className="text-gray-300 leading-relaxed pl-6">
                      {review.review}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-slate-700/30 rounded-lg p-12">
            <Quote className="h-16 w-16 text-blue-400 mx-auto mb-8" />
            <blockquote className="text-2xl text-white mb-8 leading-relaxed">
              "Genetech doesn't just deliver projects, they deliver solutions that transform businesses. 
              Their technical expertise combined with their understanding of business needs makes them 
              an invaluable partner."
            </blockquote>
            <div className="text-blue-400 font-semibold">
              - Alex Johnson, CEO of Innovation Labs
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let's work together to create your next success story and exceed your expectations
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3">
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

export default Reviews;
