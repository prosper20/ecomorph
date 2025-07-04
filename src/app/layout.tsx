import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Footer } from "@/components/Footer";
// import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Ecomorph Projects Limited - Logistics | Procurement | Construction | Oil & Gas',
    template: '%s - Ecomorph Projects Limited',
  },
  description:
    'Ecomorph Projects Ltd delivers innovative, efficient, and sustainable solutions in logistics, procurement, construction, and oil & gas. Trusted partner for high-quality services across Nigeria and beyond.',

  metadataBase: new URL('https://www.ecomorphprojectsltd.com'),
  
  openGraph: {
    title: 'Ecomorph Projects Limited | Logistics | Procurement | Construction | Oil & Gas',
    description:
      'Leading provider of logistics, procurement, construction, and oil & gas services. We deliver tailored solutions that drive growth, efficiency, and value.',
    url: 'https://www.ecomorphprojectsltd.com',
    siteName: 'Ecomorph Projects Limited',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ecomorph Projects Limited | Logistics | Procurement | Construction | Oil & Gas',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ecomorph Projects Limited | Logistics | Procurement | Construction | Oil & Gas',
    description:
      'Delivering innovative, efficient, and sustainable solutions in logistics, procurement, construction, and oil & gas across Nigeria and beyond.',
    images: ['/opengraph-image.png'], // Your actual OG image
  },

  keywords: [
    'Logistics Services Nigeria',
    'Procurement Services Nigeria',
    'Construction Company Nigeria',
    'Oil and Gas Services',
    'Modular Construction',
    'Shipping Container Shops',
    'Container Repurposing',
    'Supply Chain Management',
    'Civil Engineering',
    'Project Management',
    'Freight Forwarding',
    'Oil and Gas Maintenance',
    'Blasting and Painting Services',
    'Ecomorph Projects Ltd',
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Ecomorph" />
      <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent`}
      >
        {/* <Navbar /> */}
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
