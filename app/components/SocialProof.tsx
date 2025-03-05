"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Star } from "lucide-react";

interface SocialPost {
  id: number;
  image: string;
  likes: number;
  caption: string;
}

const socialPosts: SocialPost[] = [
  {
    id: 1,
    image: "/images/social/post1.jpg",
    likes: 1245,
    caption: "Unboxing the latest tech gadgets! 🚀 #TechLife",
  },
  {
    id: 2,
    image: "/images/social/post2.jpg",
    likes: 987,
    caption:
      "Workspace goals with our cutting-edge accessories 💻 #WorkFromHome",
  },
  {
    id: 3,
    image: "/images/social/post3.jpg",
    likes: 1567,
    caption: "Weekend tech vibes! Loving these new arrivals 🎧 #TechTrends",
  },
  {
    id: 4,
    image: "/images/social/post4.jpg",
    likes: 1122,
    caption: "Innovation meets design 🌟 #FutureIsnow",
  },
  {
    id: 5,
    image: "/images/social/post5.jpg",
    likes: 876,
    caption: "Minimal. Powerful. Elegant. 💡 #MinimalistTech",
  },
  {
    id: 6,
    image: "/images/social/post6.jpg",
    likes: 1456,
    caption: "Tech that inspires creativity 🚀 #InnovationUnleashed",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Our Community
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Join thousands of tech enthusiasts sharing their experiences and
            showcasing our latest products on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative w-full pt-[100%]">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="absolute inset-0 object-cover 
                    transition-transform duration-300 
                    group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Instagram className="w-8 h-8 mr-2" />
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {post.likes}
                      </span>
                    </div>
                    <p className="text-sm px-2 line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <Instagram className="w-6 h-6 mr-2" />
            Follow us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
