import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/90 text-lg mb-6">
              Our team of certified technicians is ready to help you with all your service needs.
              Contact us today for expert assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="outline" className="text-md border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/contact">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-primary-foreground/10 rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className="pt-4 border-t border-primary-foreground/20 mt-4">
                <p className="font-semibold">Emergency Service</p>
                <p className="text-primary-foreground/90">
                  Available 24/7 for urgent cases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}