import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Award, Headphones, CreditCard, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Quick Turnaround",
    description: "Most repairs completed within 24-48 hours, minimizing downtime and inconvenience."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Certified Technicians",
    description: "Our team consists of highly trained and certified professionals with years of experience."
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you whenever you need help."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. We provide upfront cost estimates before starting any work."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Warranty Guaranteed",
    description: "All our repairs and services come with a comprehensive warranty for your peace of mind."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Customer Satisfaction",
    description: "We prioritize customer satisfaction and strive to exceed expectations with every service."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We're committed to providing exceptional service and value to all our customers.
            Here's what sets us apart:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-200 border-0 bg-muted/40">
              <CardHeader className="pb-2 flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-primary/10 p-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}