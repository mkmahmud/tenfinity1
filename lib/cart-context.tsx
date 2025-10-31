"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  productId: string
  name: string
  price: number
  image: string
  color: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string, color: string) => void
  updateQuantity: (productId: string, color: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("tenfinity-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("[v0] Error loading cart from localStorage:", error)
      }
    }
    setIsHydrated(true)
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("tenfinity-cart", JSON.stringify(items))
    }
  }, [items, isHydrated])

  const addToCart = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productId === newItem.productId && item.color === newItem.color,
      )

      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === newItem.productId && item.color === newItem.color
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        )
      }

      return [...prevItems, newItem]
    })
  }

  const removeFromCart = (productId: string, color: string) => {
    setItems((prevItems) => prevItems.filter((item) => !(item.productId === productId && item.color === color)))
  }

  const updateQuantity = (productId: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.productId === productId && item.color === color ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
