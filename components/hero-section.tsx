"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const [particles, setParticles] = useState<
    {
      width: number;
      height: number;
      left: number;
      top: number;
      opacity: number;
      y: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.3,
      y: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const elements = containerRef.current.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-speed") || "0");
        const xOffset = x * speed;
        const yOffset = y * speed;
        (el as HTMLElement).style.transform = `translate(${xOffset * 50}px, ${
          yOffset * 50
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br bg-background"
    >
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-16 text-center">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative mb-8"
          >
            <div className="absolute -inset-4 rounded-full bg-white/5 backdrop-blur-sm" />
            <Image
              src="/gplogotransparent.svg"
              alt="Grupo Pakatnamu Logo"
              width={300}
              height={120}
              className="parallax relative"
              data-speed="0.5"
            />
            <motion.div
              className="absolute -inset-1 rounded-full opacity-0"
              animate={{
                opacity: [0, 0.1, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              style={{
                background: `linear-gradient(90deg, #01237e, #f60404)`,
              }}
            />
          </motion.div>
        </AnimatePresence>

        <motion.h1
          className="parallax mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
          data-speed="0.3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="inline-block">
            <span className="inline-block text-primary">GRUPO</span>{" "}
            <span className="inline-block bg-gradient-to-r from-secondary to-secondary/90 bg-clip-text text-transparent">
              PAKATNAMU
            </span>
          </span>
        </motion.h1>

        <motion.div
          className="parallax relative mb-4 h-1 w-40 overflow-hidden rounded-full bg-white/20"
          data-speed="0.2"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 160, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary to-secondary"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        {/* 
        <motion.p
          className="parallax max-w-2xl text-xl text-secondary/80"
          data-speed="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="font-light">Conectando</span>{" "}
          <span className="font-semibold">excelencia</span>{" "}
          <span className="font-light">a través de nuestras</span>{" "}
          <span className="font-semibold text-primary">
            empresas especializadas
          </span>
        </motion.p> */}

        <div className="flex py-8 gap-16">
          {/* Floating company icons */}
          <Link target="_blank" href="https://transportespakatnamu.com/">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 p-4 backdrop-blur-md"
              style={{
                boxShadow: "0 0 20px rgba(246, 4, 4, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Image
                src="/tplogo.svg"
                alt="Transportes Icon"
                width={50}
                height={50}
                className="opacity-80"
              />
            </motion.div>
          </Link>

          <Link target="_blank" href="https://www.depositopakatnamu.com.pe/">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 p-4 backdrop-blur-md"
              style={{
                boxShadow:
                  "0 0 20px rgba(246, 4, 4, 0.2), 0 0 20px rgba(1, 35, 126, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Image
                src="/dplogo.svg"
                alt="Deposito Icon"
                width={50}
                height={50}
                className="opacity-80"
              />
            </motion.div>
          </Link>

          <Link target="_blank" href="https://automotorespakatnamu.com/">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 p-4 backdrop-blur-md"
              style={{
                boxShadow: "0 0 20px rgba(1, 35, 126, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Image
                src="/aplogo.svg"
                alt="Automotores Icon"
                width={50}
                height={50}
                className="opacity-80"
              />
            </motion.div>
          </Link>
        </div>

        <motion.div
          className="mt-4 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link href="/#empresas">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full text-xl"
              onClick={() => {
                const element = document.getElementById("empresas");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Descubrir
            </Button>
          </Link>

          <Link href="/#contacto">
            <Button size="lg" className="rounded-full text-xl">
              Contacto
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
