"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Briefcase,
  Clock,
  Building,
  ArrowLeft,
  Share2,
  Bookmark,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { jobListings } from "@/data/job-listings";

export default function JobDetail({ id }: { id: string }) {
  const router = useRouter();
  const [job, setJob] = useState<(typeof jobListings)[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      const foundJob = jobListings.find((job) => job.id.toString() === id);
      setJob(foundJob || null);
      setIsLoading(false);

      if (!foundJob) {
        // Si no se encuentra el trabajo, redirigir a la página de convocatorias
        router.push("/trabaja-con-nosotros/convocatorias");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [id, router]);

  // Función para compartir la oferta
  const handleShare = async () => {
    setIsSharing(true);

    try {
      if (navigator.share) {
        await navigator.share({
          title: `Oferta de trabajo: ${job?.title}`,
          text: `Mira esta oferta de trabajo en ${job?.company}: ${job?.title}`,
          url: window.location.href,
        });
      } else {
        // Fallback para navegadores que no soportan Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert("Enlace copiado al portapapeles");
      }
    } catch (error) {
      console.error("Error al compartir:", error);
    } finally {
      setIsSharing(false);
    }
  };

  if (isLoading) {
    return (
      <section className="relative bg-white pt-32 pb-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="mb-6 h-8 w-48 rounded bg-slate-200"></div>
            <div className="mb-8 h-12 w-3/4 rounded bg-slate-200"></div>
            <div className="mb-8 flex flex-wrap gap-4">
              <div className="h-6 w-32 rounded bg-slate-200"></div>
              <div className="h-6 w-40 rounded bg-slate-200"></div>
              <div className="h-6 w-36 rounded bg-slate-200"></div>
            </div>
            <div className="mb-8 h-64 rounded-lg bg-slate-200"></div>
            <div className="h-12 w-48 rounded-full bg-slate-200"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!job) {
    return null; // El useEffect redirigirá si no se encuentra el trabajo
  }

  return (
    <section className="relative bg-white pt-32 pb-24">
      {/* Textured overlay */}
      {/* <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5 mix-blend-overlay" /> */}

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/trabaja-con-nosotros/convocatorias"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-[#01237e]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a convocatorias
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                className="mb-4"
                style={{
                  backgroundColor: job.companyColor,
                  color: "white",
                }}
              >
                {job.company}
              </Badge>

              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {job.title}
              </h1>

              <div className="mb-8 flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-slate-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-slate-400" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-slate-400" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <Building className="mr-2 h-5 w-5 text-slate-400" />
                  <span>{job.company}</span>
                </div>
              </div>

              <div className="mb-10 flex flex-wrap gap-3">
                <Button
                  onClick={() => router.push("/trabaja-con-nosotros#postular")}
                  className="bg-[#f60404] hover:bg-[#f60404]/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Postular ahora
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsSaved(!isSaved)}
                  className={isSaved ? "text-[#f60404]" : ""}
                >
                  <Bookmark className="mr-2 h-4 w-4" />
                  {isSaved ? "Guardado" : "Guardar"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleShare}
                  disabled={isSharing}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartir
                </Button>
              </div>

              <Tabs defaultValue="description" className="mb-10">
                <TabsList className="w-full">
                  <TabsTrigger value="description" className="flex-1">
                    Descripción
                  </TabsTrigger>
                  <TabsTrigger value="requirements" className="flex-1">
                    Requisitos
                  </TabsTrigger>
                  <TabsTrigger value="responsibilities" className="flex-1">
                    Funciones
                  </TabsTrigger>
                  <TabsTrigger value="benefits" className="flex-1">
                    Beneficios
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <div className="prose max-w-none text-slate-700">
                    <h3 className="text-xl font-bold text-slate-900">
                      Descripción del puesto
                    </h3>
                    <p className="mt-4">{job.description}</p>

                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                      <h4 className="font-medium text-slate-900">
                        Detalles adicionales:
                      </h4>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
                        <li>Fecha de publicación: {job.posted}</li>
                        <li>Modalidad: {job.type}</li>
                        <li>Área: {job.department}</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="mt-6">
                  <div className="prose max-w-none text-slate-700">
                    <h3 className="text-xl font-bold text-slate-900">
                      Requisitos
                    </h3>
                    <p className="mt-4">
                      Para tener éxito en este puesto, necesitarás:
                    </p>

                    <ul className="mt-4 space-y-4">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span
                            className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                            style={{ backgroundColor: job.companyColor }}
                          >
                            {index + 1}
                          </span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                      <p className="italic text-slate-600">
                        Valoramos la actitud y capacidad de aprendizaje tanto
                        como la experiencia previa.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="responsibilities" className="mt-6">
                  <div className="prose max-w-none text-slate-700">
                    <h3 className="text-xl font-bold text-slate-900">
                      Funciones y responsabilidades
                    </h3>
                    <p className="mt-4">
                      Como parte de nuestro equipo, serás responsable de:
                    </p>

                    <ul className="mt-4 space-y-4">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span
                            className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full text-white"
                            style={{ backgroundColor: job.companyColor }}
                          >
                            ✓
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="mt-6">
                  <div className="prose max-w-none text-slate-700">
                    <h3 className="text-xl font-bold text-slate-900">
                      Beneficios
                    </h3>
                    <p className="mt-4">
                      Ofrecemos un paquete competitivo que incluye:
                    </p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {job.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                        >
                          <div className="flex items-center">
                            <div
                              className="mr-3 flex h-8 w-8 items-center justify-center rounded-full text-white"
                              style={{ backgroundColor: job.companyColor }}
                            >
                              <span>✓</span>
                            </div>
                            <span className="font-medium text-slate-900">
                              {benefit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                      <p className="italic text-slate-600">
                        En Grupo Pakatnamu nos preocupamos por el bienestar y
                        desarrollo profesional de nuestros colaboradores.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  ¿Te interesa esta posición?
                </h3>
                <p className="mb-6 text-slate-700">
                  Si cumples con los requisitos y te apasiona lo que hacemos,
                  nos encantaría conocerte. Postula ahora y forma parte de
                  nuestro equipo.
                </p>
                <Button
                  onClick={() => router.push("/trabaja-con-nosotros#postular")}
                  className="w-full bg-[#f60404] hover:bg-[#f60404]/90 sm:w-auto"
                >
                  Postular a esta vacante
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-32 space-y-6"
            >
              {/* Información de la empresa */}
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Sobre la empresa
                </h3>
                <div className="mb-4 flex items-center">
                  <div
                    className="mr-4 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${job.companyColor}10` }}
                  >
                    <Image
                      src={
                        job.company === "Transportes Pakatnamu"
                          ? "/tplogo.svg"
                          : job.company === "Depósito Pakatnamu"
                          ? "/dplogo.svg"
                          : job.company === "Automotores Pakatnamu"
                          ? "/aplogo.svg"
                          : "/gplogotransparent.svg"
                      }
                      alt={job.company}
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">
                      {job.company}
                    </h4>
                    <p className="text-sm text-slate-600">
                      Parte de Grupo Pakatnamu
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-slate-700">
                  {job.company === "Transportes Pakatnamu" &&
                    "Empresa líder en soluciones logísticas de transporte, con una flota moderna y cobertura nacional."}
                  {job.company === "Depósito Pakatnamu" &&
                    "Especialistas en servicios de almacenamiento y gestión de inventario con la más alta seguridad."}
                  {job.company === "Automotores Pakatnamu" &&
                    "Concesionaria de vehículos con la mejor calidad y atención personalizada en el mercado."}
                </p>
                <Link
                  href="/#empresas"
                  className="text-sm font-medium text-[#01237e] hover:underline"
                >
                  Conocer más sobre la empresa
                </Link>
              </div>

              {/* Detalles del proceso */}
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Proceso de selección
                </h3>
                <ol className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <span
                      className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                      style={{ backgroundColor: job.companyColor }}
                    >
                      1
                    </span>
                    <span className="text-slate-700">
                      Postulación y revisión de CV
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                      style={{ backgroundColor: job.companyColor }}
                    >
                      2
                    </span>
                    <span className="text-slate-700">
                      Entrevista telefónica inicial
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                      style={{ backgroundColor: job.companyColor }}
                    >
                      3
                    </span>
                    <span className="text-slate-700">
                      Entrevista presencial o virtual
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                      style={{ backgroundColor: job.companyColor }}
                    >
                      4
                    </span>
                    <span className="text-slate-700">
                      Evaluaciones técnicas y psicométricas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                      style={{ backgroundColor: job.companyColor }}
                    >
                      5
                    </span>
                    <span className="text-slate-700">
                      Oferta y contratación
                    </span>
                  </li>
                </ol>
                <p className="mt-4 text-xs text-slate-500">
                  Tiempo estimado del proceso: 2-3 semanas
                </p>
              </div>

              {/* Trabajos similares */}
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Vacantes similares
                </h3>
                <div className="space-y-4">
                  {jobListings
                    .filter(
                      (j) => j.id !== job.id && j.department === job.department
                    )
                    .slice(0, 3)
                    .map((similarJob) => (
                      <Link
                        key={similarJob.id}
                        href={`/trabaja-con-nosotros/convocatorias/${similarJob.id}`}
                        className="block rounded-lg border border-slate-100 bg-slate-50 p-3 transition-colors hover:border-slate-200 hover:bg-slate-100"
                      >
                        <h4 className="font-medium text-slate-900">
                          {similarJob.title}
                        </h4>
                        <div className="mt-1 flex items-center text-xs text-slate-600">
                          <MapPin className="mr-1 h-3 w-3" />
                          {similarJob.location}
                        </div>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/trabaja-con-nosotros/convocatorias"
                  className="mt-4 inline-block text-sm font-medium text-[#01237e] hover:underline"
                >
                  Ver todas las vacantes
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
