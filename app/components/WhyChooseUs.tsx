"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  RefreshCw,
  HelpCircle,
  Globe,
  LucideIcon,
} from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Advanced encryption and fraud protection for safe transactions.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free worldwide shipping on orders over $200.",
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day hassle-free returns and money-back guarantee.",
  },
  {
    icon: RefreshCw,
    title: "Latest Technology",
    description: "Always up-to-date with the newest tech innovations.",
  },
  {
    icon: HelpCircle,
    title: "24/7 Support",
    description: "Round-the-clock customer support via multiple channels.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Delivering cutting-edge tech to customers worldwide.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                className="bg-secondary/10 rounded-2xl p-6 text-center glass-morphism group"
              >
                <div className="mb-4 flex justify-center">
                  <Icon
                    className="w-12 h-12 text-primary 
                    transition-transform duration-300 
                    group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-primary/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
