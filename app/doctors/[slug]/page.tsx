import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Phone, Languages, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { doctors, departments } from "@/lib/data"

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = doctors.find((d) => d.id === slug)
  if (!doctor) return {}

  return {
    title: `${doctor.name} — ${doctor.specialty} | SS Hospital Hosur`,
    description: `Book a consultation with ${doctor.name}, experienced ${doctor.specialty} at SS Hospital Hosur.`,
  }
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = doctors.find((d) => d.id === slug)

  if (!doctor) {
    notFound()
  }

  const dept = departments.find((d) => d.id === doctor.department)

  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-teal py-24 mt-[104px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/doctors"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Doctors
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <div>
              <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden sticky top-32 -mt-32">
                <CardContent className="p-0">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={`${doctor.name} - ${doctor.specialty} at SS Hospital Hosur`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 text-center">
                    <Badge className="bg-teal/10 text-teal mb-3">{dept?.name}</Badge>
                    <h1 className="font-serif text-2xl font-bold text-charcoal">{doctor.name}</h1>
                    <p className="text-teal font-medium">{doctor.qualification}</p>
                    <p className="text-charcoal-light text-sm mt-1">{doctor.specialty}</p>

                    <div className="mt-6 space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-coral hover:bg-coral-dark text-white rounded-xl">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Consultation
                        </Button>
                      </Link>
                      <a href="tel:+919876543210">
                        <Button
                          variant="outline"
                          className="w-full border-teal text-teal hover:bg-teal hover:text-white rounded-xl mt-3 bg-transparent"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call to Book
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">About {doctor.name}</h2>
                <p className="text-charcoal-light leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Info Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-white border-0 shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                        <Award className="h-5 w-5 text-teal" />
                      </div>
                      <h3 className="font-semibold text-charcoal">Experience</h3>
                    </div>
                    <p className="text-charcoal-light">{doctor.experience}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center">
                        <Languages className="h-5 w-5 text-coral" />
                      </div>
                      <h3 className="font-semibold text-charcoal">Languages</h3>
                    </div>
                    <p className="text-charcoal-light">{doctor.languages.join(", ")}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-gold" />
                      </div>
                      <h3 className="font-semibold text-charcoal">OP Days</h3>
                    </div>
                    <p className="text-charcoal-light">{doctor.opDays}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                        <Clock className="h-5 w-5 text-teal" />
                      </div>
                      <h3 className="font-semibold text-charcoal">OP Timing</h3>
                    </div>
                    <p className="text-charcoal-light">{doctor.opTime}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Department Link */}
              {dept && (
                <Card className="bg-teal/5 border-0 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-charcoal">Department of {dept.name}</h3>
                        <p className="text-charcoal-light text-sm mt-1">{dept.shortDescription}</p>
                      </div>
                      <Link href={`/departments/${dept.id}`}>
                        <Button
                          variant="outline"
                          className="border-teal text-teal hover:bg-teal hover:text-white rounded-xl bg-transparent"
                        >
                          View Department
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
