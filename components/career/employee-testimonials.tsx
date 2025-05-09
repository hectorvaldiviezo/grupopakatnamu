"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "José Jurupe",
    position: "Conductor, Transportes Pakatnamu",
    years: "5 años en la empresa",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Trabajar en Transportes Pakatnamu ha sido una experiencia enriquecedora. La empresa realmente se preocupa por nuestra seguridad y bienestar. He crecido profesionalmente y formado parte de un equipo excepcional.",
  },
  {
    id: 2,
    name: "María Sánchez",
    position: "Supervisora de Almacén, Depósito Pakatnamu",
    years: "7 años en la empresa",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Comencé como asistente y gracias a las oportunidades de crecimiento que ofrece la empresa, hoy soy supervisora. Valoro mucho la confianza que han depositado en mí y el ambiente de trabajo colaborativo.",
  },
  {
    id: 3,
    name: "Javier Rodríguez",
    position: "Asesor de Ventas, Automotores Pakatnamu",
    years: "3 años en la empresa",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Lo que más aprecio de trabajar aquí es la cultura de reconocimiento al esfuerzo. Cada logro es celebrado y eso te motiva a seguir mejorando. Además, el plan de comisiones es muy competitivo.",
  },
  {
    id: 4,
    name: "Ana Torres",
    position: "Analista de Logística, Transportes Pakatnamu",
    years: "4 años en la empresa",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "El equilibrio entre vida personal y profesional es algo que valoro enormemente de Grupo Pakatnamu. La flexibilidad y el respeto por nuestro tiempo nos permite dar lo mejor en ambos aspectos.",
  },
];

export default function EmployeeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-slate-50 py-24">
      {/* Textured overlay */}
      <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5 mix-blend-overlay" />

      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Nuestros <span className="text-[#f60404]">Colaboradores</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Conoce las experiencias de quienes ya forman parte de nuestro equipo
            y descubre por qué Grupo Pakatnamu es un excelente lugar para
            desarrollar tu carrera profesional.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm md:p-10">
            <div className="absolute right-10 top-10 opacity-10">
              <Quote className="h-24 w-24 text-[#01237e]" />
            </div>

            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:flex-row"
              >
                <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-8">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
                    <Image
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-6 text-lg italic text-slate-700">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#01237e]">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonials[currentIndex].years}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#f60404]" : "bg-slate-200"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute bottom-1/2 left-0 right-0 flex translate-y-1/2 justify-between px-4">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all duration-300 hover:bg-slate-50 hover:text-[#01237e]"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all duration-300 hover:bg-slate-50 hover:text-[#01237e]"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
