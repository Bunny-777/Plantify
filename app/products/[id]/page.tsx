"use client"

import { PRODUCTS } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = params as any
  const productId = resolvedParams.id ? Number.parseInt(resolvedParams.id, 10) : null
  const product = PRODUCTS.find((p) => p.id === productId)
  const addItem = useCartStore((state) => state.addItem)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product not found</h1>
          <Link href="/products">
            <Button className="bg-primary text-primary-foreground">Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
  }

  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:opacity-80 mb-8">
          <ChevronLeft className="w-5 h-5" />
          Back to Products
        </Link>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden bg-muted glass">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="text-sm font-semibold text-primary uppercase">{product.category}</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">{product.name}</h1>
              <p className="text-xl text-foreground/70 mb-6">{product.description}</p>

              {/* Care Info */}
              <div className="bg-secondary/30 p-4 rounded-lg mb-6">
                <p className="text-foreground/80">
                  <span className="font-semibold">Care Tips:</span> {product.careInfo}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-foreground/60">Difficulty</p>
                  <p className="font-semibold text-foreground capitalize">{product.difficulty}</p>
                </div>
                <div className="text-center p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-foreground/60">Water Needs</p>
                  <p className="font-semibold text-foreground capitalize">{product.waterNeeds}</p>
                </div>
                <div className="text-center p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-foreground/60">Price</p>
                  <p className="font-semibold text-primary text-2xl">${product.price}</p>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-secondary"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-secondary">
                    +
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                >
                  Add {quantity} to Cart
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Plants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div whileHover={{ y: -4 }} className="glass border border-border/50 rounded-lg p-4 cursor-pointer">
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-muted">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>
        <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-foreground/60 text-sm mb-3">{product.description}</p>
        <p className="text-xl font-bold text-primary">${product.price}</p>
      </motion.div>
    </Link>
  )
}
