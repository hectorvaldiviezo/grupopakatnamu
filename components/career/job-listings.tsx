"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { jobListings } from "@/data/job-listings";
import { Input } from "../ui/input";

export default function JobListings() {
  // Mostrar solo las 3 vacantes más recientes
  const featuredJobs = jobListings.slice(0, 3);

  return (
    <section id="vacantes" className="relative bg-white py-24">
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
            Vacantes <span className="text-[#f60404]">Disponibles</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Explora nuestras oportunidades laborales actuales y encuentra la
            posición que mejor se adapte a tus habilidades y aspiraciones
            profesionales.
          </p>
        </motion.div>

        {/* Destacados */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
            >
              <Link
                href={`/trabaja-con-nosotros/convocatorias/${job.id}`}
                className="block"
              >
                <div
                  className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: job.companyColor }}
                >
                  {job.company}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-[#01237e]">
                  {job.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {job.department}
                  </div>
                </div>
                <div className="flex items-center text-sm font-medium text-[#f60404]">
                  Ver detalles
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Buscador y enlace a todas las vacantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-xl bg-slate-50 p-8"
        >
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Encuentra tu oportunidad ideal
            </h3>
            <p className="mb-6 text-slate-600">
              Tenemos {jobListings.length} vacantes disponibles en nuestras
              diferentes empresas. Utiliza nuestro buscador avanzado para
              encontrar la que mejor se adapte a tu perfil.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                placeholder="Buscar por título o palabra clave"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 pl-10 text-slate-800 focus:border-[#01237e] focus:outline-none focus:ring-2 focus:ring-[#01237e]/20"
              />
            </div>
            <Link href="/trabaja-con-nosotros/convocatorias">
              <Button className="w-full bg-[#01237e] hover:bg-[#01237e]/90 sm:w-auto">
                Ver todas las vacantes
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
