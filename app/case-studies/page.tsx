import Link from "next/link"
import { ArrowRight, User, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { caseStudies } from "@/lib/data"
import Image from "next/image";

export const metadata = {
  title: "Case Studies — Patient Stories | SS Hospital Hosur",
  description: "Read patient success stories and clinical case studies from SS Hospital Hosur.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-teal py-24 mt-[104px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies — Patient Stories & Clinical Successes
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Anonymized success stories showing outcomes, treatment approaches, and the dedication of our medical team.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-coral text-white">{study.department}</Badge>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">{study.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-charcoal-light mb-4">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {study.patient}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {study.doctor}
                        </span>
                      </div>
                      <p className="text-charcoal-light mb-6">{study.summary}</p>

                      <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-coral/5 p-4 rounded-xl">
                          <h4 className="font-semibold text-charcoal text-sm mb-1">Challenge</h4>
                          <p className="text-charcoal-light text-sm">{study.challenge}</p>
                        </div>
                        <div className="bg-teal/5 p-4 rounded-xl">
                          <h4 className="font-semibold text-charcoal text-sm mb-1">Intervention</h4>
                          <p className="text-charcoal-light text-sm">{study.intervention}</p>
                        </div>
                        <div className="bg-gold/5 p-4 rounded-xl">
                          <h4 className="font-semibold text-charcoal text-sm mb-1">Outcome</h4>
                          <p className="text-charcoal-light text-sm">{study.outcome}</p>
                        </div>
                      </div>

                      <Button className="bg-teal hover:bg-teal-dark text-white rounded-xl">
                        Download Full Case Study (PDF)
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
          <section className="relative py-20 overflow-hidden bg-off-white">
                       {/* Background Image */}
                       <div className="absolute inset-0 z-0">
                         <Image
                           src="/images/hospitals/kafeel.png"
                           alt="Hospital background"
                           fill
                           priority
                           className="object-cover opacity-80"
                         />
               
                         {/* Overlay */}
                         <div className="absolute inset-0 bg-white/60" />
                       </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">Your Story Could Be Next</h2>
          <p className="text-charcoal-light max-w-2xl mx-auto mb-8">
            Experience the same level of care and expertise that has helped countless patients recover and thrive.
          </p>
          <Link href="/contact">
             <Button size="lg" className="bg-coral hover:bg-coral-dark text-white rounded-xl">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
