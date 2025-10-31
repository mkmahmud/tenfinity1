"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  provider: "google" | "email"
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("tenfinity-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Dummy authentication
      if (!email || !password) {
        throw new Error("Email and password are required")
      }

      const dummyUser: User = {
        id: `user-${Date.now()}`,
        name: email.split("@")[0],
        email,
        provider: "email",
      }

      setUser(dummyUser)
      localStorage.setItem("tenfinity-user", JSON.stringify(dummyUser))
      console.log("[v0] User signed in:", dummyUser)
    } catch (error) {
      console.error("[v0] Sign in error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      if (!name || !email || !password) {
        throw new Error("All fields are required")
      }

      const dummyUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        provider: "email",
      }

      setUser(dummyUser)
      localStorage.setItem("tenfinity-user", JSON.stringify(dummyUser))
      console.log("[v0] User signed up:", dummyUser)
    } catch (error) {
      console.error("[v0] Sign up error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setIsLoading(true)
    try {
      // Dummy Google authentication
      const dummyUser: User = {
        id: `user-${Date.now()}`,
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://via.placeholder.com/40",
        provider: "google",
      }

      setUser(dummyUser)
      localStorage.setItem("tenfinity-user", JSON.stringify(dummyUser))
      console.log("[v0] User signed in with Google:", dummyUser)
    } catch (error) {
      console.error("[v0] Google sign in error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setUser(null)
    localStorage.removeItem("tenfinity-user")
    console.log("[v0] User signed out")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
