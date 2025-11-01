"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { products } from "@/lib/products"
import { ArrowLeft, Check, Heart, Share2, Star, Truck, RotateCcw, Sparkles, Copy } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params?.id as string
  const product = products.find((p) => p.id === productId)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [activeTab, setActiveTab] = useState("description")
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copyNotification, setCopyNotification] = useState(false)
  const inWishlist = product ? isInWishlist(product.id) : false

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">Product not found</h1>
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/90">Back to Shop</Button>
          </Link>
        </div>
      </div>
    )
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

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      quantity: quantity,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlistToggle = () => {
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

  const shareableLink = `${typeof window !== "undefined" ? window.location.origin : ""}/products/${product.id}?ref=${Date.now()}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableLink)
    setCopyNotification(true)
    setTimeout(() => setCopyNotification(false), 2000)
  }

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareableLink)
    const text = encodeURIComponent(`Check out ${product.name} - ${product.description}`)

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    }

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400")
    }
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Shop</span>
        </Link>
      </div>

      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left - Product Image */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-muted rounded-xl overflow-hidden h-96 md:h-[600px]">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.isSale && product.discount && (
                  <div className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    -{product.discount}%
                  </div>
                )}
                {product.isNew && !product.isSale && (
                  <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    New
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </div>

            {/* Title and Rating */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array(Math.floor(product.rating))
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-bold">৳{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl md:text-2xl text-muted-foreground line-through">
                    ৳{product.originalPrice}
                  </span>
                )}
              </div>
              {product.discount && (
                <p className="text-accent font-semibold">
                  Save ৳{(product.originalPrice! - product.price).toFixed(2)} ({product.discount}%)
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Color</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? "border-foreground ring-2 ring-foreground ring-offset-2"
                        : "border-border"
                    } ${colorMap[color] || "bg-gray-400"}`}
                    title={color}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground capitalize">Selected: {selectedColor}</p>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="w-16 h-10 text-center border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base md:text-lg font-semibold"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Cart!
                  </>
                ) : (
                  "Add to Cart"
                )}
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleWishlistToggle}
                  variant="outline"
                  className={`border-2 h-12 transition-all ${
                    inWishlist
                      ? "border-red-500 bg-red-50 text-red-600 hover:bg-red-100"
                      : "border-border hover:bg-muted bg-transparent"
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${inWishlist ? "fill-current" : ""}`} />
                  {inWishlist ? "Wishlisted" : "Wishlist"}
                </Button>

                <div className="relative">
                  <Button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    variant="outline"
                    className="border-border hover:bg-muted bg-transparent h-12 w-full"
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <div className="absolute bottom-full right-0 mb-2 bg-white border border-border rounded-lg shadow-lg p-3 w-48 z-50">
                      <div className="space-y-2">
                        <button
                          onClick={handleCopyLink}
                          className="w-full text-left px-3 py-2 hover:bg-muted rounded text-sm font-medium flex items-center gap-2 transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                          {copyNotification ? "Copied!" : "Copy Link"}
                        </button>
                        <button
                          onClick={() => handleShare("twitter")}
                          className="w-full text-left px-3 py-2 hover:bg-muted rounded text-sm font-medium transition-colors"
                        >
                          Share on Twitter
                        </button>
                        <button
                          onClick={() => handleShare("facebook")}
                          className="w-full text-left px-3 py-2 hover:bg-muted rounded text-sm font-medium transition-colors"
                        >
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare("whatsapp")}
                          className="w-full text-left px-3 py-2 hover:bg-muted rounded text-sm font-medium transition-colors"
                        >
                          Share on WhatsApp
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold text-sm">Free shipping over ৳100</p>
                  <p className="text-xs text-muted-foreground">On orders over ৳100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold text-sm">Easy returns</p>
                  <p className="text-xs text-muted-foreground">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold text-sm">Ethically made</p>
                  <p className="text-xs text-muted-foreground">Premium quality materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="mb-12 border-b border-border">
          <div className="flex gap-8 overflow-x-auto">
            {["description", "specs", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-semibold text-sm md:text-base whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab ? "border-primary text-foreground" : "border-transparent text-muted-foreground"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-8 space-y-4">
            {activeTab === "description" && (
              <div className="space-y-4 text-muted-foreground">
                <p>{product.description}</p>
                <p>
                  This premium piece combines comfort and style with modern minimalist aesthetics. Crafted from the
                  finest materials, it's designed to last through seasons of wear.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Premium materials sourced responsibly</li>
                  <li>Timeless design that never goes out of style</li>
                  <li>Perfect fit with attention to detail</li>
                  <li>Versatile piece for any wardrobe</li>
                </ul>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Material</p>
                    <p className="text-muted-foreground">Premium Cotton Blend</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Care</p>
                    <p className="text-muted-foreground">Machine wash cold, lay flat to dry</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Fit</p>
                    <p className="text-muted-foreground">Modern relaxed fit</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Available Colors</p>
                    <p className="text-muted-foreground capitalize">{product.colors.join(", ")}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {product.reviews} customers have reviewed this product with an average rating of {product.rating}/5.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Write a Review</Button>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Related Products</h2>
              <p className="text-muted-foreground">You might also like these items</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  )
}
