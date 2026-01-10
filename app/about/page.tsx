import Image from "next/image"
import { Heart, Shield, Lightbulb, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About SS Hospital, Hosur — Vision, Mission & Founder",
  description:
    "Learn about SS Hospital's founder, history, vision and mission. Committed to compassionate, safe and advanced healthcare in Hosur.",
}

const values = [
  { icon: Shield, title: "Patient Safety", description: "Your safety is our top priority" },
  { icon: Award, title: "Clinical Excellence", description: "World-class medical standards" },
  { icon: Heart, title: "Compassion", description: "Care with empathy and kindness" },
  { icon: Users, title: "Integrity", description: "Honest and ethical practices" },
  { icon: Lightbulb, title: "Innovation", description: "Modern medicine, better outcomes" },
]

const milestones = [
  { year: "2005", event: "SS Hospital founded with a vision to serve Hosur" },
  { year: "2010", event: "Expanded to 100+ beds with advanced diagnostics" },
  { year: "2015", event: "Launched specialized cardiac and orthopaedic centers" },
  { year: "2020", event: "Achieved 50,000+ successful surgeries milestone" },
  { year: "2024", event: "Introduced state-of-the-art imaging and ICU facilities" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      

      
            {/* Hero Section with Parallax */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Parallax Background */}
              <div
                className="absolute inset-0 parallax"
                style={{
                  backgroundImage: "url('/images/Hospital Images/MSD_3557.JPG')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      
              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                    About SS Hospital 
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Orthopaedic hospital in Hosur, Joint replacement hospital Hosur, Knee replacement Hosur, Hip replacement Hosur, Bone and joint specialist Hosur, Emergency orthopaedic care Hosur.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    
                  </div>
                </div>
              </div>
              </section>

      {/* Founder Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
                <Image
                  src="/images/founder.png"
                  alt="Mr. Srineevasa Gowda — Founder of SS Hospital Hosur"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl object-cover w-full"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Doctor.Mr. Srineevasa Gowda</h2>
              <p className="text-primary font-medium text-lg mb-4">M.B.B.S, D. Ortho., DNB, MNAMS, MCH-Ortho</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 25+ of experience in healthcare administration, Mr. Srineevasa Gowda founded SS
                Hospital with a singular mission — to bring world-class medical care to Hosur and surrounding regions.
                His unwavering commitment to patient welfare and clinical excellence has transformed SS Hospital into a
                trusted multispeciality institution serving thousands of families.
              </p>
            
              <p className="text-muted-foreground leading-relaxed">
                Under his visionary leadership, SS Hospital continues to expand its services, adopt cutting-edge
                technologies, and maintain the highest standards of compassionate care.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-center">Our Commitment</h3>
                <p className="leading-relaxed text-center">
                  To provide world-class compassionate healthcare to the Hosur region and become the most trusted name
                  in medical excellence.
                </p>
                </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="leading-relaxed">
                  To provide world-class compassionate healthcare to the Hosur region and become the most trusted name
                  in medical excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  Deliver safe, accessible, and affordable healthcare using modern medicine, advanced technology, and
                  kind, patient-centered care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
       <section className="py-20 bg-gradient-to-br from-slate-100 to-sky-200 rounded rounded-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                </div>
                <div className="pt-4">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     



      {/* Values */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-muted/30">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
      Our Core Values
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
      {values.map((value, index) => (
        <Card
          key={index}
          className="group border-0 shadow-md rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/10 hover:to-primary/5"
        >
          <CardContent className="p-6 text-center transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary-dark transition-colors duration-300">
              {value.title}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {value.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      {/* <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Experience Our Care</h2>
          <p className="mb-8 max-w-xl mx-auto">Meet our expert doctors and explore our world-class departments.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/doctors">Meet Our Doctors</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/departments">View Departments</Link>
            </Button>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-gradient-to-r from-primary/90 via-primary/80 to-teal-600 text-primary-foreground">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-serif font-bold mb-4">
      Experience Our Care
    </h2>
    <p className="mb-8 max-w-xl mx-auto">
      Meet our expert doctors and explore our world-class departments.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <Button asChild size="lg" variant="secondary">
        <Link href="/doctors">Meet Our Doctors</Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-white bg-transparent"
      >
        <Link href="/departments">View Departments</Link>
      </Button>
    </div>
  </div>
</section>

    </main>
  )
}
