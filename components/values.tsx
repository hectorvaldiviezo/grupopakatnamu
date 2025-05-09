"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ValuesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-secondary"
          >
            Nuestros Principios
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              imgSrc:
                "https://milla.grupopakatnamu.com/storage/webImages/4/principios-mentalidad-de-dueno.png",
              title: "Mentalidad de dueño",
              description:
                "Asumimos el negocio como propio haciéndonos cargo, logrando que las cosas sucedan y gestionando las consecuencias de nuestras decisiones.",
            },
            {
              imgSrc:
                "https://milla.grupopakatnamu.com/storage/webImages/4/principios-tomamos-la-delantera.png",
              title: "Tomamos la delantera",
              description:
                "En Pakatnamu nos anticipamos a los hechos manteniéndonos proactivos, dinámicos y enérgicos en el cumplimiento de nuestro propósito.",
            },
            {
              imgSrc:
                "https://milla.grupopakatnamu.com/storage/webImages/4/principios-me-apasiona-conocer-mi-negocio.png",
              title: "Me apasiona conocer mi negocio",
              description:
                "Nos apasiona conocer profundamente sobre nuestro negocio para aportar desde nuestro rol en su crecimiento y desarrollo.",
            },
            {
              imgSrc:
                "https://milla.grupopakatnamu.com/storage/webImages/4/principios-fomento-con-el-ejemplo-nuestras-normativas.png",
              title: "Fomento con el ejemplo nuestras normativas",
              description:
                "Somos respetuosos y cuidadores de nuestras políticas y procedimientos, fomentamos el cumplimiento de las mismas y nunca nos desviamos de los lineamientos.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="size-24 rounded-full flex items-center justify-center mb-6 mx-auto relative">
                <Image
                  src={value.imgSrc}
                  alt={value.title}
                  fill
                  className="aspect-square object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
