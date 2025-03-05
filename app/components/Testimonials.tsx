"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  position: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Rodriguez",
    position: "Tech Entrepreneur",
    quote:
      "Revolutionary platform that redefines online shopping experience. The UI is incredibly intuitive and futuristic!",
    avatar: "/images/avatars/alex.png",
    rating: 5,
  },
  {
    name: "Emma Chen",
    position: "Product Designer",
    quote:
      "Seamless integration of design and technology. The animations and 3D elements are mind-blowing!",
    avatar: "/images/avatars/emma.png",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    position: "Digital Strategist",
    quote:
      "A game-changing e-commerce platform that sets new standards for user experience and interaction.",
    avatar: "/images/avatars/michael.png",
    rating: 4,
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          What Our Customers Say
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/10 rounded-2xl p-8 mb-8 glass-morphism relative"
          >
            <Quote className="absolute top-4 left-4 text-primary/20 w-16 h-16" />
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-8">
                <Image
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-primary/20"
                />
              </div>
              <div>
                <p className="text-xl italic mb-4 text-primary">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-primary">
                    {testimonials[activeTestimonial].name}
                  </span>
                  <span className="text-primary/70 mb-2">
                    {testimonials[activeTestimonial].position}
                  </span>
                  <div className="flex">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
