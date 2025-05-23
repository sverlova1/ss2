'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Wrench, PenTool, ShieldCheck, Zap, HelpCircle } from "lucide-react";

const services = [
  {
    title: "Diagnostics",
    description: "Comprehensive diagnostics to identify issues with precision and accuracy.",
    icon: <HelpCircle className="h-8 w-8 text-primary" />,
    link: "/services#diagnostics"
  },
  {
    title: "Repairs",
    description: "Expert repair services to fix any problems and restore optimal functionality.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    link: "/services#repairs"
  },
  {
    title: "Maintenance",
    description: "Regular maintenance to ensure reliable performance and prevent future issues.",
    icon: <PenTool className="h-8 w-8 text-primary" />,
    link: "/services#maintenance"
  },
  {
    title: "Upgrades",
    description: "Performance upgrades to enhance capabilities and extend lifespan.",
    icon: <Zap className="h-8 w-8 text-primary" />,
    link: "/services#upgrades"
  },
  {
    title: "Protection Plans",
    description: "Comprehensive protection plans to safeguard against unexpected problems.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    link: "/services#protection"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We offer a comprehensive range of services to meet all your needs.
            Our team of experts is ready to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-200 flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="group-hover:translate-x-1 transition-transform">
                  <Link href={service.link}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}