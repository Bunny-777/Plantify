"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AuthForm } from "@/components/auth-form"
import { motion } from "framer-motion"

export default function SignInPage() {
  const router = useRouter()
  const [successMessage, setSuccessMessage] = useState(false)

  const handleSignIn = (data: any) => {
    setSuccessMessage(true)
    setTimeout(() => {
      router.push("/")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        {successMessage ? (
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-3xl text-primary-foreground">✓</span>
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Welcome back!</h2>
            <p className="text-foreground/60">Redirecting you to home...</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Sign In to Plantify</h1>
              <p className="text-foreground/60">Welcome back! Sign in to your account</p>
            </div>

            {/* Glass Container */}
            <div className="glass border border-border/50 rounded-lg p-8">
              <AuthForm onSubmit={handleSignIn} />

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/30" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-foreground/60">Or</span>
                </div>
              </div>

              {/* Social Sign In */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full bg-transparent">
                  Sign in with Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Sign in with Apple
                </Button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-foreground/60 mt-6">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}
