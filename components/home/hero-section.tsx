import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-32 md:py-40 lg:py-52 flex flex-col items-center text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-[fadeIn_0.5s_ease-in-out]">
          Professional Service Solutions
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 animate-[fadeIn_0.7s_ease-in-out]">
          Expert technicians, quality parts, and exceptional customer service.
          We handle all your repair and maintenance needs with care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_0.9s_ease-in-out]">
          <Button asChild size="lg" className="text-md">
            <Link href="/booking">Book Service</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-md bg-white/10 text-white hover:bg-white/20 hover:text-white">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}