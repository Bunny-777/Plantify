"use client"

import { useCartStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CartSummary() {
  const items = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)

  const subtotal = getTotal()
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="glass border border-border/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Order Summary</h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-foreground/70">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-foreground/70">
          <span>Tax (10%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-foreground/70">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t border-border pt-3 flex justify-between font-semibold text-foreground">
          <span>Total</span>
          <span className="text-primary text-xl">₹{total.toFixed(2)}</span>
        </div>
      </div>

      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg mb-3">
        <Link href="/checkout">Proceed to Checkout</Link>
      </Button>

      <Button asChild variant="outline" className="w-full bg-transparent">
        <Link href="/products">Continue Shopping</Link>
      </Button>
    </div>
  )
}
