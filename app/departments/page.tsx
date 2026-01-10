import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { departments } from "@/lib/data"

export const metadata = {
  title: "Departments — Joint Replacement, Orthopaedics & More | SS Hospital Hosur",
  description:
    "Explore all departments at SS Hospital. Advanced treatments, experienced specialists, and patient-centered care.",
}

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-off-white">
       {/* Hero Section */}
      

      
            {/* Hero Section with Parallax */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Parallax Background */}
              <div
                className="absolute inset-0 parallax"
                style={{
                  backgroundImage: "url('/images/Hospital Images/MAJOR OT.JPG')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      
              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                    Our Departments & Specialities
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    SS Hospital offers multidisciplinary care across various specialities. Our departments work together to provide comprehensive treatment for every patient.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    
                  </div>
                </div>
              </div>
              </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card
                key={dept.id}
                className="group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={`${dept.name} department at SS Hospital Hosur`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <dept.icon className="h-6 w-6 text-teal" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-bold text-charcoal mb-2">{dept.name}</h2>
                  <p className="text-charcoal-light text-sm mb-4 leading-relaxed">{dept.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/doctors/${dept.leadDoctor.slug}`}
                      className="text-sm text-teal hover:text-teal-dark transition-colors"
                    >
                      Lead: {dept.leadDoctor.name}
                    </Link>
                    <Link href={`/departments/${dept.id}`}>
                      <Button size="sm" variant="ghost" className="text-coral hover:text-coral-dark hover:bg-coral/10">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Need Help Choosing a Department?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Our team can help you find the right specialist for your needs. Book an appointment or call us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral-dark text-white rounded-xl w-full sm:w-auto">
                Book Appointment
              </Button>
            </Link>
            <Link href="/doctors">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal rounded-xl w-full sm:w-auto bg-transparent"
              >
                View All Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
