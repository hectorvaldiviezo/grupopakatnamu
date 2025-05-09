"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ApplicationForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulación de envío de formulario
    setTimeout(() => {
      // Simulamos un 90% de éxito
      if (Math.random() > 0.1) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="postular" className="relative bg-white py-24">
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
            Postula <span className="text-[#01237e]">Ahora</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Completa el siguiente formulario para aplicar a nuestras vacantes
            disponibles o enviar tu CV espontáneo. Revisaremos cuidadosamente tu
            perfil y te contactaremos si hay una coincidencia.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white p-8 shadow-sm"
          >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  ¡Postulación Enviada!
                </h3>
                <p className="mb-6 max-w-md text-slate-600">
                  Hemos recibido tu postulación correctamente. Revisaremos tu
                  perfil y te contactaremos en caso de coincidir con nuestras
                  necesidades actuales.
                </p>
                <Button
                  onClick={() => setFormState("idle")}
                  className="bg-[#01237e] hover:bg-[#01237e]/90"
                >
                  Enviar otra postulación
                </Button>
              </div>
            ) : formState === "error" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                  <AlertCircle className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Error al enviar
                </h3>
                <p className="mb-6 max-w-md text-slate-600">
                  Ha ocurrido un error al enviar tu postulación. Por favor,
                  intenta nuevamente o contáctanos directamente a
                  rrhh@grupopakatnamu.com.
                </p>
                <Button
                  onClick={() => setFormState("idle")}
                  className="bg-[#f60404] hover:bg-[#f60404]/90"
                >
                  Intentar nuevamente
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombres</Label>
                    <Input
                      id="firstName"
                      placeholder="Ingresa tus nombres"
                      required
                      disabled={formState === "submitting"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellidos</Label>
                    <Input
                      id="lastName"
                      placeholder="Ingresa tus apellidos"
                      required
                      disabled={formState === "submitting"}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      disabled={formState === "submitting"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+51 123 456 789"
                      required
                      disabled={formState === "submitting"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Puesto al que postulas</Label>
                  <Select disabled={formState === "submitting"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un puesto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spontaneous">CV Espontáneo</SelectItem>
                      <SelectItem value="driver">
                        Conductor Profesional A3C
                      </SelectItem>
                      <SelectItem value="warehouse">
                        Asistente de Almacén
                      </SelectItem>
                      <SelectItem value="sales">
                        Asesor de Ventas Automotriz
                      </SelectItem>
                      <SelectItem value="logistics">
                        Especialista en Logística
                      </SelectItem>
                      <SelectItem value="maintenance">
                        Técnico de Mantenimiento
                      </SelectItem>
                      <SelectItem value="inventory">
                        Supervisor de Inventario
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Empresa de interés</Label>
                  <RadioGroup
                    defaultValue="all"
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="all"
                        id="all"
                        disabled={formState === "submitting"}
                      />
                      <Label htmlFor="all" className="cursor-pointer">
                        Cualquiera
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="transportes"
                        id="transportes"
                        disabled={formState === "submitting"}
                      />
                      <Label htmlFor="transportes" className="cursor-pointer">
                        Transportes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="deposito"
                        id="deposito"
                        disabled={formState === "submitting"}
                      />
                      <Label htmlFor="deposito" className="cursor-pointer">
                        Depósito
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="automotores"
                        id="automotores"
                        disabled={formState === "submitting"}
                      />
                      <Label htmlFor="automotores" className="cursor-pointer">
                        Automotores
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos brevemente sobre ti y por qué te interesa trabajar con nosotros"
                    rows={4}
                    disabled={formState === "submitting"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cv">Curriculum Vitae (PDF)</Label>
                  <div className="mt-1 flex items-center">
                    <label
                      htmlFor="cv"
                      className={`flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 px-6 py-4 transition-colors ${
                        fileName ? "bg-green-50" : "bg-slate-50"
                      } hover:bg-slate-100`}
                    >
                      <input
                        id="cv"
                        type="file"
                        accept=".pdf"
                        className="sr-only"
                        onChange={handleFileChange}
                        required
                        disabled={formState === "submitting"}
                      />
                      <div className="flex flex-col items-center">
                        <Upload
                          className={`mb-2 h-6 w-6 ${
                            fileName ? "text-green-500" : "text-slate-400"
                          }`}
                        />
                        <span className="text-sm font-medium text-slate-700">
                          {fileName
                            ? fileName
                            : "Haz clic para subir tu CV (PDF)"}
                        </span>
                        <span className="mt-1 text-xs text-slate-500">
                          Máximo 5MB
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#01237e] focus:ring-[#01237e]"
                    required
                    disabled={formState === "submitting"}
                  />
                  <Label htmlFor="privacy" className="text-sm text-slate-600">
                    Acepto la{" "}
                    <a
                      href="#"
                      className="font-medium text-[#01237e] hover:underline"
                    >
                      política de privacidad
                    </a>{" "}
                    y el tratamiento de mis datos personales para fines de
                    reclutamiento.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#f60404] hover:bg-[#f60404]/90"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting"
                    ? "Enviando..."
                    : "Enviar postulación"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
