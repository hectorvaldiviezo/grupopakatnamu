"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ArrowRight, Truck, Warehouse, Car, Link2 } from "lucide-react";
import Link from "next/link";

const companies = [
  {
    id: "transportes",
    name: "Transportes Pakatnamu",
    description:
      "Soluciones logísticas de transporte eficientes y confiables para todo tipo de carga.",
    icon: Truck,
    color: "from-[#01237e] to-[#01237e]/80",
    features: [
      "Flota moderna",
      "Cobertura nacional",
      "Seguimiento en tiempo real",
      "Transporte especializado",
    ],
    image:
      "https://milla.grupopakatnamu.com/transportes/administradorweb/hero_nosotros.png",
    link: "https://transportespakatnamu.com/",
  },
  {
    id: "deposito",
    name: "Depósito Pakatnamu",
    description:
      "Productos de calidad y atención personalizada para satisfacer todas tus necesidades.",
    icon: Warehouse,
    color: "from-[#f60404] to-[#f60404]/80",
    features: [
      "Garantía de Calidad",
      "Entrega rápida",
      "Soporte 24/7",
      "Asesoría especializada",
    ],
    image:
      "https://milla.grupopakatnamu.com/webImages/Libro%20de%20Reclamaciones",
    link: "https://www.depositopakatnamu.com.pe/",
  },
  {
    id: "automotores",
    name: "Automotores Pakatnamu",
    description:
      "Venta y servicio de vehículos con la mejor calidad y atención personalizada.",
    icon: Car,
    color: "from-slate-600 to-slate-500",
    features: [
      "Vehículos de calidad",
      "Servicio técnico",
      "Repuestos originales",
      "Financiamiento flexible",
    ],
    image: "https://milla.grupopakatnamu.com/webImages/4/Automotores",
    link: "https://www.automotorespakatnamu.com/",
  },
];

export default function CompaniesSection() {
  const [activeTab, setActiveTab] = useState("transportes");

  return (
    <section className="relative py-16">
      {/* Background with texture */}
      <div className="absolute inset-0" />
      {/* <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5" /> */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="h-full w-[1px] bg-secondary"
              style={{
                opacity: i % 2 === 0 ? 0.3 : 0.1,
                transform: `translateX(${i * (100 / 6)}%)`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="h-[1px] w-full bg-secondary"
              style={{
                opacity: i % 2 === 0 ? 0.3 : 0.1,
                transform: `translateY(${i * (100 / 6)}%)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-secondary md:text-5xl">
            Nuestras Empresas
          </h2>
          {/* <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Descubre cómo nuestras empresas especializadas trabajan en sinergia
            para ofrecer soluciones integrales.
          </p> */}
        </motion.div>

        <Tabs
          defaultValue="transportes"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mx-auto max-w-5xl"
        >
          <TabsList className="mx-auto mb-12 grid w-full max-w-2xl grid-cols-3 h-full rounded-full">
            {companies.map((company) => (
              <TabsTrigger
                key={company.id}
                value={company.id}
                className="relative py-2 text-base data-[state=active]:text-slate-900 rounded-full"
              >
                <company.icon className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">
                  {company.name.split(" ")[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {companies.map((company) => (
            <TabsContent key={company.id} value={company.id} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid gap-8 md:grid-cols-2"
                >
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div
                        className={`mb-6 inline-flex rounded-full bg-gradient-to-r ${company.color} p-3 text-white`}
                      >
                        <company.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-4 text-3xl font-bold text-slate-900">
                        {company.name}
                      </h3>
                      <p className="mb-6 text-lg text-slate-600">
                        {company.description}
                      </p>

                      <ul className="mb-8 space-y-3">
                        {company.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.3 + index * 0.1,
                              duration: 0.5,
                            }}
                            className="flex items-center text-slate-700"
                          >
                            <span
                              className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r ${company.color} text-white`}
                            >
                              ✓
                            </span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <Link href={company.link || "#"} target="_blank" passHref>
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                          className="group flex items-center font-medium text-slate-900"
                        >
                          Conocer más
                          <Link2 className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <div className="aspect-video">
                      <Image
                        src={company.image || "/placeholder.svg"}
                        alt={company.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${company.color} mix-blend-multiply opacity-30`}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
