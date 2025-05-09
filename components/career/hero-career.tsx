"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroCareer() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#f60404] opacity-5 blur-[100px]" />
        <div className="absolute right-[15%] top-[30%] h-72 w-72 rounded-full bg-[#01237e] opacity-5 blur-[120px]" />
      </div>

      {/* Textured overlay */}
      <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5 mix-blend-overlay" />

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="h-full w-[1px] bg-gradient-to-b from-transparent via-slate-300 to-transparent"
              style={{
                opacity: i % 2 === 0 ? 0.3 : 0.1,
                transform: `translateX(${i * (100 / 6)}%)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800"
        >
          Únete a nuestro equipo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight text-secondary md:text-5xl lg:text-6xl"
        >
          Trabaja con <span className="text-[#f60404]">Nosotros</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 md:text-xl"
        >
          En Grupo Pakatnamu valoramos el talento y ofrecemos oportunidades de
          crecimiento profesional en un ambiente dinámico y colaborativo.
          Descubre nuestras vacantes actuales y forma parte de nuestro equipo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/trabaja-con-nosotros/convocatorias"
            className="group relative overflow-hidden rounded-full bg-[#f60404] px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:shadow-[#f60404]/30"
          >
            <span className="relative z-10">Ver vacantes disponibles</span>
            <span className="absolute inset-0 -z-10 translate-y-full bg-[#01237e] opacity-90 transition-transform duration-300 group-hover:translate-y-0"></span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative image */}
      <div className="absolute bottom-0 right-0 z-0 hidden opacity-10 lg:block">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Decorative"
          width={600}
          height={400}
          className="h-auto w-[400px] object-contain"
        />
      </div>
    </section>
  );
}
