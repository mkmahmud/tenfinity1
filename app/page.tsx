"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { products, testimonials } from "@/lib/products"

export default function Home() {
  const featuredProducts = products.slice(0, 4)
  const saleProducts = products.filter((p) => p.isSale).slice(0, 4)
  const newProducts = products.filter((p) => p.isNew).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse opacity-40" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-3 md:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full hover:border-secondary/50 transition-all duration-300">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent animate-spin-slow" />
                  <span className="text-xs md:text-sm font-medium text-secondary">New Collection Spring 25</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-tight">
                  Minimal.
                  <br />
                  Crafted.
                  <br />
                  <span className="inline-block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    Eternal.
                  </span>
                </h1>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                Modern essentials built to last. Premium materials, timeless silhouettes. Explore the new collection
                with elevated basics designed for real life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group transition-all duration-300 transform hover:scale-105"
                >
                  Shop Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted bg-transparent transition-all duration-300 transform hover:scale-105"
                >
                  Explore Lookbook
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-2 md:space-y-3 pt-6 md:pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <span>Free shipping over $100</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <span>Easy returns</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <span>Ethically made</span>
                </div>
              </div>
            </div>

            {/* Right - Featured Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden group animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-accent/5 mix-blend-overlay" />
              <img
                src="/luxury-white-zip-up-hoodie-lifestyle-shot-premium-.jpg"
                alt="Featured clothing product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg border border-white/20 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-between gap-2 md:gap-4">
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground">Premium Hoodie</p>
                    <p className="text-lg md:text-2xl font-bold text-foreground">$148</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Curated essentials — elevated basics in refined fabrics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sale" className="py-16 md:py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 md:space-y-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-2 md:space-y-3">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent/20 border border-accent/30 rounded-full">
                  <span className="text-xs md:text-sm font-semibold text-accent">Limited Time</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Spring Sale</h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-md">
                  Up to 20% off on selected premium pieces. Limited stock available.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary gap-2 bg-transparent w-fit"
              >
                View All Sale
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="new-arrivals" className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">New Arrivals</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Discover the latest additions to our premium collection.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 md:space-y-12">
            <div className="text-center space-y-2 md:space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Loved by our customers</h2>
              <p className="text-base md:text-lg text-muted-foreground">See what people are saying about TENFINITY</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
                >
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm md:text-base text-foreground flex-1">{testimonial.comment}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 md:mb-3">
                Browse Collections
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">Explore curated essentials by category</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {["Tops", "Shirts", "Pants", "Outerwear"].map((category) => (
                <div
                  key={category}
                  className="group cursor-pointer relative h-48 md:h-56 rounded-lg md:rounded-xl overflow-hidden bg-muted hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent group-hover:from-accent/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{category}</h3>
                      <p className="text-sm text-muted-foreground">Explore collection</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6 md:space-y-8">
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Join Our Newsletter</h2>
            <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Discover new drops, styling tips, and exclusive offers delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground text-sm md:text-base"
            />
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
