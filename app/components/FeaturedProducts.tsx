"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Quantum Wireless Earbuds",
    price: 199.99,
    image: "/images/earbuds.png",
    description: "Next-gen audio experience with adaptive noise cancellation",
  },
  {
    id: 2,
    name: "Holographic Smart Display",
    price: 599.99,
    image: "/images/display.png",
    description: "Immersive 4K holographic display with AI assistance",
  },
  {
    id: 3,
    name: "Ergonomic Hover Chair",
    price: 799.99,
    image: "/images/chair.png",
    description: "Adaptive seating with zero-gravity suspension",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Featured Products
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary/10 rounded-2xl p-6 text-center relative overflow-hidden glass-morphism"
            >
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary/10"
                >
                  <Heart className="w-6 h-6" />
                </Button>
              </div>

              <div className="mb-6 flex justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-primary/70 mb-4">
                {product.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                <Button
                  size="lg"
                  className="flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ShoppingBag className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
