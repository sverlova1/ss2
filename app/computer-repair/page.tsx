"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Cpu, Clock, CheckCircle, HardDrive, Wifi } from "lucide-react";
import Script from 'next/script';

const commonIssues = [
  {
    title: "Ремонт оборудования",
    description: "Ремонт материнских плат, блоков питания и других компонентов",
    price: "От 129.99$",
    time: "2-4 часа",
    icon: <HardDrive className="h-6 w-6" />
  },
  {
    title: "Восстановление данных",
    description: "Восстановление утерянных или поврежденных данных",
    price: "От 149.99$",
    time: "24-48 часов",
    icon: <Cpu className="h-6 w-6" />
  },
  {
    title: "Проблемы с сетью",
    description: "Решение проблем с подключением и настройка сети",
    price: "От 79.99$",
    time: "1-2 часа",
    icon: <Wifi className="h-6 w-6" />
  },
  {
    title: "Проблемы с дисплеем",
    description: "Ремонт экранов, видеокарт и подключений дисплея",
    price: "От 99.99$",
    time: "1-3 часа",
    icon: <Monitor className="h-6 w-6" />
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ремонт компьютеров",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ProService Center"
  },
  "serviceType": "Computer Repair",
  "areaServed": {
    "@type": "City",
    "name": "Tech City"
  },
  "offers": {
    "@type": "Offer",
    "priceRange": "$79.99 - $149.99"
  },
  "description": "Профессиональный ремонт компьютеров всех брендов и моделей. Быстрый, надежный и профессиональный сервис с сертифицированными специалистами."
};

export default function ComputerRepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="computer-repair-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Профессиональный ремонт компьютеров
              </h1>
              <p className="text-white/90 text-lg mb-6">
                Экспертный ремонт компьютеров всех брендов и моделей. Быстрый, надежный
                и профессиональный сервис с сертифицированными специалистами.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Ремонт в тот же день</Badge>
                <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Сертифицированные мастера</Badge>
                <Badge className="bg-primary/20 text-white hover:bg-primary/30 border-0">Гарантия 90 дней</Badge>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Мастер по ремонту компьютеров за работой"
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
                      <h3 className="font-medium mb-1">Сертифицированные мастера</h3>
                      <p className="text-sm text-muted-foreground">Профессионалы с передовыми сертификатами</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <HardDrive className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Качественные запчасти</h3>
                      <p className="text-sm text-muted-foreground">Только оригинальные компоненты</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Быстрый сервис</h3>
                      <p className="text-sm text-muted-foreground">Быстрая диагностика и ремонт</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <Monitor className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Все бренды</h3>
                      <p className="text-sm text-muted-foreground">Обслуживание всех марок компьютеров</p>
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
                    <CardTitle className="text-lg">Сколько времени занимает ремонт компьютера?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Большинство ремонтов выполняется в течение 24-48 часов. Простые проблемы могут быть решены в тот же день,
                      а более сложные могут потребовать дополнительного времени. Мы предоставим точную оценку после диагностики.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Что с моими данными?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы серьезно относимся к безопасности данных. Ваша информация защищена во время ремонта,
                      и мы можем помочь с резервным копированием данных перед серьезным ремонтом.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Ремонтируете ли вы все марки компьютеров?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Да, мы обслуживаем все основные бренды, включая Dell, HP, Lenovo, Apple, ASUS и компьютеры
                      собственной сборки. Наши специалисты сертифицированы для работы с различными системами.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Что если компьютер невозможно починить?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Если мы не сможем отремонтировать ваш компьютер, вы оплатите только диагностику.
                      Мы предоставим рекомендации по замене и поможем с переносом данных.
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