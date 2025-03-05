"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  const { products, loading } = useProducts();
  const topProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 6);

  const collections = [
    {
      title: "PC Gaming",
      image: "/images/featured/featured-1.jpg",
      description: "High-performance gaming rigs and accessories",
    },
    {
      title: "Console Gaming",
      image: "/images/featured/featured-4.jpg",
      description: "Latest consoles and exclusive titles",
    },
    {
      title: "Mobile Gaming",
      image: "/images/featured/featured-3.png",
      description: "Mobile gaming gear and peripherals",
    },
    {
      title: "Retro Gaming",
      image: "/images/featured/featured-5.jpg",
      description: "Classic consoles and vintage games",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      text: "Best gaming store in town! Their selection of PC components is unmatched, and the staff really knows their stuff.",
    },
    {
      name: "Sarah Chen",
      text: "Found some rare retro games I've been hunting for years. The prices are fair and the community events are awesome!",
    },
    {
      name: "Mike Rodriguez",
      text: "Their gaming setup advice was invaluable. Helped me build my dream streaming station within budget.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/banners/hero-banner.jpg"
            alt="Gaming setup with RGB lighting"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Level Up Your Game
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Your one-stop shop for all things gaming
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/collections">
              <Button
                size="lg"
                className="bg-[#f77426] text-white hover:bg-[#e56315]"
              >
                Browse Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Recent Products Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Gaming PCs",
                location: "Custom Builds",
                image: "/images/featured/featured-6.jpg",
                category: "Hardware",
              },
              {
                title: "Gaming Peripherals",
                location: "Pro Gear",
                image: "/images/featured/featured-7.jpg",
                category: "Accessories",
              },
              {
                title: "Latest Games",
                location: "New Releases",
                image: "/images/featured/featured-4.jpg",
                category: "Software",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity 
                  duration-300 flex flex-col justify-end p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80">{project.location}</p>
                    <span className="text-sm text-[#f77426] mt-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Gaming Categories Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Gaming Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "PC Gaming",
                description:
                  "High-end gaming rigs, components, and accessories",
                icon: "🖥️",
              },
              {
                step: "02",
                title: "Console Gaming",
                description:
                  "Latest consoles, controllers, and exclusive titles",
                icon: "🎮",
              },
              {
                step: "03",
                title: "Mobile Gaming",
                description:
                  "Mobile controllers, power banks, and gaming phones",
                icon: "📱",
              },
              {
                step: "04",
                title: "Retro Gaming",
                description: "Classic consoles, games, and collectibles",
                icon: "🕹️",
              },
            ].map((category, index) => (
              <motion.div
                key={category.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="group">
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl 
                      transition-shadow duration-300 h-full border border-gray-100 dark:border-gray-700"
                    >
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <div
                        className="absolute -top-4 -right-4 w-12 h-12 bg-[#f77426] rounded-full 
                      flex items-center justify-center text-white font-bold transform 
                      group-hover:rotate-12 transition-transform duration-300"
                      >
                        {category.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {category.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
                {index < 3 && (
                  <div
                    className="hidden md:block absolute top-1/2 left-full w-full 
                  transform -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-0.5 bg-gradient-to-r from-[#f77426] to-[#f77426]/50"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/categories">
              <Button
                size="lg"
                className="bg-[#f77426] hover:bg-[#e56315] text-white"
              >
                Explore Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most popular pieces that blend style, comfort, and
              functionality
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topProducts.map((product, index) => (
                <Link href={`/shop/${product.id}`} key={product.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                            Out of Stock
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2 dark:text-white">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xl font-bold text-[#f77426]">
                            Ksh. {product.price.toLocaleString()}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-[#f77426] group-hover:text-white transition-colors duration-300"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group">
                  <motion.img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {collection.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At 2b Gamers Store, we are passionate about gaming. We offer the
            latest gaming gear, expert advice, and a community-focused approach
            to help you find exactly what you need to enhance your gaming
            experience.
          </p>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Client Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Level Up?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Visit our store or get in touch with our gaming experts. We are here
            to help you find the perfect gaming setup that matches your style
            and budget.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#f77426] hover:bg-[#e56315] text-white"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom PC Builds",
                description:
                  "Custom gaming rigs built to your specifications and budget",
                icon: "🔧",
              },
              {
                title: "Tech Support",
                description:
                  "Expert technical support and hardware troubleshooting",
                icon: "🛠️",
              },
              {
                title: "Trade-In Program",
                description: "Trade your old gaming gear for store credit",
                icon: "🔄",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="group-hover:bg-[#f77426] group-hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
