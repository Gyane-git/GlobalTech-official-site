import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import FloatingSupport from "../components/FloatingSupport";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobalTech Solutions | IRD Certified Accounting Software, ERP & Cloud Services Nepal",
  description:
    "GlobalTech Solution Pvt. Ltd. (Teku, Kathmandu) provides IRD-certified OMS accounting software, enterprise ERP, cloud hosting, and web development in Nepal. Trusted by 10,000+ businesses.",
  keywords: [
    "accounting software Nepal",
    "IRD approved billing software",
    "OMS Lite",
    "OMS ERP Nepal",
    "GlobalTech Solution Kathmandu",
    "cloud accounting software Nepal",
    "POS software Nepal",
    "hospital management software Nepal",
    "payroll software Nepal",
    "VAT billing software Nepal",
  ],
  icons: {
    icon: "/logo-global.png",
  },
  authors: [{ name: "Globaltech Solution Pvt. Ltd." }],
  creator: "Globaltech Solution Pvt. Ltd.",
  publisher: "Globaltech Solution Pvt. Ltd.",
  openGraph: {
    title: "GlobalTech Solutions | IRD Certified Accounting & ERP Systems Nepal",
    description:
      "Nepal's trusted business software company offering IRD-approved e-billing, OMS ERP, cloud hosting, and custom software development.",
    url: "https://globaltech.com.np/",
    siteName: "GlobalTech Solutions",
    images: [
      {
        url: "/globaltech-logo.png",
        width: 1200,
        height: 630,
        alt: "GlobalTech Solutions - Software & Cloud Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalTech Solutions | IRD Certified Software & Cloud Services",
    description:
      "Powerful business software including accounting, ERP, POS billing, cloud hosting, and IT services in Nepal.",
    images: ["/globaltech-logo.png"],
    creator: "@globaltechnepal",
  },
  metadataBase: new URL("https://globaltech.com.np/"),
  alternates: {
    canonical: "https://globaltech.com.np/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://globaltech.com.np/#organization",
      name: "Globaltech Solution Pvt. Ltd.",
      url: "https://globaltech.com.np/",
      logo: "https://globaltech.com.np/logo.png",
      image: "https://globaltech.com.np/globaltech-logo.png",
      description:
        "Leading provider of IRD certified accounting software (OMS), enterprise ERP, cloud hosting, and custom software development in Kathmandu, Nepal.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Teku",
        addressLocality: "Kathmandu",
        postalCode: "44600",
        addressCountry: "NP",
      },
      telephone: "+977-1-5329949",
      email: "info@globaltechnepal.com",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:30",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
    },
    {
      "@type": "SoftwareApplication",
      name: "GlobalTech OMS (Organization Management Software)",
      operatingSystem: "Windows, Linux, Web, Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NPR",
        description: "30-Day Free Trial Available",
      },
      featureList: [
        "IRD Certified Electronic Tax Invoicing",
        "Automated VAT Annexure 13 Sales & Purchase Registers",
        "Multi-Warehouse Inventory & Batch Tracking",
        "Point of Sale (POS) Counter Billing",
        "Biometric Attendance & Payroll Processing",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        <HeaderBar />

        {children}

        <Footer />

        {/* Floating WhatsApp & Hotline Support Widget */}
        <FloatingSupport />

        {/* Tawk.to Chat Widget */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script");
                s1.async=true;
                s1.src='https://embed.tawk.to/686bb0dca86aec190ca6b4f4/1ivialoc3';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                document.body.appendChild(s1);
              })();
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
