import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata = {
  title: "Contact Us | SS Hospital",
  description:
    "Contact SS Hospital Hosur for appointments, emergency support, and medical enquiries.",
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hospitals/kafeel.png"
            alt="Contact SS Hospital"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            We are here to assist you 24/7. Reach out to us for appointments,
            emergencies, or general enquiries.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
              <Phone className="h-10 w-10 text-teal mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-charcoal-light text-sm mb-2">
                24/7 Emergency Support
              </p>
              <a href="tel:+919442599330" className="text-teal font-medium">
                +91 94425 99330
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
              <Mail className="h-10 w-10 text-teal mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-charcoal-light text-sm mb-2">
                Get quick responses
              </p>
              <a
                href="mailto:info@sshospital.com"
                className="text-teal font-medium"
              >
                info@sshospital.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
              <MapPin className="h-10 w-10 text-teal mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-charcoal-light text-sm">
                Hosur, Tamil Nadu – 635109
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
        <section className="py-20 bg-gradient-to-br from-slate-100 to-sky-200 rounded rounded-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">
                Send Us a Message
              </h2>
              <p className="text-charcoal-light mb-6">
                Fill out the form and our team will contact you shortly.
              </p>

              <ul className="space-y-3 text-sm text-charcoal-light">
                <li>✔ Appointment booking support</li>
                <li>✔ Emergency assistance</li>
                <li>✔ General hospital enquiries</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg">
              <form className="space-y-4">
                <Input placeholder="Your Name" className="rounded-xl" />
                <Input placeholder="Phone Number" className="rounded-xl" />
                <Input placeholder="Email Address" className="rounded-xl" />
                <Textarea
                  placeholder="Your Message"
                  className="rounded-xl"
                />

                <Button className="w-full bg-teal hover:bg-teal-dark text-white rounded-xl py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[450px] w-full">
        <iframe
          src="https://www.google.com/maps?q=12.7411378,77.8185751&z=17&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </>
  )
}
