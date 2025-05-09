"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "/" },
  // { name: "Empresas", href: "/#empresas" },
  // { name: "Nosotros", href: "/#nosotros" },
  { name: "Novedades", href: "/novedades" },
  // { name: "Contacto", href: "/#contacto" },
  { name: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 max-w-screen-xl mx-auto px-4 py-3 rounded-xl ${
        isScrolled
          ? "bg-gradient-to-r from-secondary via-secondary to-primary shadow-lg backdrop-blur-md m-2"
          : "bg-transparent text-secondary"
      }`}
    >
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <motion.div
            className="flex items-center justify-center gap-2 uppercase font-bold text-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={isScrolled ? "/gplogowhite.svg" : "/gplogo.svg"}
              alt="Grupo Pakatnamu"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <span className={`text-${isScrolled ? "white" : "secondary"}`}>
              Grupo Pakatnamu
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:block"
        >
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors duration-300 uppercase ${
                    isScrolled
                      ? "text-white hover:text-gray-300"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0)",
                "0 0 0 2px rgba(255, 255, 255, 0.2)",
                "0 0 0 0 rgba(255, 255, 255, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 z-0 flex flex-col bg-gradient-to-b from-secondary to-[#020c24] pt-20"
            >
              <div className="container mx-auto px-4">
                <nav className="py-8">
                  <ul className="flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center text-xl font-medium text-white"
                        >
                          <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href="#contacto"
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative block w-full overflow-hidden rounded-full bg-primary px-6 py-3 text-center text-base font-medium text-white transition-all duration-300"
                  >
                    <span className="relative z-10">Contáctanos</span>
                    <span className="absolute inset-0 -z-10 translate-y-full bg-secondary opacity-90 transition-transform duration-300 group-hover:translate-y-0"></span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="mt-auto py-8 text-center text-sm text-white/60"
                >
                  <p>© {new Date().getFullYear()} Grupo Pakatnamu</p>
                  <p className="mt-2">Todos los derechos reservados</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
