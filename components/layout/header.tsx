"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const routes = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  {
    name: "Repairs",
    items: [
      { name: "Phone Repair", path: "/phone-repair" },
      { name: "Computer Repair", path: "/computer-repair" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">ProService</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => {
            if (route.items) {
              return (
                <DropdownMenu key={route.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                    {route.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {route.items.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link href={item.path}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={route.path}
                href={route.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {route.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Phone className="h-4 w-4" />
            <span>Call Us</span>
          </Button>
          <ModeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => {
                  if (route.items) {
                    return (
                      <div key={route.name} className="space-y-2">
                        <span className="text-lg font-medium">{route.name}</span>
                        <div className="pl-4 space-y-2">
                          {route.items.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block text-sm transition-colors hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={route.path}
                      href={route.path}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {route.name}
                    </Link>
                  );
                })}
                <Button className="mt-4 w-full gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Us</span>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}