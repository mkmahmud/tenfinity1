"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

const ITEMS_PER_PAGE = 12

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const categories = ["All", "Tops", "Shirts", "Pants", "Outerwear"]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
    const endIdx = startIdx + ITEMS_PER_PAGE
    return filteredProducts.slice(startIdx, endIdx)
  }, [filteredProducts, currentPage])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when category changes
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <div className="space-y-2 md:space-y-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Shop All Products</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Browse our complete collection of premium essentials. {filteredProducts.length} products available
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <div className="flex gap-2 overflow-x-auto pb-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category ? "bg-primary hover:bg-primary/90" : "border-border bg-transparent"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Controls - Added pagination UI */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length}{" "}
                  products
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        variant={currentPage === page ? "default" : "outline"}
                        className={`w-10 h-10 p-0 ${
                          currentPage === page ? "bg-primary hover:bg-primary/90" : "border-border bg-transparent"
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    className="gap-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}
