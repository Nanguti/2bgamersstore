"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readTime: number;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in E-Commerce",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing online shopping experiences.",
    image: "/images/blog/ai-ecommerce.jpg",
    readTime: 5,
    date: "June 15, 2024",
  },
  {
    id: 2,
    title: "Quantum Computing: Next Tech Frontier",
    excerpt:
      "Understanding the potential impact of quantum technologies on consumer electronics.",
    image: "/images/blog/quantum-computing.jpg",
    readTime: 7,
    date: "July 2, 2024",
  },
  {
    id: 3,
    title: "Sustainable Tech: Green Innovation",
    excerpt:
      "How modern technology is becoming more environmentally friendly and sustainable.",
    image: "/images/blog/sustainable-tech.jpg",
    readTime: 6,
    date: "July 20, 2024",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Tech Insights & Trends
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary/10 rounded-2xl overflow-hidden glass-morphism"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3 text-primary/70">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime} min read</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {post.title}
                </h3>

                <p className="text-primary/70 mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="flex items-center text-primary hover:text-primary/80 font-medium group"
                >
                  Read More
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
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
          <Link
            href="/blog"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
