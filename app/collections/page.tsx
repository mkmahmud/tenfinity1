"use client"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CollectionsPage() {
  const categories = ["Tops", "Shirts", "Pants", "Outerwear"]

  const getCategoryProducts = (category: string) => {
    return products.filter((p) => p.category === category)
  }

  const getCategoryDescription = (category: string) => {
    const descriptions: Record<string, string> = {
      Tops: "Essential tops crafted from premium materials. Versatile pieces for any occasion.",
      Shirts: "Elevated button-ups and casual shirts. Timeless staples for your wardrobe.",
      Pants: "Perfectly tailored bottoms designed for modern style. From casual to formal.",
      Outerwear: "Premium jackets and coats. Investment pieces for timeless elegance.",
    }
    return descriptions[category] || ""
  }

  const getCategoryImage = (category: string) => {
    const images: Record<string, string> = {
      Tops: "/premium-tops-collection.jpg",
      Shirts: "/elegant-shirts-collection.jpg",
      Pants: "/tailored-pants-collection.jpg",
      Outerwear: "/luxury-outerwear-coats.jpg",
    }
    return images[category] || "/placeholder.svg"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <div className="space-y-2 md:space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Collections</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Explore our curated collections of premium essentials designed for modern life.
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => {
            const categoryProducts = getCategoryProducts(category)
            return (
              <Link key={category} href={`/shop?category=${category}`}>
                <div className="group cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-6 bg-muted">
                    <img
                      src={getCategoryImage(category) || "/placeholder.svg"}
                      alt={category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold group-hover:text-accent transition-colors">
                        {category}
                      </h2>
                      <p className="text-sm text-accent mt-2">{categoryProducts.length} items</p>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {getCategoryDescription(category)}
                    </p>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group-hover:translate-x-1 transition-transform duration-300">
                      Explore Collection
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
