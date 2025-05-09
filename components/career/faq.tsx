"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo puedo aplicar a una vacante?",
    answer:
      "Puedes aplicar a nuestras vacantes a través del formulario de postulación en nuestra página web. Selecciona la vacante de tu interés y completa el formulario con tus datos y adjunta tu CV actualizado.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso de selección?",
    answer:
      "El proceso de selección generalmente toma entre 2 y 3 semanas, dependiendo de la posición y el volumen de candidatos. Te mantendremos informado sobre el estado de tu postulación en cada etapa del proceso.",
  },
  {
    question: "¿Qué documentos necesito para postular?",
    answer:
      "Para postular necesitas tu CV actualizado en formato PDF. Si eres seleccionado para avanzar en el proceso, te solicitaremos documentación adicional como certificados de estudios, referencias laborales y documentos de identidad.",
  },
  {
    question: "¿Ofrecen oportunidades para practicantes o recién egresados?",
    answer:
      "Sí, contamos con programas de prácticas profesionales y posiciones junior para recién egresados. Estas oportunidades se publican regularmente en nuestra sección de vacantes con la etiqueta 'Programa de Talentos'.",
  },
  {
    question:
      "¿Puedo enviar mi CV si no hay vacantes que se ajusten a mi perfil?",
    answer:
      "Absolutamente. Puedes enviar tu CV espontáneo a través de nuestro formulario de postulación. Lo mantendremos en nuestra base de datos y te contactaremos si surge una oportunidad acorde a tu perfil.",
  },
  {
    question: "¿Qué beneficios ofrecen a sus colaboradores?",
    answer:
      "Ofrecemos un paquete competitivo de beneficios que incluye seguro médico, bonos por desempeño, capacitación continua, horarios flexibles, actividades de integración y planes de carrera personalizados, entre otros.",
  },
  {
    question: "¿Tienen posiciones disponibles en otras ciudades o países?",
    answer:
      "Actualmente operamos principalmente en Perú, con oficinas en Lima, Chiclayo y Trujillo. Ocasionalmente abrimos posiciones en otras localidades, las cuales se especifican claramente en la descripción de la vacante.",
  },
  {
    question: "¿Cómo es el proceso de inducción para nuevos colaboradores?",
    answer:
      "Nuestro proceso de inducción dura aproximadamente dos semanas e incluye presentación de la empresa y sus valores, capacitación específica para el puesto, asignación de mentor, introducción al equipo y seguimiento continuo durante los primeros meses.",
  },
];

export default function FAQ() {
  return (
    <section className="relative bg-slate-50 py-24">
      {/* Textured overlay */}
      <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5 mix-blend-overlay" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Preguntas <span className="text-[#f60404]">Frecuentes</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Resolvemos tus dudas sobre nuestro proceso de selección y lo que
            significa formar parte del equipo de Grupo Pakatnamu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-sm md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            ¿Tienes más preguntas? No dudes en contactarnos a{" "}
            <a
              href="mailto:rrhh@grupopakatnamu.com"
              className="font-medium text-[#01237e] hover:underline"
            >
              rrhh@grupopakatnamu.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
