"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://milla.grupopakatnamu.com/storage/webImages/4/principios-fomento-con-el-ejemplo-nuestras-normativas.png",
    alt: "Oficinas modernas de Grupo Pakatnamu",
    category: "Oficinas",
  },
  {
    src: "https://milla.grupopakatnamu.com/storage/webImages/4/empresas-transportes.png",
    alt: "Flota de transporte de Transportes Pakatnamu",
    category: "Transportes",
  },
  {
    src: "https://milla.grupopakatnamu.com/storage/webImages/2/libro-de-reclamaciones.png",
    alt: "Almacén de Depósito Pakatnamu",
    category: "Depósito",
  },
  {
    src: "https://milla.grupopakatnamu.com/storage/webImages/3/principios-los-resultados-son-mi-norte.png",
    alt: "Showroom de Automotores Pakatnamu",
    category: "Automotores",
  },
  {
    src: "https://milla.grupopakatnamu.com/storage/webImages/4/principios-tomamos-la-delantera.png",
    alt: "Equipo de trabajo colaborando",
    category: "Equipo",
  },
  {
    src: "https://milla.grupopakatnamu.com/storage/webImages/4/inicio-historia.png",
    alt: "Evento corporativo de Grupo Pakatnamu",
    category: "Eventos",
  },
];

export default function WorkplaceGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative bg-white py-24">
      {/* Textured overlay */}
      {/* <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5 mix-blend-overlay" /> */}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Nuestro <span className="text-[#01237e]">Ambiente</span> de Trabajo
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Conoce nuestras instalaciones y el ambiente donde podrías
            desarrollar tu carrera profesional. Un espacio diseñado para
            fomentar la colaboración, innovación y bienestar.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-sm"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogTitle className="sr-only" />
          <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              {selectedImage && (
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Imagen ampliada"
                  fill
                  className="object-contain"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </DialogContent>
        </Dialog>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            Nuestras instalaciones están diseñadas pensando en el bienestar y la
            productividad de nuestros colaboradores, creando un ambiente
            propicio para el desarrollo profesional y personal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
