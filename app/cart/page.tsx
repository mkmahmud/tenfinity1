"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const router = useRouter()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })

  const total = getTotalPrice()
  const shipping = total > 100 ? 0 : 10
  const finalTotal = total + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrderDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = () => {
    if (!orderDetails.name || !orderDetails.email || !orderDetails.phone || !orderDetails.address) {
      alert("Please fill in all required fields")
      return
    }

    // Log order to localStorage
    const order = {
      orderId: `ORD-${Date.now()}`,
      timestamp: new Date().toISOString(),
      customerDetails: orderDetails,
      items: items,
      subtotal: total,
      shipping: shipping,
      total: finalTotal,
      paymentMethod: paymentMethod,
      status: "pending",
    }

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("tenfinity-orders") || "[]")
    existingOrders.push(order)
    localStorage.setItem("tenfinity-orders", JSON.stringify(existingOrders))

    console.log("[v0] Order placed:", order)

    clearCart()
    router.push(`/order-success/${order.orderId}`)
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Your Cart is Empty</h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Explore our collection and add some premium essentials to your cart.
            </p>
            <Link href="/shop">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to shop</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 md:space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.color}`}
                  className="flex flex-col sm:flex-row gap-4 md:gap-6 bg-white rounded-lg p-4 md:p-6 border border-border"
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-24 md:w-32 h-40 sm:h-24 md:h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">Color: {item.color}</p>
                      <p className="text-lg font-bold">${item.price}</p>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.color, item.quantity - 1)}
                        className="p-1.5 hover:bg-muted rounded-md transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQty = Math.max(1, Number.parseInt(e.target.value) || 1)
                          updateQuantity(item.productId, item.color, newQty)
                        }}
                        className="w-12 h-9 text-center border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <button
                        onClick={() => updateQuantity(item.productId, item.color, item.quantity + 1)}
                        className="p-1.5 hover:bg-muted rounded-md transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.productId, item.color)}
                        className="ml-auto p-1.5 hover:bg-destructive/10 rounded-md transition-colors text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="font-bold text-lg sm:text-right">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Summary & Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Order Summary */}
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Order Summary</h3>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && <p className="text-xs text-accent">Free shipping applied!</p>}
                  <div className="border-t border-border pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-xl">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-4">
                <h3 className="font-semibold text-lg">Delivery Details</h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={orderDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={orderDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={orderDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={orderDetails.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={orderDetails.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={orderDetails.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>

                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={orderDetails.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                {/* Payment Methods - Added multiple payment options */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-3">Payment Method</p>
                  <div className="space-y-2">
                    <label
                      className="flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all"
                      style={{ borderColor: paymentMethod === "cod" ? "var(--accent)" : "var(--border)" }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <div>
                        <p className="font-semibold text-sm">Cash on Delivery</p>
                        <p className="text-xs text-muted-foreground">Pay when you receive your order</p>
                      </div>
                    </label>

                    <label
                      className="flex items-center p-3 rounded-lg border-2 cursor-not-allowed transition-all"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        disabled
                        className="mr-3"
                      />
                      <div>
                        <p className="font-semibold text-sm text-gray-500">Credit/Debit Card</p>
                        <p className="text-xs text-muted-foreground">Secure payment with your card</p>
                      </div>
                    </label>

                    <label
                      className="flex items-center p-3 rounded-lg border-2 cursor-not-allowed transition-all"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="bkash"
                        checked={paymentMethod === "bkash"}
                        disabled
                        className="mr-3"
                      />
                      <div>
                        <p className="font-semibold text-sm text-gray-500">bKash</p>
                        <p className="text-xs text-muted-foreground">Mobile wallet payment</p>
                      </div>
                    </label>

                  </div>
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Place Order with {paymentMethod === "cod" ? "COD" : paymentMethod === "card" ? "Card" : "bKash"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By placing an order, you agree to our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
