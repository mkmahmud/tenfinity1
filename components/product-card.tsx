"use client"

import type React from "react"

import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, Heart, BugPlayIcon, ShoppingBasket } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ProductCardProps {
  product: Product
  showQuickAdd?: boolean
}

export function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [addedToCart, setAddedToCart] = useState(false)
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      quantity: 1,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const router = useRouter();

  const handleShopNow = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    handleAddToCart(e)
    // Here you can add additional logic for "Shop Now", like redirecting to checkout
    router.push('/cart');
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
  }

  const colorMap: Record<string, string> = {
    white: "bg-white",
    black: "bg-black",
    navy: "bg-blue-900",
    sage: "bg-teal-700",
    cream: "bg-yellow-50",
    olive: "bg-green-700",
    charcoal: "bg-gray-800",
    blue: "bg-blue-600",
    indigo: "bg-blue-700",
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group cursor-pointer h-full flex flex-col border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl bg-white">
        {/* Image Container */}
        <div className="relative h-80 md:h-96 bg-muted rounded-xl overflow-hidden mb-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Sale Badge */}
          {product.isSale && product.discount && (
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
              -{product.discount}%
            </div>
          )}

          {/* New Badge */}
          {product.isNew && !product.isSale && (
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
              New
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20"
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${inWishlist ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
            />
          </button>

          {/* Quick Add Button */}
          {showQuickAdd && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button onClick={handleAddToCart} className="bg-white text-black hover:bg-white/90 gap-2">
                <ShoppingBag className="w-4 h-4" />
                {addedToCart ? "Added!" : "Add to Cart"}
              </Button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div
          className="flex-1 flex flex-col gap-3 cursor-pointer p-2"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors truncate">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Colors */}
          <div className="flex items-center gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setSelectedColor(color)
                }}
                className={`w-5 h-5 rounded-full border-2 transition-all ${selectedColor === color ? "border-foreground" : "border-border"
                  } ${colorMap[color] || "bg-gray-400"}`}
                title={color}
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-full">
            <Button
              onClick={handleShopNow}
              className="flex-1 bg-white text-black hover:text-white hover:bg-green-500/80 gap-2 cursor-pointer"
            >
              <ShoppingBasket className="w-4 h-4" />
              Buy Now
            </Button>
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-white text-black hover:bg-white/90 gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {addedToCart ? "Added!" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>

    </Link>
  )
}
