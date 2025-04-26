"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { NewsResource } from "./lib/novedades.interface";
import { AnimatedElement } from "../animated-element";

export interface NoticiaDetalleProps {
  noticia: NewsResource;
}

export default function NoticiaDetalle({ noticia }: NoticiaDetalleProps) {
  const router = useRouter();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6 flex items-center text-secondary hover:text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Novedades
        </Button>

        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            {noticia.date}
          </div>

          <AnimatedElement
            key={noticia.id}
            animation="fade-left"
            delay={100}
            className="group"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              {noticia.title}
            </h1>
          </AnimatedElement>

          {/* <div className="relative aspect-16/9 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={noticia.image || "/placeholder.svg"}
              alt={noticia.title}
              fill
              className="object-cover"
              priority
            />
            */}

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: noticia.content }}
          />

          {/* {noticia.imagenes_adicionales &&
            noticia.imagenes_adicionales.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-secondary">
                  Galería de imágenes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {noticia.imagenes_adicionales.map(
                    (img: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-4/3 rounded-lg overflow-hidden shadow-md"
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${noticia.titulo} - Imagen ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )} */}

          <div className="mt-10 flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6">
            <div>
              {/* <h4 className="text-sm font-medium text-gray-500">
                Compartir esta noticia:
              </h4>
              <div className="flex space-x-4 mt-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Compartir</span>
                </Button>
              </div> */}
            </div>

            <Button
              variant="outline"
              className="text-secondary hover:text-primary"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Novedades
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
