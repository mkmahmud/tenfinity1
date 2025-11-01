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
              Fashion Without Limits: Redefining Style, Empowering Individuality, and Inspiring Confidence in Every Outfit
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
              TENFINITY started with a simple idea: fashion should be limitless. Founded by a team passionate about creativity and style, we wanted to create a brand that not only offers clothing but inspires confidence, individuality, and self-expression.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the first sketch to the final stitch, every piece is designed with care, blending modern trends with timeless elegance. We believe that every outfit tells a story, and with TENFINITY, that story is yours to create.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey is fueled by the love for fashion, attention to detail, and the desire to make every customer feel unique. TENFINITY isn’t just about what you wear—it’s about who you are.
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
