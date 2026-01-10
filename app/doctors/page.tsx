import Link from "next/link"
import { Calendar, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { doctors, departments } from "@/lib/data"

export const metadata = {
  title: "Meet Our Doctors — SS Hospital Hosur",
  description: "Find experienced consultants and book appointments with specialists at SS Hospital, Hosur.",
}

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
         {/* Hero Section with Parallax */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Parallax Background */}
              <div
                className="absolute inset-0 parallax"
                style={{
                  backgroundImage: "url('/images/web images/doc.JPG')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      
              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                    Our Doctors & Consultants
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                   Experienced specialists across core disciplines with patient-first care. Find the right doctor for your needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    
                  </div>
                </div>
              </div>
              </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => {
              const dept = departments.find((d) => d.id === doctor.department)
              return (
                <Card
                  key={doctor.id}
                  className="group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={doctor.image || "/placeholder.svg"}
                        alt={`${doctor.name} - ${doctor.specialty} at SS Hospital Hosur`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-teal text-white">{dept?.name}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-serif text-xl font-bold text-charcoal">{doctor.name}</h2>
                      <p className="text-teal text-sm font-medium">{doctor.qualification}</p>
                      <p className="text-charcoal-light text-sm mt-1">{doctor.specialty}</p>

                      <div className="mt-4 space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-charcoal-light">
                          <Clock className="h-4 w-4 text-coral" />
                          <span>{doctor.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-charcoal-light">
                          <Calendar className="h-4 w-4 text-coral" />
                          <span>
                            {doctor.opDays} | {doctor.opTime}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <Link href={`/doctors/${doctor.id}`} className="flex-1">
                          <Button className="w-full bg-teal hover:bg-teal-dark text-white rounded-xl">
                            View Profile
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-coral text-coral hover:bg-coral hover:text-white rounded-xl bg-transparent"
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to Consult a Specialist?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Book an appointment with our expert doctors today and take the first step towards better health.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-coral hover:bg-coral-dark text-white rounded-xl">
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
