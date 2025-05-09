"use client";

import { motion } from "framer-motion";
import { Heart, TrendingUp, Users, Award, Coffee, Zap } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Bienestar integral",
    description:
      "Programas de salud física y mental, seguro médico completo y actividades de bienestar.",
    color: "#f60404",
  },
  {
    icon: TrendingUp,
    title: "Desarrollo profesional",
    description:
      "Oportunidades de crecimiento, capacitaciones continuas y plan de carrera personalizado.",
    color: "#01237e",
  },
  {
    icon: Users,
    title: "Ambiente colaborativo",
    description:
      "Cultura de trabajo en equipo, comunicación abierta y respeto mutuo.",
    color: "#f60404",
  },
  {
    icon: Award,
    title: "Reconocimiento",
    description:
      "Valoramos tus logros con programas de incentivos y reconocimiento al desempeño.",
    color: "#01237e",
  },
  {
    icon: Coffee,
    title: "Balance vida-trabajo",
    description:
      "Horarios flexibles, días de trabajo remoto y respeto por tu tiempo personal.",
    color: "#f60404",
  },
  {
    icon: Zap,
    title: "Innovación constante",
    description:
      "Fomentamos nuevas ideas y mejora continua en todos nuestros procesos.",
    color: "#01237e",
  },
];

export default function WhyJoinUs() {
  return (
    <section id="por-que-nosotros" className="relative bg-slate-50 py-24">
      {/* Textured overlay */}
      {/* <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5 mix-blend-overlay" /> */}

      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            ¿Por qué unirte a{" "}
            <span className="text-[#01237e]">Grupo Pakatnamu</span>?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Ofrecemos un entorno de trabajo estimulante donde podrás desarrollar
            todo tu potencial mientras contribuyes al éxito de nuestras
            empresas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${benefit.color}10` }}
              >
                <benefit.icon
                  className="h-7 w-7"
                  style={{ color: benefit.color }}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg font-medium text-slate-700">
            "En Grupo Pakatnamu no solo buscamos profesionales talentosos, sino
            personas comprometidas que compartan nuestros valores y visión de
            excelencia."
          </p>
          <p className="mt-4 text-[#01237e]">- Dirección de Recursos Humanos</p>
        </motion.div>
      </div>
    </section>
  );
}
