"use client"

import Image from "next/image"
import type { CartItem } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"
import { Trash2, Plus, Minus } from "lucide-react"
import { motion } from "framer-motion"

interface CartItemComponentProps {
  item: CartItem
}

export function CartItemComponent({ item }: CartItemComponentProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  return (
    <motion.div
      layout
      exit={{ opacity: 0, x: -100 }}
      className="flex gap-4 p-4 glass border border-border/50 rounded-lg"
    >
      {/* Image */}
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
        <p className="text-foreground/60 text-sm mb-2">₹{item.price.toFixed(2)} each</p>
        <div className="text-primary font-semibold">₹{(item.price * item.quantity).toFixed(2)}</div>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2 border border-border rounded-lg">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-2 hover:bg-secondary transition"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="px-3 font-semibold text-foreground w-10 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-2 hover:bg-secondary transition"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Remove */}
      <Button
        onClick={() => removeItem(item.id)}
        variant="ghost"
        size="icon"
        className="text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="w-5 h-5" />
      </Button>
    </motion.div>
  )
}
