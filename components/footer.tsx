import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4 text-primary">
              <span>🌿</span>
              <span>Plantify</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Bringing nature home with carefully curated plants and expert care tips.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-foreground/60 hover:text-primary transition">
                  All Plants
                </Link>
              </li>
              <li>
                <Link href="/products?type=indoor" className="text-foreground/60 hover:text-primary transition">
                  Indoor Plants
                </Link>
              </li>
              <li>
                <Link href="/products?type=succulents" className="text-foreground/60 hover:text-primary transition">
                  Succulents
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-foreground/60">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@plantify.com</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span>NYC, United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">© 2025 Plantify. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground/60 hover:text-primary transition">
                Instagram
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition">
                Twitter
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
