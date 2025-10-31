"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "support@tenfinity.com",
      description: "We'll respond within 24 hours",
      link: "mailto:support@tenfinity.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Fashion Street, NY 10001",
      description: "Our flagship store",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Online Support",
      description: "Always available to help",
      link: "#",
    },
  ]

  const faqs = [
    {
      question: "What is your shipping policy?",
      answer:
        "We offer free shipping on orders over $100 with 3-5 business day delivery. Express shipping options available.",
    },
    {
      question: "Can I return my order?",
      answer: "Yes, we offer hassle-free returns within 30 days of purchase with free return shipping.",
    },
    {
      question: "Do you accept international orders?",
      answer: "Currently, we ship within the United States. We're expanding international shipping soon!",
    },
    {
      question: "How can I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can track it through our portal.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">We'd Love to Hear From You</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have a question about our products or need support? Our team is here to help you create the perfect
            wardrobe.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map(({ icon: Icon, title, details, description, link }) => (
              <a
                key={title}
                href={link}
                className="group p-6 rounded-xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-accent font-medium text-sm mb-2">{details}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-accent/10 border border-accent/30 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-accent">Message sent successfully!</p>
                    <p className="text-sm text-accent/80">Thank you for contacting us. We'll respond soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white resize-none"
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Quick answers to common questions.</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white border border-border hover:border-accent hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex gap-3">
                      <MessageSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every product undergoes rigorous quality checks to ensure premium standards and exceptional durability.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Sustainable Practices</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We're committed to ethical manufacturing and sustainable materials for a better future.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Customer Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our dedicated support team is available 24/7 to assist with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
