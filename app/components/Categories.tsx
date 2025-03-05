"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Smartphone,
  Headphones,
  Watch,
  Gamepad2,
  Camera,
  LucideIcon,
} from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  color: string;
}

const categories: Category[] = [
  {
    name: "Computers",
    icon: Cpu,
    color: "text-blue-500",
  },
  {
    name: "Smartphones",
    icon: Smartphone,
    color: "text-green-500",
  },
  {
    name: "Audio",
    icon: Headphones,
    color: "text-purple-500",
  },
  {
    name: "Wearables",
    icon: Watch,
    color: "text-red-500",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    color: "text-orange-500",
  },
  {
    name: "Cameras",
    icon: Camera,
    color: "text-indigo-500",
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Shop by Category
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl glass-morphism cursor-pointer group"
              >
                <div
                  className={`mb-4 ${category.color} 
                  transition-transform duration-300 
                  group-hover:scale-125 group-hover:rotate-12`}
                >
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {category.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
