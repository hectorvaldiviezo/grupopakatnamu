"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Filter,
  ChevronRight,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { jobListings } from "@/data/job-listings";

export default function JobSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>(
    searchParams.get("departments")?.split(",") || []
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    searchParams.get("locations")?.split(",") || []
  );
  const [experienceRange, setExperienceRange] = useState([0, 10]);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Obtener ubicaciones y departamentos únicos para los filtros
  const departments = Array.from(
    new Set(jobListings.map((job) => job.department))
  );
  const locations = Array.from(
    new Set(jobListings.map((job) => job.location.split(",")[0]))
  );

  // Filtrar trabajos según los criterios seleccionados
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(job.department);

    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location.split(",")[0]);

    // Simulamos un filtro de experiencia (asumiendo que cada trabajo tiene un requisito de experiencia)
    const jobExperience = job.requirements.find((req) => req.includes("años"))
      ? Number.parseInt(
          job.requirements.find((req) => req.includes("años"))!.match(/\d+/)![0]
        )
      : 0;

    const matchesExperience =
      jobExperience >= experienceRange[0] &&
      jobExperience <= experienceRange[1];

    return (
      matchesSearch && matchesDepartment && matchesLocation && matchesExperience
    );
  });

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Actualizar la URL con los parámetros de búsqueda
  const updateSearchParams = () => {
    const params = new URLSearchParams();

    if (searchTerm) params.set("q", searchTerm);
    if (selectedDepartments.length > 0)
      params.set("departments", selectedDepartments.join(","));
    if (selectedLocations.length > 0)
      params.set("locations", selectedLocations.join(","));

    router.push(`/trabaja-con-nosotros/convocatorias?${params.toString()}`, {
      scroll: false,
    });
  };

  // Manejar la búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams();
  };

  // Manejar cambios en los filtros de departamento
  const handleDepartmentChange = (department: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    );
  };

  // Manejar cambios en los filtros de ubicación
  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartments([]);
    setSelectedLocations([]);
    setExperienceRange([0, 10]);
    router.push("/trabaja-con-nosotros/convocatorias");
  };

  return (
    <section className="relative bg-white pt-32 pb-24">
      {/* Textured overlay */}
      {/* <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5 mix-blend-overlay" /> */}

      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Convocatorias <span className="text-[#f60404]">Laborales</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Explora nuestras oportunidades laborales actuales y encuentra la
            posición que mejor se adapte a tus habilidades y aspiraciones
            profesionales.
          </p>
        </motion.div>

        <div className="mb-8">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-4 md:flex-row"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                placeholder="Buscar por título, palabra clave o descripción"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="bg-[#01237e] hover:bg-[#01237e]/90"
            >
              Buscar
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filtros
              {(selectedDepartments.length > 0 ||
                selectedLocations.length > 0) && (
                <Badge className="ml-1 bg-[#f60404]">
                  {selectedDepartments.length + selectedLocations.length}
                </Badge>
              )}
            </Button>
          </form>
        </div>

        {/* Filtros avanzados */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-slate-900">
                Filtros avanzados
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-[#f60404] hover:text-[#f60404]/80"
              >
                Limpiar filtros
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Filtro por empresa */}
              <div>
                <h4 className="mb-3 font-medium text-slate-800">Empresa</h4>
                <div className="space-y-2">
                  {departments.map((department) => (
                    <div
                      key={department}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`department-${department}`}
                        checked={selectedDepartments.includes(department)}
                        onCheckedChange={() =>
                          handleDepartmentChange(department)
                        }
                      />
                      <label
                        htmlFor={`department-${department}`}
                        className="cursor-pointer text-sm text-slate-700"
                      >
                        {department}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtro por ubicación */}
              <div>
                <h4 className="mb-3 font-medium text-slate-800">Ubicación</h4>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox
                        id={`location-${location}`}
                        checked={selectedLocations.includes(location)}
                        onCheckedChange={() => handleLocationChange(location)}
                      />
                      <label
                        htmlFor={`location-${location}`}
                        className="cursor-pointer text-sm text-slate-700"
                      >
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtro por años de experiencia */}
              <div>
                <h4 className="mb-3 font-medium text-slate-800">
                  Años de experiencia
                </h4>
                <div className="px-2">
                  <Slider
                    defaultValue={experienceRange}
                    min={0}
                    max={10}
                    step={1}
                    value={experienceRange}
                    onValueChange={setExperienceRange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{experienceRange[0]} años</span>
                    <span>
                      {experienceRange[1]} años
                      {experienceRange[1] === 10 ? "+" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={() => {
                  updateSearchParams();
                  setShowFilters(false);
                }}
                className="bg-[#01237e] hover:bg-[#01237e]/90"
              >
                Aplicar filtros
              </Button>
            </div>
          </motion.div>
        )}

        {/* Resultados de búsqueda */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium text-slate-900">
            {isLoading
              ? "Buscando..."
              : `${filteredJobs.length} convocatorias encontradas`}
          </h2>
          {(selectedDepartments.length > 0 ||
            selectedLocations.length > 0 ||
            searchTerm) && (
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Búsqueda: {searchTerm}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => {
                      setSearchTerm("");
                      updateSearchParams();
                    }}
                  />
                </Badge>
              )}
              {selectedDepartments.map((dept) => (
                <Badge
                  key={dept}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  {dept}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => {
                      handleDepartmentChange(dept);
                      updateSearchParams();
                    }}
                  />
                </Badge>
              ))}
              {selectedLocations.map((loc) => (
                <Badge
                  key={loc}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  {loc}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => {
                      handleLocationChange(loc);
                      updateSearchParams();
                    }}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {isLoading ? (
          // Skeleton loader
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex animate-pulse flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div className="w-full">
                    <div className="mb-2 h-4 w-20 rounded bg-slate-200"></div>
                    <div className="mb-2 h-6 w-3/4 rounded bg-slate-200"></div>
                    <div className="flex flex-wrap gap-4">
                      <div className="h-4 w-32 rounded bg-slate-200"></div>
                      <div className="h-4 w-24 rounded bg-slate-200"></div>
                      <div className="h-4 w-28 rounded bg-slate-200"></div>
                    </div>
                  </div>
                  <div className="h-4 w-24 rounded bg-slate-200"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <Link
                  href={`/trabaja-con-nosotros/convocatorias/${job.id}`}
                  className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
                >
                  <div>
                    <Badge
                      className="mb-2"
                      style={{
                        backgroundColor: job.companyColor,
                        color: "white",
                      }}
                    >
                      {job.company}
                    </Badge>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-[#01237e]">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="mr-1 h-4 w-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-[#f60404]">
                    Ver detalles
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Filter className="mx-auto mb-4 h-12 w-12 text-slate-400" />
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                No se encontraron vacantes
              </h3>
              <p className="text-slate-600">
                No hay vacantes que coincidan con tus criterios de búsqueda.
                Intenta con otros filtros o envía tu CV espontáneo.
              </p>
              <Button
                className="mt-6 bg-[#01237e] hover:bg-[#01237e]/90"
                onClick={clearFilters}
              >
                Limpiar filtros
              </Button>
            </motion.div>
          </div>
        )}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl bg-slate-50 p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-slate-900">
            ¿No encuentras la vacante ideal?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-slate-600">
            Si no encuentras una posición que se ajuste a tu perfil pero estás
            interesado en formar parte de nuestro equipo, envíanos tu CV
            espontáneo y te tendremos en cuenta para futuras oportunidades.
          </p>
          <Link
            href="/trabaja-con-nosotros#postular"
            className="inline-flex items-center font-medium text-[#f60404] hover:underline"
          >
            Enviar CV espontáneo
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
