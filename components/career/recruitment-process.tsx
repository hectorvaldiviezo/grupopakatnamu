"use client";

import { motion } from "framer-motion";
import { FileText, Users, Phone, CheckCircle, Calendar } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Postulación",
    description:
      "Envía tu CV y completa el formulario de postulación. Revisaremos cuidadosamente tu perfil y experiencia.",
    color: "#f60404",
  },
  {
    icon: Phone,
    title: "Entrevista telefónica",
    description:
      "Si tu perfil coincide con nuestras necesidades, te contactaremos para una entrevista telefónica inicial.",
    color: "#01237e",
  },
  {
    icon: Users,
    title: "Entrevista presencial",
    description:
      "Conoce a nuestro equipo en una entrevista presencial o virtual donde evaluaremos tus habilidades y experiencia.",
    color: "#f60404",
  },
  {
    icon: CheckCircle,
    title: "Evaluación",
    description:
      "Dependiendo del puesto, podrías realizar pruebas técnicas, psicométricas o de conocimientos específicos.",
    color: "#01237e",
  },
  {
    icon: Calendar,
    title: "Oferta y contratación",
    description:
      "Si eres seleccionado, recibirás una oferta formal y comenzaremos el proceso de incorporación a nuestro equipo.",
    color: "#f60404",
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="relative bg-white py-24">
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
            Proceso de <span className="text-[#01237e]">Selección</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Conoce las etapas de nuestro proceso de selección diseñado para
            identificar a los mejores talentos que compartirán nuestro camino
            hacia el éxito.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Línea conectora */}
          <div className="absolute left-[26px] top-0 h-full w-1 bg-slate-200 md:left-1/2 md:-ml-0.5"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`flex ${
                  index % 2 === 0 ? "md:justify-end" : ""
                } items-start md:w-1/2 ${index % 2 === 0 ? "" : "md:ml-auto"}`}
              >
                <div
                  className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-md md:left-1/2 md:-ml-7"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                <div
                  className={`ml-20 rounded-lg bg-white p-6 shadow-sm md:ml-0 ${
                    index % 2 === 0 ? "md:mr-20" : "md:ml-20"
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            El tiempo promedio de nuestro proceso de selección es de 2 a 3
            semanas, dependiendo de la posición y el volumen de candidatos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
