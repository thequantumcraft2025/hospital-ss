import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbox } from "@/components/chatbox"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

// export const metadata: Metadata = {
//   title: "SS Hospital, Hosur — Multispeciality Care & 24/7 Emergency",
//   description:
//     "SS Hospital Hosur offers advanced care across cardiology, orthopaedics, maternity, and diagnostics. Book an appointment today.",
//   openGraph: {
//     title: "SS Hospital, Hosur — Multispeciality Care & 24/7 Emergency",
//     description: "SS Hospital Hosur offers advanced care across cardiology, orthopaedics, maternity, and diagnostics.",
//     type: "website",
//   },
//     generator: 'v0.app'
// }

export const metadata: Metadata = {
  title: {
    default: "SS Hospital, Hosur — Multispeciality Care & 24/7 Emergency",
    template: "%s | SS Hospital Hosur",
  },
  description:
    "SS Hospital Hosur offers advanced care across cardiology, orthopaedics, maternity, and diagnostics. Book an appointment today.",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "SS Hospital, Hosur — Multispeciality Care & 24/7 Emergency",
    description:
      "SS Hospital Hosur offers advanced care across cardiology, orthopaedics, maternity, and diagnostics.",
    type: "website",
    images: [
      {
        url: "/images/hospital-hero.jpg",
        width: 1200,
        height: 630,
        alt: "SS Hospital Hosur",
      },
    ],
  },

  generator: "v0.app",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "SS Hospital, Hosur",
              image: "/images/hospital-hero.jpg",
              telephone: "+91-9876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Road",
                addressLocality: "Hosur",
                addressRegion: "Tamil Nadu",
                postalCode: "635109",
                addressCountry: "IN",
              },
              url: "https://sshospital-hosur.com",
              priceRange: "Varies",
              openingHours: "Mo-Su 00:00-23:59",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbox />
        <Analytics />
      </body>
    </html>
  )
}
