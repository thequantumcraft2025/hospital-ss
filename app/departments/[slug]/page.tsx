import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Phone, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { departments, doctors } from "@/lib/data"

export async function generateStaticParams() {
  return departments.map((dept) => ({
    slug: dept.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dept = departments.find((d) => d.id === slug)
  if (!dept) return {}

  return {
    title: `${dept.name} at SS Hospital, Hosur — Advanced ${dept.name} Care`,
    description: dept.fullDescription,
  }
}

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website, call our reception, or visit the hospital directly. We recommend booking in advance for specialist consultations.",
  },
  {
    question: "What should I bring for my first visit?",
    answer:
      "Please bring your ID proof, any previous medical records, current medications list, and insurance details if applicable.",
  },
  {
    question: "Are emergency services available?",
    answer:
      "Yes, our emergency department operates 24/7. For medical emergencies, please call our emergency hotline or come directly to the hospital.",
  },
]

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dept = departments.find((d) => d.id === slug)

  if (!dept) {
    notFound()
  }

  const deptDoctors = doctors.filter((doc) => doc.department === slug)

  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-teal py-24 mt-[104px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/departments"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Departments
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <dept.icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">{dept.name}</h1>
          </div>
          <p className="text-white/90 text-lg max-w-2xl">{dept.shortDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">About Our {dept.name} Department</h2>
                <p className="text-charcoal-light leading-relaxed">{dept.fullDescription}</p>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Services We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {dept.services.map((service) => (
                    <div key={service} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <CheckCircle className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctors */}
              {deptDoctors.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Our {dept.name} Specialists</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {deptDoctors.map((doctor) => (
                      <Card key={doctor.id} className="bg-white border-0 shadow-md rounded-2xl overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex gap-4 p-4">
                            <img
                              src={doctor.image || "/placeholder.svg"}
                              alt={`${doctor.name} - ${doctor.specialty} at SS Hospital Hosur`}
                              className="w-20 h-20 rounded-xl object-cover"
                            />
                            <div>
                              <h3 className="font-serif font-bold text-charcoal">{doctor.name}</h3>
                              <p className="text-sm text-teal">{doctor.qualification}</p>
                              <p className="text-sm text-charcoal-light mt-1">{doctor.experience} experience</p>
                            </div>
                          </div>
                          <div className="px-4 pb-4">
                            <Link href={`/doctors/${doctor.id}`}>
                              <Button className="w-full bg-teal hover:bg-teal-dark text-white rounded-xl">
                                View Profile
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-white rounded-xl shadow-sm border-0 px-6"
                    >
                      <AccordionTrigger className="text-charcoal font-medium hover:text-teal">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-charcoal-light">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Appointment Card */}
              <Card className="bg-coral text-white border-0 rounded-2xl overflow-hidden sticky top-32">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Book an Appointment</h3>
                  <p className="text-white/90 text-sm mb-6">
                    Schedule a consultation with our {dept.name.toLowerCase()} specialists today.
                  </p>
                  <div className="space-y-3">
                    <Link href="/contact">
                      <Button className="w-full bg-white text-coral hover:bg-white/90 rounded-xl">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Online
                      </Button>
                    </Link>
                    <a href="tel:+919876543210">
                      <Button
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white/10 rounded-xl mt-3 bg-transparent"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={dept.image || "/placeholder.svg"}
                  alt={`${dept.name} department at SS Hospital Hosur`}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
