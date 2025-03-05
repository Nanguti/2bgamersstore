"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  {
    name: "TechNova",
    logo: "/images/brands/technova.png",
  },
  {
    name: "Quantum Systems",
    logo: "/images/brands/quantum.png",
  },
  {
    name: "Cyber Innovations",
    logo: "/images/brands/cyber.png",
  },
  {
    name: "Nexus Tech",
    logo: "/images/brands/nexus.png",
  },
  {
    name: "Future Labs",
    logo: "/images/brands/future.png",
  },
  {
    name: "Digital Horizon",
    logo: "/images/brands/digital.png",
  },
];

export default function Brands() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Trusted Brands
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-6 rounded-2xl glass-morphism grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={80}
                className="max-h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
