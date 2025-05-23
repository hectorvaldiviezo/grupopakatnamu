"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Compass,
  Shield,
  PersonStanding,
  Building,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Users,
    title: "Impulsamos Sueños",
    description:
      "Acompañamos a miles de peruanos y empresas en su crecimiento personal y profesional.",
  },
  {
    icon: Target,
    title: "Enfoque Personalizado",
    description:
      "Guiamos a nuestros clientes con soluciones a medida que responden a sus verdaderas necesidades.",
  },
  {
    icon: Award,
    title: "Confianza y Calidad",
    description:
      "Nuestra trayectoria respalda un servicio con altos estándares de seguridad y atención.",
  },
  {
    icon: TrendingUp,
    title: "Conexión con el Progreso",
    description:
      "Trabajamos para ser el vínculo entre el esfuerzo de nuestros clientes y su desarrollo.",
  },
];

const PROPOSITO =
  "Impulsar los sueños de miles de peruanos y empresas peruanas a través de la calidad, seguridad y atención personalizada que nos caracteriza.";
const VISION =
  "Convertirnos en el grupo líder por excelencia en los mercados que competimos, convirtiéndonos en la primera opción de todo emprendedor peruano.";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 text-white"
    >
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" />
      <div className="max-w-screen-xl relative z-10 mx-auto px-6 space-y-20">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-secondary mb-4">
            Sobre Nosotros
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Somos Grupo Pakatnamu: impulsamos sueños y guiamos el progreso de
            los emprendedores peruanos.
          </p>
        </motion.div>

        {/* Visión y Propósito */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={cardHover.hover}
            className="bg-gradient-to-br from-secondary to-blue-800 p-10 rounded-xl shadow-md text-white overflow-hidden relative"
          >
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <PersonStanding size={150} />
            </div>
            <h3 className="text-3xl font-bold mb-6 border-b border-blue-200 pb-4">
              Propósito
            </h3>
            <p className="text-xl relative z-10">{PROPOSITO}</p>
            <div className="mt-8 flex justify-end">
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                }}
              >
                <Compass size={30} className="text-white opacity-70" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={cardHover.hover}
            className="bg-gradient-to-br from-primary to-red-700 p-10 rounded-xl shadow-md text-white overflow-hidden relative"
          >
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <Building size={150} />
            </div>
            <h3 className="text-3xl font-bold mb-6 border-b border-red-200 pb-4">
              Visión
            </h3>
            <p className="text-xl relative z-10">{VISION}</p>
            <div className="mt-8 flex justify-end">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                }}
              >
                <Shield size={30} className="text-white opacity-70" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Características */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl p-6 backdrop-blur-sm transition-all shadow-lg hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-secondary group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-secondary">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Imagen e Historia */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://milla.grupopakatnamu.com/storage/webImages/4/inicio-historia.png"
              alt="Historia Grupo Pakatnamu"
              width={1000}
              height={500}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Nuestra Historia
              </h3>
              <p className="max-w-2xl text-gray-300">
                Desde nuestra fundación, hemos guiado a nuestros clientes hacia
                el progreso con precios accesibles, una variedad de marcas
                confiables y un servicio que inspira confianza.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
