"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface WishlistItem {
  productId: string
  name: string
  price: number
  image: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("tenfinity-wishlist")
    if (savedWishlist) {
      setItems(JSON.parse(savedWishlist))
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage when items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tenfinity-wishlist", JSON.stringify(items))
    }
  }, [items, isLoaded])

  const addToWishlist = (item: WishlistItem) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.productId === item.productId)
      if (exists) return prev
      return [...prev, item]
    })
  }

  const removeFromWishlist = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId))
  }

  const isInWishlist = (productId: string) => {
    return items.some((i) => i.productId === productId)
  }

  const clearWishlist = () => {
    setItems([])
  }

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider")
  }
  return context
}
