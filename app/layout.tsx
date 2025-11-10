import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Plantify - Your Online Plant Store",
  description: "Discover beautiful plants for your home. Bring nature into your space with Plantify.",
  keywords: "plants, indoor plants, online store, plant care, nature",
  openGraph: {
    title: "Plantify - Your Online Plant Store",
    description: "Discover beautiful plants for your home",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#2e7d32",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
