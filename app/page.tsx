"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Calendar,
  Clock,
  Users,
  Building,
  Stethoscope,
  Heart,
  Baby,
  FlaskConical,
  Siren,
  Video,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CountUp } from "@/components/ui/CountUp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Siren,
    title: "Emergency Care",
    description:
      "24/7 emergency services with rapid response teams and advanced life support.",
    href: "/departments/emergency",
  },
  {
    icon: Stethoscope,
    title: "Outpatient Services",
    description:
      "Comprehensive consultations with specialists across all departments.",
    href: "/departments",
  },
  {
    icon: FlaskConical,
    title: "Diagnostics & Lab",
    description: "State-of-the-art diagnostic imaging and pathology services.",
    href: "/departments/diagnostics",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Advanced cardiac care including angiography, PCI, and heart failure management.",
    href: "/departments/cardiology",
  },
  {
    icon: Baby,
    title: "Maternity Care",
    description:
      "Complete maternity services from prenatal care to delivery and postnatal support.",
    href: "/departments/maternity",
  },
  {
    icon: Video,
    title: "Teleconsultation",
    description:
      "Virtual consultations with our specialists from the comfort of your home.",
    href: "/contact",
  },
];

const stats = [
  { icon: Clock, value: 15, suffix: "+", label: "Years of Service" },
  { icon: Building, value: 100, suffix: "+", label: "Beds Capacity" },
  { icon: Users, value: 50, suffix: "+", label: "Expert Doctors" },
  { icon: Stethoscope, value: 24, suffix: "/7", label: "Emergency Care" },
];

const features = [
  "Advanced Medical Equipment",
  "Experienced Specialists",
  "Patient-Centered Care",
  "Affordable Treatment",
  "Modern Facilities",
  "Emergency Response",
];

const images = [
  "/images/hospitals/kafeel.png",
  "/images/hospitals/hospital2.jpg",
  "/images/hospitals/hospital3.jpg",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  // Image auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // parallax speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${offset}px)`,
              willChange: "transform",
            }}
          />
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              SS Hospital, Hosur — Compassionate Care. Modern Medicine.
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Multispeciality hospital delivering advanced treatments with a
              patient-first approach. Emergency care | Expert doctors | 24/7
              support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-coral hover:bg-coral-dark text-white rounded-xl text-lg px-8 w-full sm:w-auto"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book an Appointment
                </Button>
              </Link>

              <a href="tel:+91 94425 99330">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal rounded-xl text-lg px-8 w-full sm:w-auto bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal font-medium text-sm uppercase tracking-wider">
                Welcome to SS Hospital
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-6 text-balance">
                Your Trusted Healthcare Partner in Hosur
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                SS Hospital is a full-service multispeciality hospital in Hosur
                offering cardiac, orthopaedic, maternity, and diagnostic care
                with round-the-clock emergency services. Our experienced team
                delivers evidence-based treatment in a caring environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal shrink-0" />
                    <span className="text-sm text-charcoal">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="bg-teal hover:bg-teal-dark text-white rounded-xl">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/navy-medicine-uSvk2w9sMVs-unsplash (1).jpg"
                alt="Doctor caring for patient at SS Hospital"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-coral text-white p-6 rounded-2xl shadow-lg">
                <p className="font-serif text-3xl font-bold">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-off-white relative overflow-hidden">
        {/* Subtle parallax background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 parallax"
            style={{
              backgroundImage: "url('/abstract-medical-pattern.png')",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4 text-balance">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              From emergency care to specialized treatments, we offer a full
              range of medical services tailored to meet your healthcare needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative bg-white border-0 rounded-2xl overflow-hidden
                 shadow-md hover:shadow-xl transition-all duration-300
                 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-gradient-to-br from-sky-100/70 via-sky-200/50 to-blue-200/60 "
                />

                <CardContent className="relative z-10 p-6">
                  <div
                    className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4
                        group-hover:bg-sky-500 transition-colors"
                  >
                    <service.icon className="h-7 w-7 text-sky-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    {service.title}
                  </h3>

                  <p className="text-charcoal-light text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sky-600 font-medium text-sm
                     hover:text-sky-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 overflow-hidden">
  {/* Background Video */}
 <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
>
  <source src="/videos/dna.mp4" type="video/mp4" />
</video>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <stat.icon className="h-8 w-8 text-white" />
          </div>

          <p className="font-serif text-4xl font-bold text-white mb-1">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </p>

          <p className="text-white/80 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Appointment Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-sky-200 rounded rounded-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 lg:p-12">
                <span className="text-coral font-medium text-sm uppercase tracking-wider">
                  Book Now
                </span>
                <h2 className="font-serif text-3xl font-bold text-white mt-3 mb-6">
                  Schedule Your Appointment
                </h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                    />
                    <Input
                      placeholder="Phone Number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white rounded-xl [&>span]:text-white/50 [&>span]:data-[placeholder]:text-white/50">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="orthopaedics">Orthopaedics</SelectItem>
                      <SelectItem value="maternity">Maternity Care</SelectItem>
                      <SelectItem value="diagnostics">Diagnostics</SelectItem>
                      <SelectItem value="surgery">General Surgery</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="date"
                    className="bg-white/10 border-white/20 text-white rounded-xl"
                  />
                  <Button className="w-full bg-coral hover:bg-coral-dark text-white rounded-xl text-lg py-6">
                    Book Appointment
                  </Button>
                </form>
              </div>

              {/* Image */}
              <div className="relative hidden lg:block">
                <img
                  src="/friendly-hospital-reception-with-modern-interior.jpg"
                  alt="Hospital reception"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-transparent" />
              </div>
            </div>
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

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Need Immediate Assistance?
          </h2>

          <p className="text-charcoal-light max-w-2xl mx-auto mb-8">
            Our emergency team is available 24/7. Don&apos;t hesitate to reach
            out for any medical emergencies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+9194425-99330">
              <Button
                size="lg"
                className="bg-coral hover:bg-coral-dark text-white rounded-xl text-lg px-8 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Now
              </Button>
            </a>

            <Link href="/doctors">
              <Button
                size="lg"
                variant="outline"
                className="border-teal text-teal hover:bg-teal hover:text-white rounded-xl text-lg px-8 w-full sm:w-auto bg-transparent"
              >
                Meet Our Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
