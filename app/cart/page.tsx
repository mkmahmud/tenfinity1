"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [deliveryArea, setDeliveryArea] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = getTotalPrice();
  const baseShipping =
    deliveryArea === "inside" ? 60 : deliveryArea === "outside" ? 120 : 0;
  const shipping = isCouponApplied ? 0 : baseShipping;
  const finalTotal = subtotal + shipping;

  const [currentOrder, setCurrentOrder] = useState<any>(null); // store order for sending API

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
  };

  const applyCoupon = () => {
    const validCoupons = ["FREESHIP", "DELIVERYFREE"];
    if (validCoupons.includes(couponCode.toUpperCase())) {
      setIsCouponApplied(true);
      setCouponError("");
    } else {
      setIsCouponApplied(false);
      setCouponError("Invalid coupon code");
    }
  };

  const handlePlaceOrder = () => {

    setLoading(true);

    if (!orderDetails.name || !orderDetails.phone || !orderDetails.address || !deliveryArea || !size) {
      alert("Please fill in all required fields and select delivery area and size");
      return;
    }

    const order = {
      orderId: `ORD-${Date.now()}`,
      timestamp: new Date().toISOString(),
      customerDetails: orderDetails,
      items: items,
      subtotal: subtotal,
      shipping: shipping,
      total: finalTotal,
      paymentMethod: paymentMethod,
      status: "pending",
      deliveryArea: deliveryArea,
      size: size,
      couponApplied: isCouponApplied ? couponCode.toUpperCase() : null,
    };

    const existingOrders = JSON.parse(localStorage.getItem("tenfinity-orders") || "[]");
    existingOrders.push(order);
    localStorage.setItem("tenfinity-orders", JSON.stringify(existingOrders));

    console.log("[v0] Order placed:", order);

    clearCart();

    setCurrentOrder(order); // trigger API call in useEffect
    setOrderPlaced(true);
  };

  // ✅ Send order to backend whenever currentOrder changes
  useEffect(() => {
    if (!currentOrder) return;

    const hasSent = sessionStorage.getItem(`order-sent-${currentOrder.orderId}`);
    if (!hasSent) {
      sessionStorage.setItem(`order-sent-${currentOrder.orderId}`, "true");

      fetch("https://tenfinity-backend.vercel.app/api/v1/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Order sent to backend:", data);
          setLoading(false);
          router.push(`/order-success/${currentOrder.orderId}`);

        })
        .catch((err) => {
          console.error("Error sending order:", err);
          setLoading(false);
        });
    }
  }, [currentOrder, router]);

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
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
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
                  <div className="w-full sm:w-24 md:w-32 h-40 sm:h-24 md:h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Color: {item.color}
                      </p>
                      <p className="text-lg font-bold">৳{item.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.color, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-muted rounded-md transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQty = Math.max(1, Number.parseInt(e.target.value) || 1);
                          updateQuantity(item.productId, item.color, newQty);
                        }}
                        className="w-12 h-9 text-center border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.color, item.quantity + 1)
                        }
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

                  <div className="font-bold text-lg sm:text-right">
                    ৳{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Summary & Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Order Summary</h3>


                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 text-sm"
                  >
                    Apply
                  </button>
                </div>
                {couponError && <p className="text-xs text-destructive">{couponError}</p>}
                {isCouponApplied && <p className="text-xs text-accent">Free delivery applied!</p>}

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">৳{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `৳${shipping}`}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-xl">৳{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-lg p-6 border border-border space-y-4">


                {/* Delivery Area */}
                <div className="space-y-2 mb-2">
                  <p className="text-sm font-medium">Delivery Area</p>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="delivery"
                        value="inside"
                        checked={deliveryArea === "inside"}
                        onChange={(e) => setDeliveryArea(e.target.value)}
                        className="mr-2"
                      />
                      Inside Dhaka (৳60)
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="delivery"
                        value="outside"
                        checked={deliveryArea === "outside"}
                        onChange={(e) => setDeliveryArea(e.target.value)}
                        className="mr-2"
                      />
                      Outside Dhaka (৳120)
                    </label>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="space-y-2 mb-2">
                  <p className="text-sm font-medium">Size</p>
                  <div className="flex flex-col gap-2">
                    {["M", "L", "XL", "2XL"].map((s) => (
                      <label key={s} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="size"
                          value={s}
                          checked={size === s}
                          onChange={(e) => setSize(e.target.value)}
                          className="mr-2"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* Coupon Code Input */}


              {/* Checkout Form */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-4">
                <h3 className="font-semibold text-lg">Delivery Details</h3>

                <input
                  type="text"
                  name="name"
                  placeholder="নামঃ "
                  value={orderDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="ইমেইলঃ (Optional)"
                  value={orderDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="ফোন নম্বরঃ "
                  value={orderDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="অ্যাড্রেস/ ঠিকানাঃ "
                  value={orderDetails.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />

                {/* Payment Methods */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-3">Payment Method</p>
                  <div className="space-y-2">
                    <label
                      className="flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all"
                      style={{
                        borderColor:
                          paymentMethod === "cod" ? "var(--accent)" : "var(--border)",
                      }}
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
                        <p className="text-xs text-muted-foreground">
                          Pay when you receive your order
                        </p>
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
                        <p className="text-xs text-muted-foreground">
                          Secure payment with your card
                        </p>
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
                        <p className="text-xs text-muted-foreground">
                          Mobile wallet payment
                        </p>
                      </div>
                    </label>
                  </div>
                </div>



                <Button
                  onClick={handlePlaceOrder}
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={loading}
                >
                  {loading && (
                    <span className="w-5 h-5 border-2 border-t-2 border-white rounded-full animate-spin"></span>
                  )}
                  {loading
                    ? "Placing Order..."
                    : `Place Order with ${paymentMethod === "cod" ? "COD" : paymentMethod === "card" ? "Card" : "bKash"
                    }`}
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
  );
}
