"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#01237e] via-[#041e5c] to-[#020c24]"
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#f60404] opacity-20 blur-[100px]" />
        <div className="absolute right-[15%] top-[30%] h-72 w-72 rounded-full bg-[#01237e] opacity-30 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] h-80 w-80 rounded-full bg-[#f60404] opacity-20 blur-[150px]" />
      </div>

      {/* Dynamic grid lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"
              style={{
                opacity: i % 2 === 0 ? 0.3 : 0.1,
                transform: `translateX(${i * (100 / 6)}%)`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                opacity: i % 2 === 0 ? 0.3 : 0.1,
                transform: `translateY(${i * (100 / 6)}%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
            }}
            animate={{ y: [0, p.y], opacity: [0.7, 0.1, 0.7] }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Textured overlay */}
      <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-10 mix-blend-overlay" />

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 w-full overflow-hidden">
        <div
          className="absolute h-32 w-[200%] rotate-3 bg-white"
          style={{
            bottom: -80,
            left: -50,
            opacity: 0.05,
          }}
        />
        <div
          className="absolute h-32 w-[200%] rotate-[-3deg] bg-white"
          style={{
            bottom: -80,
            right: -50,
            opacity: 0.05,
          }}
        />
      </div>

      {/* 3D rotating cube */}
      <div
        className="absolute left-[10%] top-[20%] z-0 h-40 w-40 opacity-20 md:h-60 md:w-60"
        style={{
          perspective: "800px",
        }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 border-2 border-[#f60404]/30"
            style={{ transform: "translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#01237e]/30"
            style={{ transform: "rotateY(90deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#f60404]/30"
            style={{ transform: "rotateY(180deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#01237e]/30"
            style={{ transform: "rotateY(-90deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#f60404]/30"
            style={{ transform: "rotateX(90deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#01237e]/30"
            style={{ transform: "rotateX(-90deg) translateZ(30px)" }}
          />
        </motion.div>
      </div>

      {/* 3D rotating cube (right side) */}
      <div
        className="absolute right-[10%] top-[30%] z-0 h-40 w-40 opacity-20 md:h-60 md:w-60"
        style={{
          perspective: "800px",
        }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ rotateY: -360, rotateX: -360 }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 border-2 border-[#f60404]/30"
            style={{ transform: "translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#01237e]/30"
            style={{ transform: "rotateY(90deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#f60404]/30"
            style={{ transform: "rotateY(180deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#01237e]/30"
            style={{ transform: "rotateY(-90deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#f60404]/30"
            style={{ transform: "rotateX(90deg) translateZ(30px)" }}
          />
          <div
            className="absolute inset-0 border-2 border-[#01237e]/30"
            style={{ transform: "rotateX(-90deg) translateZ(30px)" }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-16 text-center">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-8"
          >
            <div className="absolute -inset-4 rounded-full bg-white/5 backdrop-blur-sm" />
            <Image
              src="/gplogowhite.svg"
              alt="Grupo Pakatnamu Logo"
              width={300}
              height={120}
              className="parallax relative"
              data-speed="0.5"
            />
            <motion.div
              className="absolute -inset-1 rounded-full opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
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
            <span className="inline-block text-[#f60404]">GRUPO</span>{" "}
            <span className="inline-block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              PAKATNAMU
            </span>
          </span>
        </motion.h1>

        <motion.div
          className="parallax relative mb-8 h-1 w-40 overflow-hidden rounded-full bg-white/20"
          data-speed="0.2"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 160, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#f60404] to-[#01237e]"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p
          className="parallax max-w-2xl text-xl text-gray-200"
          data-speed="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="font-light">Conectando</span>{" "}
          <span className="font-semibold">excelencia</span>{" "}
          <span className="font-light">a través de nuestras</span>{" "}
          <span className="font-semibold">empresas especializadas</span>
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button className="group relative overflow-hidden rounded-full bg-[#f60404] px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:shadow-[#f60404]/30">
            <span className="relative z-10">Descubrir</span>
            <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-[#01237e] to-[#01237e]/80 opacity-90 transition-transform duration-300 group-hover:translate-y-0"></span>
          </button>

          <button className="group relative overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:border-white/40 hover:shadow-white/5">
            <span className="relative z-10">Contacto</span>
            <span className="absolute inset-0 -z-10 scale-x-0 bg-white/10 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
          </button>
        </motion.div>
      </div>

      {/* Floating company icons */}
      <div className="absolute bottom-[20%] left-[10%] z-10 hidden md:block">
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
            src="/placeholder.svg?height=50&width=50"
            alt="Transportes Icon"
            width={50}
            height={50}
            className="opacity-80"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-[30%] right-[10%] z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 p-4 backdrop-blur-md"
          style={{
            boxShadow: "0 0 20px rgba(1, 35, 126, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Automotores Icon"
            width={50}
            height={50}
            className="opacity-80"
          />
        </motion.div>
      </div>

      <div className="absolute right-[30%] top-[20%] z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 p-4 backdrop-blur-md"
          style={{
            boxShadow:
              "0 0 20px rgba(246, 4, 4, 0.2), 0 0 20px rgba(1, 35, 126, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Deposito Icon"
            width={50}
            height={50}
            className="opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
