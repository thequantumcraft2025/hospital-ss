import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const departments = [
  { name: "Orthopaedics (Department)", href: "/departments/Orthopaedics (department)" },
  { name: "Anaethesiology (Department)", href: "/departments/Anaethesiology (Department)" },
  { name: "Plastic Surgery (Department)", href: "/departments/Plastic Surgery Department" },
  { name: "Diagnostics (Department)", href: "/departments/diagnostics (Department)" },
  { name: "General Surgery", href: "/departments/surgery" },
  { name: "Emergency Care", href: "/departments/emergency" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">SS</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg">SS Hospital</p>
                <p className="text-xs text-white/70">Hosur</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              SS Hospital is a full-service multispeciality hospital in Hosur offering advanced treatments with
              round-the-clock emergency services and compassionate care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-teal transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link href={dept.href} className="text-white/80 hover:text-teal transition-colors text-sm">
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                 Srinivasa Speciality Hospital,
                 <br/>
                 Near Traffic Police Station, 80ft Road, Vaishnavi Nagar,
                  <br />
                 Hosur Tamil Nadu 635109
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-coral shrink-0" />
                <a href="tel:+919442599330" className="text-white/80 hover:text-teal transition-colors text-sm">
                  +91-9442599330
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-coral shrink-0" />
                <a
                  href="mailto:info@sshospital.com"
                  className="text-white/80 hover:text-teal transition-colors text-sm"
                >
                  info@sshospital.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-coral shrink-0" />
                <span className="text-white/80 text-sm">24/7 Emergency Services</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-medium mb-3 text-sm">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                />
                <Button className="bg-teal hover:bg-teal-dark rounded-xl shrink-0">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} The Quantum Craft. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
