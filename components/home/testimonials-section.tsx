"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Customer",
    avatar: "SJ",
    content: "I was impressed by the professionalism and expertise of the team. They diagnosed and fixed my issue quickly, and the service was excellent.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    role: "Business Owner",
    avatar: "MT",
    content: "As a business owner, I appreciate their reliable service and quick response times. They've been maintaining our equipment for years with outstanding results.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Customer",
    avatar: "ER",
    content: "The technicians were knowledgeable and friendly. They explained everything clearly and completed the repair faster than I expected. Highly recommended!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Regular Client",
    avatar: "DC",
    content: "I've been using ProService for all my maintenance needs, and they never disappoint. Their attention to detail and quality of work is unmatched.",
    rating: 4
  },
  {
    name: "Jessica Williams",
    role: "Customer",
    avatar: "JW",
    content: "Exceptional service from start to finish. The online booking system was easy to use, and the technician arrived on time and solved my problem efficiently.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="border-0 shadow-md bg-background">
                  <CardContent className="pt-6 pb-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeIndex === index ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}