"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, ArrowUp, Facebook } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [isScrolling, setIsScrolling] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer Content - Redesigned with better spacing and visual hierarchy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">TENFINITY</h2>
              <p className="text-sm text-background/70 mt-2">Minimal. Crafted. Eternal.</p>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Premium essentials designed for real life. Timeless pieces that last.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="https://www.instagram.com/tenfinity2/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/tenfinity2"
                target="_blank"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@tenfinity2?_r=1&_t=ZS-912RYlZaGN6"
                target="_blank"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24" fill="white">
                  <path d="M194.4 72.3c-13.1-.6-25.7-5.2-36.1-12.7v67.5c0 31.6-25.6 57.3-57.3 57.3-31.6 0-57.3-25.6-57.3-57.3s25.6-57.3 57.3-57.3c7.3 0 14.3 1.3 20.9 3.8v-22.6c-6.8-1.8-14-2.7-21.5-2.7C61 40.3 24 77.2 24 120.7c0 43.5 35.4 78.8 78.8 78.8 43.5 0 78.8-35.4 78.8-78.8V70.9c9.7 7.4 21.7 11.4 34.4 11.4V72.3z" />
                </svg>


              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-base">Shop</h4>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <Link href="/shop" className="text-background/80 hover:text-accent transition-colors duration-300">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-background/80 hover:text-accent transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-background/80 hover:text-accent transition-colors duration-300">
                  Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-background/80 hover:text-accent transition-colors duration-300"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-base">Company</h4>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-base">Support</h4>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-base">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-background/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:support@tenfinity.com">tenfinity2@gmail.com</a>
              </li>
              <li className="flex gap-3 text-background/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+15551234567">+880 1624 572921</a>
              </li>
              <li className="flex gap-3 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Mirpur, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10" />

        {/* Bottom Footer - Added scroll to top button */}
        <div className="pt-8 md:pt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">&copy; 2025 TENFINITY. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8 text-sm">
            <a href="#" className="text-background/70 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-accent text-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
