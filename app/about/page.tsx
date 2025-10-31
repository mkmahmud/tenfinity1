import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">About TENFINITY</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              We believe in timeless fashion that transcends trends. Our mission is to create minimal, thoughtfully
              crafted essentials that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              TENFINITY was founded with a simple belief: quality over quantity. In a world of fast fashion, we chose to
              go against the grain and create pieces that matter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every product is carefully designed and crafted to last. We use premium materials sourced responsibly and
              manufacture ethically.
            </p>
          </div>
          <div className="bg-muted rounded-lg h-96" />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 bg-muted/30">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We never compromise on quality. Each piece is made to last a lifetime.",
              },
              {
                title: "Sustainability",
                description: "Ethical production and sustainable materials are core to our operations.",
              },
              {
                title: "Minimalism",
                description: "We believe less is more. Simple, timeless designs for modern living.",
              },
            ].map((value) => (
              <div key={value.title} className="space-y-2">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to explore?</h2>
          <p className="text-lg text-muted-foreground">Discover our curated collection of premium essentials.</p>
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
