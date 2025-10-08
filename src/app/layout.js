import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageWrapper from "@/components/PageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Dinesh Mani Tripathi - Expert Legal Services | Civil, Criminal & Corporate Law",
    template: "%s | Dinesh Mani Tripathi Law Firm",
  },
  description:
    "Experienced legal professional with 25+ years in Civil Law, Criminal Defense, Family Law, and Corporate Law. Expert legal solutions with integrity and excellence. Free consultation available.",
  keywords: [
    "lawyer",
    "legal services",
    "civil law",
    "criminal law",
    "family law",
    "corporate law",
    "legal consultation",
    "attorney",
    "legal advice",
    "court representation",
    "legal dispute resolution",
    "property disputes",
    "criminal defense",
    "divorce lawyer",
    "estate planning",
  ],
  authors: [{ name: "Dinesh Mani Tripathi" }],
  creator: "Dinesh Mani Tripathi",
  publisher: "Dinesh Mani Tripathi Law Firm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dgtripathiandassociates.com",
    title: "Dinesh Mani Tripathi - Expert Legal Services",
    description:
      "Experienced legal professional with 25+ years in Civil Law, Criminal Defense, Family Law, and Corporate Law. Expert legal solutions with integrity and excellence.",
    siteName: "Dinesh Mani Tripathi Law Firm",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Dinesh Mani Tripathi - Legal Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Mani Tripathi - Expert Legal Services",
    description:
      "Experienced legal professional with 25+ years in Civil Law, Criminal Defense, Family Law, and Corporate Law.",
    images: ["/images/hero-image.png"],
  },

  alternates: {
    canonical: "https://www.dgtripathiandassociates.com",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Dinesh Mani Tripathi Law Firm",
    description:
      "Experienced legal professional with 25+ years in Civil Law, Criminal Defense, Family Law, and Corporate Law. Expert legal solutions with integrity and excellence.",
    url: "https://www.dgtripathiandassociates.com",
    logo: "https://www.dgtripathiandassociates.com/images/hero-image.png",
    image: "https://www.dgtripathiandassociates.com/images/hero-image.png",
    telephone: "+91-9323124265",
    email: "dineshmtripathi485@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400069",
      streetAddress: "ACBA 3rd floor, JMFC Court, Andheri(E) Mumbai-400069",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Civil Law",
      "Criminal Law",
      "Family Law",
      "Corporate Law",
      "Estate Planning",
      "High Court Original Side",
    ],
    provider: {
      "@type": "Person",
      name: "Dinesh Mani Tripathi",
      jobTitle: "Attorney at Law",
      description:
        "Dedicated legal professional with over 25 years of experience providing personalized legal services",
      knowsAbout: [
        "Civil Law",
        "Criminal Defense",
        "Family Law",
        "Corporate Law",
        "Estate Planning",
        "Legal Consultation",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "Master's degree in Law",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil Law Services",
            description:
              "Comprehensive legal support in civil law matters including partition suits, property disputes, recovery suits, and specific relief cases",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criminal Law Services",
            description:
              "Criminal law practice covering criminal proceedings, cheque bounce cases under NI Act, and related litigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Family Law Services",
            description:
              "Family law services including divorce, maintenance, child custody, domestic violence, and other family matters",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
