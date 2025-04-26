"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <div className="relative size-32 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold bg-linear-to-r from-primary dark:from-primary to-secondary dark:to-blue-600 bg-clip-text text-transparent">
              404
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
          Página no encontrada
        </h1>

        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
          Por favor, verifica la URL o utiliza las opciones a continuación para
          continuar navegando.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 flex items-center justify-center"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Volver al inicio
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white flex items-center justify-center"
          >
            <Link href="/contactenos">
              <Search className="mr-2 h-5 w-5" />
              Buscar productos
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 w-full max-w-md">
          <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la página anterior
          </Button>
        </div>
      </div>
    </div>
  );
}
