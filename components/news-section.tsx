"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { NewsResponse } from "./novedades/lib/novedades.interface";

interface NewsSectionProps {
  news: NewsResponse;
}

export default function NewsSection({ news }: NewsSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-24">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-100 opacity-80" />
      <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5" />

      {/* Dynamic grid lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="h-full w-[1px] bg-primary"
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
              className="h-[1px] w-full bg-primary"
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
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Novedades
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Mantente al día con las últimas noticias y actualizaciones de
            nuestras empresas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.data.map((item, index) => (
            <Link href={`/novedades/${item.id}`} key={item.id}>
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
                    alt={item.id.toString()}
                    fill
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-white">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center text-sm text-slate-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    {item.date}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-secondary">
                    {item.title}
                  </h3>

                  <p className="mb-4 text-slate-600">{item.description}</p>

                  <div className="flex items-center font-medium text-secondary">
                    Leer más
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                        hoveredCard === item.id ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/novedades">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full text-xl"
            >
              Ver todas las novedades
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
