"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function OrderSuccessPage() {
  const params = useParams();
  const orderId = params?.orderId as string;

  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;
    const orders = JSON.parse(localStorage.getItem("tenfinity-orders") || "[]");
    const currentOrder = orders.find((o: any) => o.orderId === orderId);
    setOrder(currentOrder);
    setLoading(false);

    if (currentOrder) {
      console.log("[v0] Order retrieved:", currentOrder);
    }
  }, [orderId]);

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Order not found</p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90">Return to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Success Message */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Order Placed Successfully!</h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg border border-border p-6 md:p-8 mb-8 space-y-8">
          {/* Order ID and Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order Number</p>
              <p className="text-lg md:text-xl font-bold">{order.orderId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order Date</p>
              <p className="text-lg md:text-xl font-bold">{new Date(order.timestamp).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4 pt-6 border-t border-border">
            <p className="font-semibold mb-4">What's Next?</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Order Confirmed</p>
                  <p className="text-sm text-muted-foreground">Your order has been received</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Processing</p>
                  <p className="text-sm text-muted-foreground">We're preparing your items for shipment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">On the Way</p>
                  <p className="text-sm text-muted-foreground">Your order will be delivered soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="pt-6 border-t border-border">
            <p className="font-semibold mb-4">Delivery Address</p>
            <div className="text-sm space-y-1 text-muted-foreground">
              <p className="font-medium text-foreground">{order.customerDetails.name}</p>
              <p>{order.customerDetails.address}</p>
              <p>
                {order.customerDetails.city}, {order.customerDetails.state} {order.customerDetails.zipCode}
              </p>
              <p className="mt-2">{order.customerDetails.phone}</p>
              <p>{order.customerDetails.email}</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="pt-6 border-t border-border">
            <p className="font-semibold mb-4">Order Items</p>
            <div className="space-y-3">
              {order.items.map((item: any) => (
                <div key={`${item.productId}-${item.color}`} className="flex justify-between text-sm">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span className="font-medium"> ৳{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="pt-6 border-t border-border">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span> ৳{order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                <span>Total</span>
                <span> ৳{order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">Payment Method</p>
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="font-semibold">Cash on Delivery</p>
              <p className="text-sm text-muted-foreground mt-1">
                Please pay the amount upon delivery:  ৳{order.total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <Link href="/shop" className="flex-1">
            <Button variant="outline" className="w-full border-border hover:bg-muted bg-transparent">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Back to Home</Button>
          </Link>
        </div>

        {/* Note */}
        <div className="mt-8 p-4 md:p-6 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to <span className="font-semibold">{order.customerDetails.email}</span>.
            You can track your order using the order number provided above.
          </p>
        </div>
      </div>
    </div>
  )
}
