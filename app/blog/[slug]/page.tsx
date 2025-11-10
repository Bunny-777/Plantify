"use client"

import type React from "react"

import { BLOG_POSTS } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User, Clock, ChevronLeft } from "lucide-react"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: PageProps) {
  const resolvedParams = params as any
  const slug = resolvedParams.slug
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post not found</h1>
          <Link href="/blog">
            <Button className="bg-primary text-primary-foreground">Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:opacity-80 mb-8">
            <ChevronLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="mb-4">
            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative h-96 rounded-lg overflow-hidden bg-muted mb-12 glass"
        >
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <div className="text-lg leading-relaxed text-foreground/90 space-y-6">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-primary mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("**") && paragraph.includes(":")) {
                return (
                  <p key={index} className="text-foreground/80">
                    <strong className="text-foreground">{paragraph.split(":")[0].replace(/\*\*/g, "")}:</strong>
                    {paragraph.substring(paragraph.indexOf(":") + 1)}
                  </p>
                )
              }
              if (paragraph.startsWith("-")) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-foreground/80">
                    {paragraph
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} className="ml-2">
                          {line.replace("- ", "").replace(/\*\*/g, "")}
                        </li>
                      ))}
                  </ul>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-foreground/80">
                    {paragraph
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} className="ml-2">
                          {line.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "")}
                        </li>
                      ))}
                  </ol>
                )
              }
              return (
                <p key={index} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border-t border-border pt-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all glass cursor-pointer">
                    <CardContent className="p-4">
                      <div className="relative h-32 rounded-lg overflow-hidden bg-muted mb-3">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-foreground/60">{relatedPost.readTime} min read</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg ${className}`}>{children}</div>
}

function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
