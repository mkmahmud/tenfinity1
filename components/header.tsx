"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu, X, Heart, LogOut } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const { getTotalItems } = useCart()
  const { items: wishlistItems } = useWishlist()
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const totalItems = getTotalItems()

  const handleSignOut = async () => {
    await signOut()
    setUserMenuOpen(false)
    router.push("/")
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-sm" />
          <span className="font-semibold text-lg tracking-tight">TENFINITY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-accent transition-colors">
            Shop
          </Link>
          <Link href="/collections" className="text-sm font-medium hover:text-accent transition-colors">
            Collections
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="relative p-2 hover:bg-muted rounded-lg transition-colors group hidden sm:block"
          >
            <Heart className="w-5 h-5" />
            {wishlistItems.length > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors group">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User Menu - Added user authentication menu */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="hidden sm:flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg transition-colors text-sm font-medium"
              >
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex gap-2 items-center transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/shop" className="block px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              Shop
            </Link>
            <Link
              href="/collections"
              className="block px-4 py-2 text-sm font-medium hover:text-accent transition-colors"
            >
              Collections
            </Link>
            <Link href="/about" className="block px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/wishlist" className="block px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              Wishlist
            </Link>
            {user && (
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm font-medium hover:text-accent transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
