"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/lib/store"

const FEATURED_PLANTS = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45,
    image: "/monstera-deliciosa-plant.jpg",
    description: "Popular indoor plant with striking leaves",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 35,
    image: "/snake-plant-indoor.jpg",
    description: "Low-maintenance air purifying plant",
  },
  {
    id: 3,
    name: "Pothos Plant",
    price: 28,
    image: "/pothos-plant-hanging.jpg",
    description: "Trailing plant perfect for shelves",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 38,
    image: "/peace-lily-plant.jpg",
    description: "Elegant white flowering indoor plant",
  },
]

export default function Home() {
  const addItem = useCartStore((state) => state.addItem)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 bg-gradient-to-b from-secondary via-background to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary rounded-full blur-3xl opacity-20" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            Bring Nature <span className="text-primary">Home</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed text-pretty"
          >
            Discover carefully curated plants to transform your living space into a green sanctuary. Expert care tips
            included.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-lg">
                Shop Now
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="px-8 text-lg bg-transparent">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Promo Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative py-8 px-4 sm:px-6 lg:px-8 bg-accent/20"
      >
        <div className="max-w-7xl mx-auto glass rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">Special Offer</h2>
          <p className="text-lg text-foreground/80">
            Get <span className="font-bold text-primary">20% Off</span> on all indoor plants this week!
          </p>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Featured Plants</h2>
            <p className="text-lg text-foreground/60">Handpicked selections perfect for any space</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {FEATURED_PLANTS.map((plant) => (
              <motion.div key={plant.id} variants={itemVariants}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition glass">
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                      <Image src={plant.image || "/placeholder.svg"} alt={plant.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{plant.name}</h3>
                    <p className="text-foreground/60 text-sm mb-4 flex-1">{plant.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{plant.price}</span>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={()=>{
                        addItem({
                          id: plant.id,
                          name: plant.name,
                          price: plant.price,
                          image: plant.image
                        })
                      }} >Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
