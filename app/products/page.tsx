"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("name")

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = PRODUCTS

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
  }, [selectedCategory, sortBy])

  const categories = [
    { value: null, label: "All Plants" },
    { value: "indoor", label: "Indoor" },
    { value: "outdoor", label: "Outdoor" },
    { value: "succulent", label: "Succulents" },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Our Collection</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover our handpicked selection of plants for every space and skill level
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Category Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value as any)}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  className={selectedCategory === cat.value ? "bg-primary text-primary-foreground" : ""}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Sort By</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "name", label: "Name" },
                { value: "price-asc", label: "Price: Low to High" },
                { value: "price-desc", label: "Price: High to Low" },
              ].map((option) => (
                <Button
                  key={option.value}
                  onClick={() => setSortBy(option.value as any)}
                  variant={sortBy === option.value ? "default" : "outline"}
                  className={sortBy === option.value ? "bg-primary text-primary-foreground" : ""}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-foreground/60 mb-6">
          Showing {filteredAndSortedProducts.length} plant{filteredAndSortedProducts.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg text-foreground/60">No plants found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
