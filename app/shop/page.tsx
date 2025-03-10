"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Star, ArrowRight, SlidersHorizontal } from "lucide-react";
import { useProducts, useCategories } from "@/hooks/useProducts";
import { ProductFilters, ProductCategory } from "@/types/shop";
import Link from "next/link";
import Image from "next/image";
import { debounce } from "lodash";

const Shop = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    category: undefined,
    priceRange: { min: 0, max: 10000 },
    inStock: undefined,
    sortBy: "rating",
    searchQuery: "",
    page: 1,
  });
  const [showFilters, setShowFilters] = useState(false);

  const {
    products,
    pagination,
    loading: productsLoading,
    error: productsError,
  } = useProducts(filters);
  const { categories, loading: categoriesLoading } = useCategories();

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      setFilters((prev) => ({ ...prev, searchQuery }));
    }, 300),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleCategoryChange = (category: ProductCategory | undefined) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const handleSortChange = (sortBy: ProductFilters["sortBy"]) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Shop Our Collection
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Discover curated pieces that transform spaces
          </motion.p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-12">
            <div className="w-full md:w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white
                   dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleSearch}
                  defaultValue={filters.searchQuery}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <div
                className={`w-full md:w-auto flex flex-wrap gap-2 ${
                  showFilters ? "block" : "hidden md:flex"
                }`}
              >
                {!categoriesLoading &&
                  categories &&
                  Object.entries(categories).map(([key, category]) => (
                    <Button
                      key={key}
                      variant={filters.category === key ? "default" : "outline"}
                      onClick={() =>
                        handleCategoryChange(
                          filters.category === key
                            ? undefined
                            : (key as ProductCategory)
                        )
                      }
                    >
                      {category.name}
                    </Button>
                  ))}

                <select
                  className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  onChange={(e) =>
                    handleSortChange(e.target.value as ProductFilters["sortBy"])
                  }
                  value={filters.sortBy}
                >
                  <option value="rating">Top Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {productsLoading ? (
            <div>Loading...</div>
          ) : productsError ? (
            <div>Error: {productsError}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link href={`/shop/${product.id}`} key={product.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                            Ksh.{product.price.toLocaleString()}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {product.description.slice(0, 100)}...
                        </p>
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

          {/* Pagination */}
          {pagination && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={
                      page === pagination.currentPage ? "default" : "outline"
                    }
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
