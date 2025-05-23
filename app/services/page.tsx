import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Wrench, PenTool as Tool, ShieldCheck, Zap, HelpCircle, Users, Clock } from "lucide-react";
import Script from 'next/script';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Service Solutions",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ProService Center"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Service Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diagnostics",
          "description": "Comprehensive diagnostics to identify issues with precision and accuracy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Repairs",
          "description": "Expert repair services to fix any problems and restore optimal functionality."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maintenance",
          "description": "Regular maintenance to ensure reliable performance and prevent future issues."
        }
      }
    ]
  }
};

const services = [
  {
    id: "diagnostics",
    title: "Diagnostics",
    description: "Comprehensive diagnostics to identify issues with precision and accuracy.",
    details: "Our advanced diagnostic services use state-of-the-art equipment to identify problems quickly and accurately. We perform thorough inspections and provide detailed reports of our findings.",
    icon: <HelpCircle className="h-10 w-10 text-primary" />,
    features: [
      "Comprehensive system analysis",
      "Advanced computerized diagnostics",
      "Detailed inspection reports",
      "Root cause identification",
      "Performance testing"
    ],
    price: "Starting at $49.99"
  },
  {
    id: "repairs",
    title: "Repairs",
    description: "Expert repair services to fix any problems and restore optimal functionality.",
    details: "Our expert technicians can repair a wide range of issues, from minor problems to major malfunctions. We use quality parts and proven techniques to ensure lasting results.",
    icon: <Wrench className="h-10 w-10 text-primary" />,
    features: [
      "Certified technicians",
      "Quality replacement parts",
      "Comprehensive solutions",
      "Quick turnaround times",
      "Service warranty"
    ],
    price: "Starting at $79.99"
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Regular maintenance to ensure reliable performance and prevent future issues.",
    details: "Preventive maintenance is key to avoiding costly repairs and extending the lifespan of your equipment. Our maintenance plans include regular inspections, cleaning, and tune-ups.",
    icon: <Tool className="h-10 w-10 text-primary" />,
    features: [
      "Regular service intervals",
      "Thorough system cleaning",
      "Component inspection",
      "Fluid checks and replacements",
      "Performance optimization"
    ],
    price: "Starting at $129.99"
  },
  {
    id: "upgrades",
    title: "Upgrades",
    description: "Performance upgrades to enhance capabilities and extend lifespan.",
    details: "Upgrade your existing equipment to improve performance, efficiency, and functionality. Our experts can recommend and install the best upgrades for your specific needs.",
    icon: <Zap className="h-10 w-10 text-primary" />,
    features: [
      "Performance enhancement",
      "Efficiency improvements",
      "Latest technology integration",
      "Custom solutions",
      "Compatibility testing"
    ],
    price: "Starting at $199.99"
  },
  {
    id: "protection",
    title: "Protection Plans",
    description: "Comprehensive protection plans to safeguard against unexpected problems.",
    details: "Our protection plans provide peace of mind with coverage for repairs, maintenance, and technical support. Choose from different levels of protection to suit your needs and budget.",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    features: [
      "Comprehensive coverage",
      "Priority service",
      "Discounted repairs",
      "Regular maintenance included",
      "Technical support access"
    ],
    price: "Starting at $19.99/month"
  },
  {
    id: "consultations",
    title: "Expert Consultations",
    description: "Professional advice and recommendations from our expert technicians.",
    details: "Get expert advice and recommendations for your specific needs. Our consultants can help you make informed decisions about repairs, upgrades, or replacements.",
    icon: <Users className="h-10 w-10 text-primary" />,
    features: [
      "One-on-one consultations",
      "Detailed recommendations",
      "Cost-benefit analysis",
      "Technology guidance",
      "Custom solution planning"
    ],
    price: "Starting at $59.99"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mb-8">
              We offer a comprehensive range of professional services to meet all your needs.
              Browse our offerings below or contact us for custom solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/booking">Book a Service</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id}
                className="scroll-mt-20 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">{service.title}</h2>
                  <p className="text-muted-foreground text-center md:text-left">{service.description}</p>
                </div>
                
                <Card className="md:w-2/3 shadow-md border-0">
                  <CardHeader>
                    <CardTitle>Service Details</CardTitle>
                    <CardDescription>{service.details}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">Average completion: 1-3 days</span>
                        </div>
                        <p className="font-semibold">{service.price}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button asChild>
                      <Link href={`/booking?service=${service.id}`}>
                        Book This Service
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Need a Custom Service?</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mb-6">
              Don't see exactly what you need? Contact our team for a personalized service
              tailored to your specific requirements.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}