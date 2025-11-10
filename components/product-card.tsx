"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/lib/store"
import { motion } from "framer-motion"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link href={`/products/${product.id}`}>
        <Card className="h-full border-border/50 hover:border-primary/30 transition-all glass cursor-pointer">
          <CardContent className="p-4 flex flex-col h-full">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground mb-1">{product.name}</h3>
              <p className="text-foreground/60 text-sm mb-3">{product.description}</p>

              <div className="flex gap-2 mb-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{product.difficulty}</span>
                <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded">
                  {product.waterNeeds} water
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Button onClick={handleAddToCart} className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
        Add to Cart
      </Button>
    </motion.div>
  )
}
