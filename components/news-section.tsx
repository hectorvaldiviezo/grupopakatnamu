"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Expansión de nuestra flota de transporte",
    excerpt: "Transportes Pakatnamu incorpora 20 nuevos vehículos para mejorar su capacidad de servicio.",
    date: "15 Abril, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Transportes",
  },
  {
    id: 2,
    title: "Nuevo centro de distribución",
    excerpt: "Depósito Pakatnamu inaugura un moderno centro logístico con tecnología de punta.",
    date: "23 Mayo, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Depósito",
  },
  {
    id: 3,
    title: "Alianza estratégica con fabricantes",
    excerpt: "Automotores Pakatnamu firma acuerdo con importantes marcas internacionales.",
    date: "10 Junio, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Automotores",
  },
]

export default function NewsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative py-24">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-100 opacity-80" />
      <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Novedades</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Mantente al día con las últimas noticias y actualizaciones de nuestras empresas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center text-sm text-slate-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  {item.date}
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                  {item.title}
                </h3>

                <p className="mb-4 text-slate-600">{item.excerpt}</p>

                <div className="flex items-center font-medium text-indigo-600">
                  Leer más
                  <ArrowRight
                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${hoveredCard === item.id ? "translate-x-1" : ""}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:shadow-indigo-500/30">
            <span className="relative z-10">Ver todas las noticias</span>
            <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-indigo-700 to-purple-700 opacity-90 transition-transform duration-300 group-hover:translate-y-0"></span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
