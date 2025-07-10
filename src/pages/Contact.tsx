
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM PST"],
      color: "bg-light-blue",
      textColor: "text-white"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      details: ["info@genetechtech.com", "support@genetechtech.com"],
      color: "bg-orange",
      textColor: "text-white"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Us",
      details: ["123 Tech Street", "Silicon Valley, CA 94000"],
      color: "bg-navy",
      textColor: "text-white"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By Appointment"],
      color: "bg-light-gray",
      textColor: "text-navy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-light-gray">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-navy">
            Get In Touch With Us
          </h1>
          <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <div className="flex justify-center items-center space-x-2 text-light-blue">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Response within 24 hours guaranteed</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${info.color} rounded-lg flex items-center justify-center ${info.textColor} mx-auto mb-4`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-navy">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-text-light text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className="py-20 px-4 bg-light-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy text-2xl">Send Us A Message</CardTitle>
                <CardDescription className="text-text-light">
                  Tell us about your project requirements and we'll provide you with a customized solution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-navy font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 border-gray-300 focus:border-light-blue focus:ring-light-blue"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-navy font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 border-gray-300 focus:border-light-blue focus:ring-light-blue"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-navy font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 border-gray-300 focus:border-light-blue focus:ring-light-blue"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-navy font-medium">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 border-gray-300 focus:border-light-blue focus:ring-light-blue"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-navy font-medium">Service Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-light-blue focus:ring-light-blue"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-mobile">Web & Mobile Applications</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="it-consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-navy font-medium">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1 border-gray-300 focus:border-light-blue focus:ring-light-blue"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-light-blue hover:bg-light-blue/90 text-white py-3 text-lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-navy">Why Choose Genetech?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-light-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-navy font-semibold mb-1">Expert Team</h4>
                      <p className="text-text-light text-sm">Certified professionals with 10+ years of industry experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-navy font-semibold mb-1">Proven Track Record</h4>
                      <p className="text-text-light text-sm">200+ successful projects delivered on time and within budget</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-light-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-navy font-semibold mb-1">24/7 Support</h4>
                      <p className="text-text-light text-sm">Round-the-clock technical support and maintenance services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-navy font-semibold mb-1">Agile Methodology</h4>
                      <p className="text-text-light text-sm">Flexible development approach with regular updates and feedback</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-navy">Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-light-gray h-48 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-text-light">
                      <MapPin className="h-12 w-12 mx-auto mb-4 text-light-blue" />
                      <p className="font-medium text-navy">Silicon Valley Office</p>
                      <p className="text-sm">123 Tech Street, CA 94000</p>
                      <p className="text-sm mt-2">Modern workspace with latest technology</p>
                    </div>
                  </div>
                  <div className="text-sm text-text-light">
                    <p className="mb-2"><strong className="text-navy">Parking:</strong> Free visitor parking available</p>
                    <p><strong className="text-navy">Public Transport:</strong> 5 min walk from Metro Station</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
