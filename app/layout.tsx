import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Owen R - Web Developer & Designer",
  description:
    "I'm happy to present you my personal portfolio created by me. I'm a software developer and designer open to work on anything you need, from landing pages to a full ecommerce website with an admin panel.",
  keywords: [
    "Owen Web Developer",
    "Web Developer",
    "Web Designer",
    "Software Developer",
    "Website",
    "Developer near me",
    "Ecommerce",
  ],
  creator: "Owen Rodriguez",
  category: "Web Developer",
  verification: {
    google: "4ylWUxzrlqKMXnRcm4T8GV4zjj4ufM9vU_qE_ZqFXmU",
  },
  metadataBase: new URL("https://owendev-one.vercel.app"),
  alternates: {
    canonical: "https://owendev-one.vercel.app",
  },
  openGraph: {
    title: "Owen R - Web Developer & Designer",
    description:
      "I'm happy to present you my personal portfolio created by me. I'm a software developer and designer open to work on anything you need, from landing pages to a full ecommerce website with an admin panel.",
    url: "https://owendev-one.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owen R - Developer",
    description:
      "I'm happy to present you my personal portfolio created by me. I'm a software developer and designer open to work on anything you need, from landing pages to a full ecommerce website with an admin panel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Owen Developer & Design",
  description:
    "Freelance Web Developer & Designer based in New Jersey, United States. Open to help startups to bigger companies that wants to grow.",
  url: "https://owendev-one.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </NextUIProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
