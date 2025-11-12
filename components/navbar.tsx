"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const itemsInCart = useCartStore((state) => state.items);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav className="sticky top-0 z-50 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-80 transition"
          >
            <span>🌿</span>
            <span>Plantify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemsInCart.length}
                </span>
              </Button>
            </Link>

            <div className="hidden sm:flex gap-2">
              <Link href="/signin">
                <Button variant="ghost" className="text-foreground/70 hover:text-primary">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground/70 hover:text-primary transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
