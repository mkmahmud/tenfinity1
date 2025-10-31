import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm" />
            <span className="font-semibold text-lg tracking-tight">TENFINITY</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Shop
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>
            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-secondary">New Collection</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                  Minimal.
                  <br />
                  Crafted.
                  <br />
                  <span className="text-accent">Eternal.</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Modern essentials built to last. Premium materials, timeless silhouettes. Explore the new collection
                with elevated basics designed for real life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Shop Collection
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                  Explore Lookbook
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-8 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <span>Free shipping over $100</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <span>Easy returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <span>Ethically made</span>
                </div>
              </div>
            </div>

            {/* Right - Featured Image */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-accent/5 mix-blend-overlay" />
              <img
                src="/luxury-white-zip-up-hoodie-lifestyle-shot-premium-.jpg"
                alt="Featured clothing product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Premium Hoodie</p>
                    <p className="text-2xl font-bold text-foreground">$148</p>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Selection Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-muted-foreground mb-4">CHOOSE COLOR</h3>
              <div className="flex items-center gap-4">
                <button className="w-6 h-6 bg-primary rounded-full ring-2 ring-primary ring-offset-2" title="Navy" />
                <button
                  className="w-6 h-6 bg-accent rounded-full hover:ring-2 hover:ring-accent hover:ring-offset-2 transition-all"
                  title="Sage"
                />
                <button
                  className="w-6 h-6 bg-yellow-200 rounded-full hover:ring-2 hover:ring-yellow-200 hover:ring-offset-2 transition-all"
                  title="Cream"
                />
                <button
                  className="w-6 h-6 bg-blue-200 rounded-full hover:ring-2 hover:ring-blue-200 hover:ring-offset-2 transition-all"
                  title="Sky"
                />
                <span className="text-sm font-medium text-muted-foreground ml-auto">Selected: Sage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Collections</h2>
              <p className="text-lg text-muted-foreground">
                Curated essentials — elevated basics in refined fabrics. Tap a product to learn more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product cards will be inserted here as separate components */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative h-80 bg-muted rounded-xl overflow-hidden mb-4">
                    <img
                      src={`/luxury-minimalist-clothing-product-.jpg?height=400&width=300&query=luxury%20minimalist%20clothing%20product%20${i}`}
                      alt={`Product ${i}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Classic Essential</h3>
                  <p className="text-sm text-muted-foreground mb-3">Premium quality piece</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">$148</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-8">
              <Button
                variant="outline"
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary gap-2 bg-transparent"
              >
                Browse Full Collection
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Join Our Newsletter</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Discover new drops, styling tips, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground"
            />
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 TENFINITY. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
