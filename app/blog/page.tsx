"use client"

import { motion } from "framer-motion"
import { BLOG_POSTS } from "@/lib/blog"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">Plant Care & Wellness</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tips, tricks, and insights to help you grow your plant collection and create a healthier home
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all glass cursor-pointer overflow-hidden group">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-muted group-hover:opacity-90 transition">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
                        {post.title}
                      </h2>

                      <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

                      {/* Meta */}
                      <div className="space-y-2 text-xs text-foreground/50 border-t border-border/30 pt-4">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 mt-4 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
