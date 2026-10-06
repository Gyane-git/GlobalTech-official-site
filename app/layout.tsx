import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import TawkToWidget from "@/components/TawkToWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobalTech Solutions | Accounting Software, Cloud Services & Web Development",
  description:
    "GlobalTech Solutions provides powerful accounting software, ERP systems, cloud services, web development, and complete IT solutions for businesses of all sizes. Streamline operations with secure, scalable, and customizable digital solutions.",
  keywords: [
    "accounting software",
    "ERP solutions",
    "cloud services",
    "web development",
    "IT solutions company",
    "business software",
    "custom software development",
    "order management system",
    "digital transformation",
  ],
   icons: {
    icon: "/logo-global.png",
  },
  authors: [{ name: "GlobalTech Solutions" }],
  creator: "GlobalTech Solutions",
  publisher: "GlobalTech Solutions",
  openGraph: {
    title: "GlobalTech Solutions | Accounting Software & Cloud Services",
    description:
      "A complete software and cloud solutions company offering accounting systems, ERP, web development, and IT services tailored for growing businesses.",
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
    title: "GlobalTech Solutions | Software, Cloud & Web Services",
    description:
      "Powerful business software including accounting, ERP, cloud hosting, and web development services.",
    images: ["/og-image.png"],
    creator: "@yourcompany",
  },
  metadataBase: new URL("https://globaltech.com.np/"),
  alternates: {
    canonical: "https://globaltech.com.np/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <HeaderBar />
//         {children}
//         <Footer />
//         {/* <TawkToWidget /> */}

//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderBar />

        {children}

        <Footer />

        {/* Tawk.to Chat Widget */}
        <script
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
        />
      </body>
    </html>
  );
}
