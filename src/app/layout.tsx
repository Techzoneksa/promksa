import type { Metadata } from "next";
import { Almarai, IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prominent Experts",
    template: "%s | Prominent Experts",
  },
  description: "وكالة تصميم وتسويق رقمي في السعودية - تصميم مواقع، متاجر إلكترونية، تطبيقات جوال، هوية بصرية، حلول ذكاء اصطناعي.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Prominent Experts",
    locale: "ar_SA",
    type: "website",
  },
  icons: { icon: "/prominent-logo.svg", apple: "/icons/icon-192.svg" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#7448F5" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prominent Experts",
              url: "https://promksa.com",
              logo: "https://promksa.com/prominent-logo.svg",
              description: "وكالة تصميم وتسويق رقمي في السعودية",
              address: { "@type": "PostalAddress", addressLocality: "جدة", addressCountry: "SA" },
              contactPoint: { "@type": "ContactPoint", telephone: "+966595394940", contactType: "customer service" },
            }),
          }}
        />
      </head>
      <body className={`${almarai.variable} ${ibmPlexArabic.variable} ${jetBrainsMono.variable} font-body antialiased`}>
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
