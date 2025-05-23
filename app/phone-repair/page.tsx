"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Shield, Clock, CheckCircle, PenTool as Tool, AlertCircle } from "lucide-react";
import Script from 'next/script';

const commonIssues = [
  {
    title: "Ремонт экрана",
    description: "Устранение трещин, проблем с дисплеем или сенсором",
    price: "От 89.99$",
    time: "1-2 часа",
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: "Замена батареи",
    description: "Замена старых или поврежденных батарей на оригинальные",
    price: "От 49.99$",
    time: "30-60 минут",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Ремонт после воды",
    description: "Профессиональная диагностика и ремонт после попадания воды",
    price: "От 99.99$",
    time: "24-48 часов",
    icon: <AlertCircle className="h-6 w-6" />
  },
  {
    title: "Ремонт компонентов",
    description: "Ремонт кнопок, динамиков, камер и других компонентов",
    price: "От 69.99$",
    time: "1-3 часа",
    icon: <Tool className="h-6 w-6" />
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ремонт телефонов",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ProService Center"
  },
  "serviceType": "Phone Repair",
  "areaServed": {
    "@type": "City",
    "name": "Tech City"
  },
  "offers": {
    "@type": "Offer",
    "priceRange": "$49.99 - $99.99"
  },
  "description": "Профессиональный ремонт телефонов всех популярных брендов. Быстрый, надежный и гарантированный сервис с оригинальными запчастями и квалифицированными специалистами."
};

export default function PhoneRepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="phone-repair-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Профессиональный ремонт телефонов
              </h1>
              <p className="text-white/90 text-lg mb-6">
                Экспертный ремонт всех популярных брендов. Быстрый, надежный и гарантированный
                сервис с оригинальными запчастями и квалифицированными мастерами.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Ремонт в тот же день</Badge>
                <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Оригинальные запчасти</Badge>
                <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Гарантия 90 дней</Badge>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Мастер по ремонту телефонов за работой"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Common Issues */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Распространенные проблемы, которые мы решаем</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonIssues.map((issue, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="rounded-full bg-primary/10 p-2">
                          {issue.icon}
                        </div>
                        <CardTitle className="text-lg">{issue.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-2">{issue.description}</p>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{issue.price}</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{issue.time}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Почему выбирают нас</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Опытные мастера</h3>
                      <p className="text-sm text-muted-foreground">Сертифицированные специалисты с многолетним опытом</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Оригинальные запчасти</h3>
                      <p className="text-sm text-muted-foreground">Используем только оригинальные комплектующие</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Быстрый сервис</h3>
                      <p className="text-sm text-muted-foreground">Большинство ремонтов выполняется в тот же день</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <Tool className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Гарантия на работу</h3>
                      <p className="text-sm text-muted-foreground">90 дней гарантии на все виды ремонта</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Сколько времени занимает ремонт?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Большинство ремонтов выполняется в течение 1-2 часов. Более сложные проблемы могут занять 24-48 часов.
                      Мы предоставим вам точное время выполнения работ после диагностики.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Какую гарантию вы предоставляете?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Все наши ремонтные работы имеют гарантию 90 дней, которая распространяется как на запчасти,
                      так и на работу. При возникновении проблем мы устраним их бесплатно.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Используете ли вы оригинальные запчасти?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Да, мы используем только оригинальные или высококачественные OEM запчасти для всех ремонтов,
                      чтобы обеспечить наилучшую производительность и долговечность вашего устройства.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Что если телефон невозможно починить?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Если мы не сможем отремонтировать ваш телефон, вы не будете платить за диагностику.
                      Мы предложим вам альтернативные варианты и рекомендации для вашей ситуации.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}