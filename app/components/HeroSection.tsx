import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, ArrowRight, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdvancedHeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10"
    >
      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(99,102,241,0.2) 0%, transparent 70%)",
          animation: "pulse 4s infinite alternate",
        }}
      />

      {/* Hero Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 min-h-screen flex items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="glass-morphism p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Animated Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse opacity-30 pointer-events-none"></div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
          >
            Discover Futuristic Shopping
            <Zap
              className="inline-block ml-4 text-yellow-400 animate-pulse"
              size={48}
            />
          </motion.h1>

          <motion.p
            className="text-xl mb-8 text-primary-foreground/80 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            Immerse yourself in a cutting-edge shopping experience that blends
            technology, design, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="flex justify-center space-x-4 relative z-10"
          >
            <Button
              size="lg"
              className="group flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
            >
              <ShoppingCart className="mr-2 animate-bounce" />
              Shop Now
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary/50 hover:bg-primary/10 hover:scale-105 transition-transform flex items-center"
            >
              <Globe className="mr-2" />
              Explore Collections
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Additional Style for Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
