"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Doctors", href: "/doctors" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top bar with emergency number */}
      <div className="bg-teal text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p className="hidden sm:block">Welcome to SS Hospital, Hosur</p>
          <a href="tel:+919442599330" className="flex items-center gap-2 font-medium hover:text-gold transition-colors">
            <Phone className="h-4 w-4" />
            Emergency: +91-9442599330
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"   // change path to your actual logo
                alt="SS Hospital Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className={`font-serif font-bold text-lg ${isScrolled ? "text-charcoal" : "text-white"}`}>
                SS Hospital
              </p>
              <p className={`text-xs ${isScrolled ? "text-charcoal-light" : "text-white/80"}`}>Hosur</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  isScrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:block">
              <Button className="bg-coral hover:bg-coral-dark text-white rounded-xl">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className={isScrolled ? "text-charcoal" : "text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-charcoal hover:text-teal transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-coral hover:bg-coral-dark text-white rounded-xl">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
