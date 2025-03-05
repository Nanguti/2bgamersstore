"use client";

import { motion } from "framer-motion";
import {
  Timer,
  Tag,
  Percent,
  Gift,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Promotion {
  id: number;
  title: string;
  discount: number;
  description: string;
  code: string;
  endTime: Date;
  background: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Summer Tech Blowout",
    discount: 30,
    description: "Massive discounts on latest tech gadgets and accessories",
    code: "SUMMER30",
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    background: "from-blue-500/10 to-purple-500/10",
  },
  {
    id: 2,
    title: "New User Special",
    discount: 20,
    description: "First-time buyers get exclusive welcome discount",
    code: "WELCOME20",
    endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    background: "from-green-500/10 to-teal-500/10",
  },
];

export default function Promotions() {
  const [mounted, setMounted] = useState(false);
  const [activePromotion, setActivePromotion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      const now = new Date();
      const promotion = promotions[activePromotion];
      const diff = promotion.endTime.getTime() - now.getTime();

      if (diff > 0) {
        setTimeRemaining({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [activePromotion, mounted]);

  const nextPromotion = () => {
    setActivePromotion((prev) => (prev + 1) % promotions.length);
  };

  const prevPromotion = () => {
    setActivePromotion((prev) =>
      prev === 0 ? promotions.length - 1 : prev - 1
    );
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Special Offers
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {promotions.map(
            (promotion, index) =>
              activePromotion === index && (
                <motion.div
                  key={promotion.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-r ${promotion.background} rounded-2xl p-8 mb-8 glass-morphism relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary/20 rounded-full p-2">
                      <Percent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-4 md:mb-0 md:mr-8">
                      <Gift className="w-24 h-24 text-primary/50 animate-pulse" />
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <Tag className="mr-3 text-primary" size={32} />
                        <h3 className="text-3xl font-bold text-primary">
                          {promotion.title}
                        </h3>
                      </div>

                      <p className="text-xl text-primary/80 mb-4">
                        {promotion.description}
                      </p>

                      <div className="flex items-center mb-4">
                        <Timer className="mr-3 text-primary" size={24} />
                        <div className="flex space-x-4">
                          {Object.entries(timeRemaining).map(
                            ([unit, value]) => (
                              <div
                                key={unit}
                                className="bg-primary/10 rounded-lg p-2 text-center"
                              >
                                <span className="text-2xl font-bold text-primary block">
                                  {value.toString().padStart(2, "0")}
                                </span>
                                <span className="text-xs text-primary/70 uppercase">
                                  {unit}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Button
                          size="lg"
                          className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          Shop Now
                        </Button>
                        <div>
                          <p className="text-sm text-primary/70">
                            Use Code:{" "}
                            <span className="font-bold">{promotion.code}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevPromotion}
              className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPromotion}
              className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePromotion(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activePromotion ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
