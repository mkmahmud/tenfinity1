"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ArrowRight, Sparkles, Star, Truck, MapPin } from "lucide-react"
import { products, testimonials } from "@/lib/products"
import Image from "next/image"
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = products.slice(0, 4)
  const saleProducts = products.filter((p) => p.isSale).slice(0, 4)
  const newProducts = products.filter((p) => p.isNew).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}


      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-16 bg-background text-foreground overflow-hidden">


        <div className="relative z-10 w-full max-w-7xl mx-auto  ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6 relative"
            >
              {/* Small circular image top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-8 left-0 w-20 h-20 rounded-full overflow-hidden border-4 border-background shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop"
                  alt="Fashion"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="pt-16">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Spring Summer
                  <br />
                  New Arrival
                </h1>

                <p className="text-muted-foreground text-base max-w-md mb-2">
                  New collection Inspired by New Lifestyle to bring ideas life
                </p>
                <p className="text-muted-foreground text-base max-w-md mb-8">
                  Placing the power of design in everyone's hands.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-foreground text-background font-semibold rounded-md shadow-lg hover:shadow-xl transition-all"
                >
                  SHOP NOW
                </motion.button>
              </div>

              {/* Stats at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex gap-12 pt-12"
              >
                <div>
                  <p className="text-3xl font-bold">600+</p>
                  <p className="text-sm text-muted-foreground">STORES</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">160+</p>
                  <p className="text-sm text-muted-foreground">CLIENTS</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">2700+</p>
                  <p className="text-sm text-muted-foreground">PRODUCT</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Background decorative circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[600px] bg-accent/20 rounded-[50%] rotate-12" />
              </div>

              {/* Main large oval image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[380px] h-[520px] rounded-[50%] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop"
                  alt="Fashion Model"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right side text and small image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4"
              >
                {/* Decorative star */}
                <div className="text-4xl">✱</div>

                {/* Vertical text */}
                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-bold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                    INSPIRED
                  </p>
                  <p className="text-lg font-bold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                    BY NEW
                  </p>
                  <p className="text-lg font-bold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                    LIFESTYLE
                  </p>
                </div>

                {/* Divider line */}
                <div className="h-20 w-px bg-foreground/30" />

                {/* Arrow */}
                <div className="text-2xl">↓</div>

                {/* Small circular image at bottom */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-xl mt-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop"
                    alt="Fashion"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Curved line decoration */}
              <svg
                className="absolute top-20 right-32 w-48 h-48 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
              >
                <motion.path
                  d="M 20 100 Q 100 20, 180 100"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground/30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </svg>
            </motion.div>

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
