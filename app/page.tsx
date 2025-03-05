"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars, OrbitControls } from "@react-three/drei";

import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import Promotions from "./components/Promotions";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import Newsletter from "./components/Newsletter";
import BlogSection from "./components/BlogSection";
import SocialProof from "./components/SocialProof";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
          <ambientLight intensity={0.5} />
          <Stars
            radius={300}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
          />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <HeroSection />
          <FeaturedProducts />
          <Categories />
          <Promotions />
          <Brands />
          <Testimonials />
          <WhyChooseUs />
          <Newsletter />
          <BlogSection />
          <SocialProof />
        </motion.div>
      </div>
    </div>
  );
}
