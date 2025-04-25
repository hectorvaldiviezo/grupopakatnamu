"use client";

import { BASE_PATH } from "@/lib/config";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary text-white">
      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">
              <Image
                src="/gplogowhite.svg"
                alt="Grupo Pakatnamu Logo"
                width={180}
                height={60}
              />
            </div>
            <p className="mb-6 text-gray-400">
              Grupo empresarial comprometido con la excelencia y la satisfacción
              de nuestros clientes a través de soluciones integrales.
            </p>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/@GrupoPakatnamu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-gray-400 transition-colors duration-300 hover:bg-[#f60404] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                href="https://pe.linkedin.com/company/grupopakatnamu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-gray-400 transition-colors duration-300 hover:bg-[#f60404] hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold">Nuestras Empresas</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  target="_blank"
                  href="https://transportespakatnamu.com/"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Transportes Pakatnamu
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.depositopakatnamu.com.pe/"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Depósito Pakatnamu
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.automotorespakatnamu.com/"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Automotores Pakatnamu
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Novedades
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-[#f60404]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-3 min-h-5 min-w-5 text-[#f60404]" />
                <span>Carretera a Lambayeque Km. 4 Fundo Santo Tomas</span>
              </li>
              {/* <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-[#f60404]" />
                <span>+51 123 456 789</span>
              </li> */}
              <li className="flex items-start">
                <Mail className="mr-3 min-h-5 min-w-5 text-[#f60404]" />
                <span>info@grupopakatnamu.com</span>
              </li>
              <li className="flex items-start">
                <Link href="/libro-reclamaciones">
                  <Image
                    src={BASE_PATH + "/logo-libro.svg"}
                    width={150}
                    height={60}
                    alt="Transportes Pakatnamu"
                    className="py-2 px-4 ps-0"
                  />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-slate-800 py-8 text-center text-sm text-gray-400"
        >
          <p>© {currentYear} Grupo Pakatnamu. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
