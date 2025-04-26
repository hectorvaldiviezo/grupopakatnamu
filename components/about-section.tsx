"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Equipo Profesional",
    description:
      "Contamos con un equipo altamente capacitado y comprometido con la excelencia.",
  },
  {
    icon: Target,
    title: "Enfoque al Cliente",
    description:
      "Nuestras soluciones están diseñadas para satisfacer las necesidades específicas de cada cliente.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description:
      "Todos nuestros servicios cumplen con los más altos estándares de calidad del mercado.",
  },
  {
    icon: TrendingUp,
    title: "Mejora Continua",
    description:
      "Constantemente buscamos innovar y mejorar nuestros procesos y servicios.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [particles, setParticles] = useState<
    { left: number; top: number; duration: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 20,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setParticles(generated);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-16 text-white"
    >
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
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: [0, p.x, 0],
              y: [0, p.y, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute h-1 w-1 rounded-full bg-secondary"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      {/* Textured overlay */}
      <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-10 mix-blend-overlay" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div style={{ y, opacity }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-secondary">
            Sobre Nosotros
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Grupo Pakatnamu es un conglomerado empresarial con más de 20 años de
            experiencia ofreciendo soluciones integrales.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl p-6 backdrop-blur-sm transition-all shadow-lg duration-300 hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary transition-all duration-300 group-hover:bg-primary/30 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl">
            <Image
              src="https://milla.grupopakatnamu.com/webImages/4/Historia"
              alt="Grupo Pakatnamu Team"
              width={1000}
              height={500}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="mb-2 text-2xl font-bold">Nuestra Historia</h3>
              <p className="max-w-2xl text-gray-300">
                Desde nuestra fundación, hemos crecido constantemente,
                expandiendo nuestras operaciones y mejorando nuestros servicios
                para satisfacer las necesidades cambiantes del mercado.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
