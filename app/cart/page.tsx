"use client"

import { AnimatePresence } from "framer-motion"
import { useCartStore } from "@/lib/store"
import { CartItemComponent } from "@/components/cart-item"
import { CartSummary } from "@/components/cart-summary"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export default function CartPage() {
  const items = useCartStore((state) => state.items)

  if (items.length === 0) {
    return (
      <div className="min-h-[calc(100vh-16rem)] bg-background flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <ShoppingBag className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Your cart is empty</h1>
          <p className="text-foreground/60 mb-8">Add some beautiful plants to get started!</p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Start Shopping</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
          <p className="text-foreground/60">
            {items.length} item{items.length !== 1 ? "s" : ""} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <CartItemComponent key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <CartSummary />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
