"use client"

import { Button } from "@/components/ui/button"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"
import { ArrowLeft, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<string[]>([])

  const handleAddToCart = (item: any) => {
    addToCart({
      productId: item.productId,
      name: item.name,
      price: item.price,
      image: item.image,
      color: "default",
      quantity: 1,
    })
    setAddedItems([...addedItems, item.productId])
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.productId))
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Shop</span>
          </Link>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">My Wishlist</h1>
              <p className="text-muted-foreground mt-2">{items.length} items saved</p>
            </div>
            {items.length > 0 && (
              <Button
                onClick={clearWishlist}
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive/10 bg-transparent"
              >
                Clear Wishlist
              </Button>
            )}
          </div>
        </div>

        {/* Wishlist Items */}
        {items.length === 0 ? (
          <div className="bg-muted/30 rounded-lg p-12 text-center space-y-4">
            <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
            <p className="text-muted-foreground">Start adding items you love and they'll appear here.</p>
            <Link href="/shop">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <Link href={`/products/${item.productId}`}>
                  <div className="relative h-64 bg-muted overflow-hidden group">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-2">{item.name}</h3>
                    <p className="text-2xl font-bold mt-2">${item.price}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {addedItems.includes(item.productId) ? "Added!" : "Add to Cart"}
                    </Button>
                    <Button
                      onClick={() => removeFromWishlist(item.productId)}
                      variant="outline"
                      className="px-4 border-destructive text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
