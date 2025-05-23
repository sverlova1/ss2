import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, History, Award, Building, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Michael Johnson",
    role: "Chief Technician",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Michael has over 15 years of experience in technical repairs and diagnostics. He leads our team of technicians with expertise and dedication."
  },
  {
    name: "Sarah Williams",
    role: "Customer Relations Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Sarah ensures that every customer receives exceptional service from start to finish. Her focus on customer satisfaction has helped build our reputation."
  },
  {
    name: "David Chen",
    role: "Technical Specialist",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "David specializes in complex technical problems and advanced diagnostics. His analytical skills and attention to detail make him an invaluable asset."
  },
  {
    name: "Jennifer Rodriguez",
    role: "Operations Director",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Jennifer oversees all operations, ensuring efficiency and quality in every service we provide. Her leadership keeps our center running smoothly."
  }
];

const milestones = [
  {
    year: "2005",
    title: "Company Founded",
    description: "ProService Center was established with a mission to provide quality service and repairs."
  },
  {
    year: "2010",
    title: "Expansion",
    description: "Opened our second location and expanded our service offerings to meet growing demand."
  },
  {
    year: "2015",
    title: "Technology Upgrade",
    description: "Implemented state-of-the-art diagnostic equipment and tools to enhance our capabilities."
  },
  {
    year: "2018",
    title: "Customer Service Award",
    description: "Received recognition for outstanding customer service and satisfaction."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched online booking system and digital service tracking for enhanced customer experience."
  },
  {
    year: "2023",
    title: "Certification Excellence",
    description: "Achieved industry-leading certifications and training standards for all technicians."
  }
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "ProService Center",
    "description": "Professional service and repair solutions provider with over 15 years of experience.",
    "foundingDate": "2005",
    "employee": [
      {
        "@type": "Person",
        "name": "Michael Johnson",
        "jobTitle": "Chief Technician"
      },
      {
        "@type": "Person",
        "name": "Sarah Williams",
        "jobTitle": "Customer Relations Manager"
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About ProService Center
            </h1>
            <p className="text-white/90 text-lg mb-6">
              We're more than just a service center. We're a team of dedicated professionals
              committed to excellence, quality, and customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Established 2005</Badge>
              <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Certified Technicians</Badge>
              <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Award-Winning Service</Badge>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="story" className="text-sm md:text-base">Our Story</TabsTrigger>
              <TabsTrigger value="team" className="text-sm md:text-base">Our Team</TabsTrigger>
              <TabsTrigger value="values" className="text-sm md:text-base">Our Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="story" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2005, ProService Center began with a simple mission: to provide reliable, high-quality service with integrity and transparency. What started as a small operation has grown into a trusted name in the industry.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Over the years, we've expanded our services, upgraded our technology, and built a team of expert technicians, all while maintaining our commitment to exceptional customer service.
                  </p>
                  
                  <div className="space-y-6 mt-8">
                    <h3 className="text-xl font-semibold">Key Milestones</h3>
                    <div className="space-y-6">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="rounded-full bg-primary/10 p-2 w-12 h-12 flex items-center justify-center">
                              <span className="font-semibold">{milestone.year}</span>
                            </div>
                            {index < milestones.length - 1 && (
                              <div className="w-0.5 h-full bg-muted mt-2"></div>
                            )}
                          </div>
                          <div className="pb-6">
                            <h4 className="font-medium">{milestone.title}</h4>
                            <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Our workshop"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="team" className="mt-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our success is built on the expertise and dedication of our team. Each member brings unique skills and experience to provide the best service possible.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-md">
                    <div className="relative h-64">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-primary text-sm mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  We're always looking for talented individuals to join our growing team. If you're passionate about service excellence, we want to hear from you.
                </p>
                <Button asChild>
                  <Link href="/careers">View Careers</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="values" className="mt-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These principles guide everything we do, from how we interact with customers to how we approach every service task.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/40 rounded-lg p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <CheckCircle className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality & Excellence</h3>
                  <p className="text-muted-foreground">
                    We're committed to delivering the highest quality service in everything we do. Our technicians are highly trained and use the best tools and parts available.
                  </p>
                </div>
                
                <div className="bg-muted/40 rounded-lg p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                  <p className="text-muted-foreground">
                    Our customers are at the center of everything we do. We listen to your needs, provide transparent communication, and strive to exceed your expectations.
                  </p>
                </div>
                
                <div className="bg-muted/40 rounded-lg p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Integrity & Trust</h3>
                  <p className="text-muted-foreground">
                    We operate with honesty and transparency in all our interactions. You can trust us to do what's right, recommend only what's necessary, and stand behind our work.
                  </p>
                </div>
                
                <div className="bg-muted/40 rounded-lg p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <History className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    We never stop learning and improving. Our team regularly updates their skills and knowledge to stay ahead of industry developments and provide the best service possible.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-primary/5 rounded-lg p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="rounded-full bg-primary/10 p-4 w-20 h-20 flex items-center justify-center flex-shrink-0">
                    <Building className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground mb-4">
                      To provide exceptional service and repair solutions that exceed customer expectations, delivered by expert technicians who take pride in their work.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the most trusted and respected service provider in our industry, known for technical excellence, customer satisfaction, and innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Experience Our Service</h2>
              <p className="text-primary-foreground/90 max-w-md">
                Ready to experience our exceptional service firsthand? Book an appointment today
                or contact us to learn more about how we can help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="secondary">
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/contact">
                  Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}